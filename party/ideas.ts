import type * as Party from 'partykit/server'
import { assertNever } from '../app/util/typecheck'
import { IdeasPartyKitPostRequest, IdeasRealtimeMessage, RealtimeIdeas } from '../app/util/types'
import { jsonString } from '../app/utils'

declare const DEVMODE: boolean
export default class Server implements Party.Server {
	ideasKey = 'ideas'
	ideas: RealtimeIdeas | null = null
	maxMessagesSize = 100
	constructor(readonly room: Party.Room) {}

	options: Party.ServerOptions = {
		hibernate: true,
	}

	async onStart() {}

	async onRequest(req: Party.Request) {
		if (req.method === 'POST') {
			const data = await req.json()
			console.debug(`received partykit post (data=${jsonString(data)})`)
			const parsed = IdeasPartyKitPostRequest.safeParse(data)
			if (parsed.success) {
				switch (parsed.data.type) {
					case 'newIdea': {
						if (this.ideas === null) {
							this.ideas = (await this.room.storage.get<RealtimeIdeas>(this.ideasKey)) ?? { ideas: [] }
						}
						const newIdeas = parsed.data.data.ideas
						this.ideas.ideas = this.ideas.ideas.concat(newIdeas)
						if (this.ideas.ideas.length > this.maxMessagesSize) {
							this.ideas.ideas = this.ideas.ideas.slice(-this.maxMessagesSize)
						}

						await this.saveIdeas()
						await this.broadcast({ type: 'newIdeas', ideas: newIdeas })
						return new Response(JSON.stringify({}))
					}
					case 'blah': {
						console.debug('received blah')
						return new Response(JSON.stringify({}))
					}
					default:
						assertNever(parsed.data)
				}
			} else {
				console.error('Invalid data', parsed.error.errors)
				return new Response(`invalid data (e=${jsonString(parsed.error)}, data=${jsonString(data)})`, { status: 400 })
			}
		}
		return new Response('Not found', { status: 404 })
	}
	async onMessage(message: string) {}

	async onConnect(connection: Party.Connection, ctx: Party.ConnectionContext) {
		if (this.ideas === null) {
			this.ideas = (await this.room.storage.get<RealtimeIdeas>(this.ideasKey)) ?? { ideas: [] }
		}
		const message: IdeasRealtimeMessage = { type: 'init', ideas: this.ideas.ideas }
		connection.send(JSON.stringify(message))
	}

	private async saveIdeas() {
		await this.room.storage.put(this.ideasKey, this.ideas)
	}

	private async broadcast(message: IdeasRealtimeMessage) {
		return this.room.broadcast(JSON.stringify(message))
	}
}

Server satisfies Party.Worker
