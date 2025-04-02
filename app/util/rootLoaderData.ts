import { useRouteLoaderData } from 'react-router';
import { getHints } from '~/util/client-hints'
import { FrontendConfig } from '~/util/frontendConfig'

export type RootLoaderReturn = {
	ENV: FrontendConfig
	requestInfo: { hints: ReturnType<typeof getHints> }
}
export function useRootLoaderData() {
	const data = useRouteLoaderData<RootLoaderReturn>('root')
	return data
}
export function useFrontendConfig() {
	return useRootLoaderData()!.ENV
}
