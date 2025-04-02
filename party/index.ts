import type * as Party from 'partykit/server'

declare const DEVMODE: boolean
export default class Server implements Party.Server {
	constructor(readonly room: Party.Room) {}

	async onRequest(req: Party.Request) {
		console.debug('in index onRequest')
		return new Response('Not found', { status: 404 })
	}
}

Server satisfies Party.Worker
