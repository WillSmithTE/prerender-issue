import usePartySocket from 'partysocket/react'
import { useFrontendConfig } from '~/util/rootLoaderData'
import { ideasPartyName, IdeasRealtimeMessage, ideasRoomName, IdeasSocketParams } from '~/util/types'
import { jsonString } from '~/utils'

export function useIdeasSocket(userId: string | undefined, onMessage?: (data: IdeasRealtimeMessage) => void) {
	const params: IdeasSocketParams = { userId }
	const frontendConfig = useFrontendConfig()
	const socket = usePartySocket({
		party: ideasPartyName,
		room: ideasRoomName,
		host: frontendConfig.PARTYKIT_HOST,
		onMessage(evt) {
			console.debug(`got message (data=${jsonString(evt.data)})`)
			const parsed = IdeasRealtimeMessage.safeParse(JSON.parse(evt.data))
			if (parsed.success) {
				onMessage?.(parsed.data)
			} else {
				console.error(`error parsing websocket message (data=${evt.data}, e=${jsonString(parsed.error.errors)}`)
			}
		},
		query: params,
	})
	const send = (data: IdeasRealtimeMessage) => {
		return socket.send(JSON.stringify(data))
	}
	return {
		...socket,
		send,
	}
}
