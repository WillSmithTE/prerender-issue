// utils/createSocialMetadata.ts

import type { MetaDescriptor } from 'react-router';
import { BlogWithoutContent } from '~/util/types'

/**
 * Creates comprehensive social media metadata for blog posts
 *
 * @param blog - The blog post object
 * @param url - The canonical URL of the blog post
 * @param siteInfo - Information about the website/blog
 * @returns Array of meta descriptors for Remix meta function
 */
export function createSocialMetadata(blog: BlogWithoutContent, url: string): MetaDescriptor[] {
	if (!blog) return []

	const imageUrl = `${baseUrl}${blog.imageUri}`
	const authorName = 'Will Smith'
	const authorUrl = baseUrl
	const publishedDate = blog.createdAt
	const modifiedDate = blog.createdAt

	// Basic metadata
	const basicMeta: MetaDescriptor[] = [
		{ title: blog.title },
		{ name: 'description', content: blog.teaser },
		{ rel: 'canonical', href: url },
	]

	// Open Graph metadata
	const openGraphMeta: MetaDescriptor[] = [
		{ property: 'og:title', content: blog.title },
		{ property: 'og:description', content: blog.teaser },
		{ property: 'og:url', content: url },
		{ property: 'og:image', content: imageUrl },
		{ property: 'og:type', content: 'article' },
		{ property: 'og:site_name', content: siteInfo.name },
		{ property: 'article:published_time', content: publishedDate },
	]

	// Add modified time if available
	if ('updateAt' in blog && blog.updateAt) {
		openGraphMeta.push({ property: 'article:modified_time', content: modifiedDate })
	}

	// Add author if available
	if (authorUrl) {
		openGraphMeta.push({ property: 'article:author', content: authorUrl })
	}

	// Add tags if available
	if (blog.tags && blog.tags.length > 0) {
		blog.tags.forEach(tag => {
			openGraphMeta.push({ property: 'article:tag', content: tag })
		})
	}

	// Twitter Card metadata
	const twitterMeta: MetaDescriptor[] = [
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:title', content: blog.title },
		{ name: 'twitter:description', content: blog.teaser },
		{ name: 'twitter:image', content: imageUrl },
	]

	// Add site Twitter handle if available
	if (siteInfo.twitter) {
		twitterMeta.push({ name: 'twitter:site', content: `@${siteInfo.twitter}` })
	}

	twitterMeta.push({ name: 'twitter:creator', content: `@${siteInfo.twitter}` })

	// JSON-LD Schema.org metadata (as a script tag)
	const schemaOrgData = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: blog.title,
		description: blog.teaser,
		image: imageUrl,
		datePublished: publishedDate,
		dateModified: modifiedDate,
		author: {
			'@type': 'Person',
			name: authorName,
			...(authorUrl ? { url: authorUrl } : {}),
		},
		publisher: {
			'@type': 'Organization',
			name: siteInfo.name,
			...(siteInfo.logo
				? {
						logo: {
							'@type': 'ImageObject',
							url: siteInfo.logo,
						},
				  }
				: {}),
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': url,
		},
	}

	const jsonLdScript: MetaDescriptor = {
		'script:ld+json': JSON.stringify(schemaOrgData),
	}

	return [...basicMeta, ...openGraphMeta, ...twitterMeta, jsonLdScript]
}

export const mainMetaTitle = 'Will Smith - Software Engineer'
export const baseUrl = 'https://willsmithte.com'
const siteInfo = {
	name: mainMetaTitle,
	url: baseUrl,
	logo: 'https://willsmithte.com/assets/imgs/willsmithlogo.jpg',
	twitter: 'wheels_smith',
}
