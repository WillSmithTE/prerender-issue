import { HeadersFunction, MetaDescriptor } from 'react-router';
import { useMatches } from 'react-router';
import { useMemo } from 'react'
import { baseUrl } from '~/util/socialMediaMetadata'

const DEFAULT_REDIRECT = '/'

/**
 * This should be used any time the redirect path is user-provided
 * (Like the query string on our login/signup pages). This avoids
 * open-redirect vulnerabilities.
 * @param {string} to The redirect destination
 * @param {string} defaultRedirect The redirect to use if the to is unsafe.
 */
export function safeRedirect(to: FormDataEntryValue | string | null | undefined, defaultRedirect: string = DEFAULT_REDIRECT) {
	if (!to || typeof to !== 'string') {
		return defaultRedirect
	}

	if (!to.startsWith('/') || to.startsWith('//')) {
		return defaultRedirect
	}

	return to
}

/**
 * This base hook is used in other hooks to quickly search for specific data
 * across all loader data using useMatches.
 * @param {string} id The route id
 * @returns {JSON|undefined} The router data or undefined if not found
 */
export function useMatchesData(id: string): Record<string, unknown> | undefined {
	const matchingRoutes = useMatches()
	const route = useMemo(() => matchingRoutes.find(route => route.id === id), [matchingRoutes, id])
	return route?.data as Record<string, unknown>
}

export function validateEmail(email: unknown): email is string {
	return typeof email === 'string' && email.length > 3 && email.includes('@')
}

export const jsonString = (val: any) => JSON.stringify(val, null, 2)

export const submitOnCmdEnter = (submit: () => void) => (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
	if (e.key === 'Enter' && e.metaKey) {
		submit()
	}
}

export const loaderHeaders: HeadersFunction = ({ loaderHeaders }) => {
	const loaderCacheHeaders = loaderHeaders.get('Cache-Control')
	return loaderCacheHeaders ? { 'Cache-Control': loaderCacheHeaders } : new Headers()
}

export function getCanonicalLink(request: Request) {
	const url = new URL(request.url)
	url.searchParams.forEach((_, key) => url.searchParams.delete(key))
	const origin = baseUrl
	return [{ tagName: 'link', rel: 'canonical', href: `${origin}${url.pathname}` }] satisfies MetaDescriptor[]
}

export function formatDate(number: number) {
	return new Date(number * 1000).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'UTC',
	})
}
