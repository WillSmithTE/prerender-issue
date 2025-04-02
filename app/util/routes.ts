import { blogPathToString } from '~/blogs/BlogPath'
import { BlogWithoutContent } from '~/util/types'

export const routeConsts = {
	post: (blog: BlogWithoutContent) => {
		const path = blogPathToString(blog)
		return `/blog/${path}`
	},
	postById: (id: string) => {
		return `/blog/${id}`
	},
	blog: '/blog',
}
