import { LazyExoticComponent, ReactElement } from 'react'
import { z } from 'zod'
import { BlogId } from '~/blogs/blogIds'
import { isEmpty } from '~/util/typecheck'

export type Blog = {
	createdAt: BlogId
	title: string
	Content: LazyExoticComponent<() => ReactElement> | (() => JSX.Element)
	teaser: string
	imageUri: string
	hidden?: boolean
	tags?: Array<string>
}
export type BlogWithoutContent = Omit<Blog, 'Content'>

export const HolidayLocation = z.enum(['Sydney, Australia', 'Vancouver, Canada'])
export type HolidayLocation = z.infer<typeof HolidayLocation>

export const LeavePlannerRequest = z
	.object({
		balance: z.coerce.number().int().min(0).max(200),
		accrual: z.coerce.number().int().min(1).max(200),
		location: HolidayLocation,
		hasChristmasBreak: z.boolean(),
		christmasBreakLength: z.optional(z.string()),
		notes: z.string().optional(),
	})
	.transform((data, ctx) => {
		if (data.hasChristmasBreak && isEmpty(data.christmasBreakLength)) {
			ctx.addIssue({
				path: ['christmasBreakLength'],
				code: z.ZodIssueCode.custom,
				message: 'Your Christmas break is mandatory, we need the deets.',
			})
			return z.NEVER
		}
		return data
	})
export type LeavePlannerRequest = z.infer<typeof LeavePlannerRequest>

export const DayType = z.enum(['Public Holiday', 'Weekend', 'Leave'])
export type DayType = z.infer<typeof DayType>
export const DayBreakdown = z.array(
	z.union([
		z.object({
			date: z.string(),
			type: z.literal(DayType.enum['Public Holiday']),
			holiday: z.string(),
		}),
		z.object({
			date: z.string(),
			type: z.union([z.literal(DayType.enum['Weekend']), z.literal(DayType.enum['Leave'])]),
		}),
	]),
)
export type DayBreakdown = z.infer<typeof DayBreakdown>
export const TripSuggestion = z.object({
	destination: z.string(),
	description: z.string(),
})
export type TripSuggestion = z.infer<typeof TripSuggestion>

export const HolidayOption = z.object({
	startDate: z.string(),
	endDate: z.string(),
	daysUsed: z.number(),
	totalBreak: z.number(),
	dayBreakdown: DayBreakdown,
	tripSuggestions: z.array(TripSuggestion),
})
export type HolidayOption = z.infer<typeof HolidayOption>

export const LeavePlan = z.object({
	summary: z.string(),
	options: z.array(HolidayOption),
})
export type LeavePlan = z.infer<typeof LeavePlan>

export const LeavePlannerResponse = LeavePlan
export type LeavePlannerResponse = z.infer<typeof LeavePlan>

export const ClothesAnalysisResponse = z.object({
	color: z.string(),
	summary: z.string(),
	detailedDescription: z.string(),
})
export type ClothesAnalysisResponse = z.infer<typeof ClothesAnalysisResponse>

export const ClothesSuggestionLocation = z.enum(['Sydney, Australia', 'Vancouver, Canada'])
export type ClothesSuggestionLocation = z.infer<typeof ClothesSuggestionLocation>
export const ClothesSuggestionsCategory = z.enum(['casual', 'work', 'fashionista'])
export type ClothesSuggestionsCategory = z.infer<typeof ClothesSuggestionsCategory>
export function clothesSuggestionsCategoryLabel(category: ClothesSuggestionsCategory): string {
	switch (category) {
		case 'casual':
			return 'Casual'
		case 'work':
			return 'Work'
		case 'fashionista':
			return 'Fashionista'
	}
}
export const ClothesSuggestionRequest = z.object({
	category: ClothesSuggestionsCategory,
	location: ClothesSuggestionLocation,
	notes: z.string().optional(),
	feedback: z.string().optional(),
	lastOutfitIds: z.array(z.string()).optional(),
})
export type ClothesSuggestionRequest = z.infer<typeof ClothesSuggestionRequest>

export const ClothesSuggestionsResponse = z.object({
	items: z.array(
		z.object({
			id: z.string(),
			imageUri: z.string(),
			summary: z.string(),
		}),
	),
	reason: z.string(),
	summary: z.string(),
})
export type ClothesSuggestionsResponse = z.infer<typeof ClothesSuggestionsResponse>

export const CreateIdeaRequest = z.object({
	expertise: z.string().max(100).optional(),
	previousJob: z.string().max(100).optional(),
	unusualTrait: z.string().max(100).optional(),
	desiredAction: z.string().max(100).optional(),
	tediousTask: z.string().max(100).optional(),
	unpleasantTask: z.string().max(100).optional(),
	dyingIndustry: z.string().max(100).optional(),
})
export type CreateIdeaRequest = z.infer<typeof CreateIdeaRequest>

export const StartupIdea = z.object({
	name: z.string(),
	headline: z.string(),
	description: z.string(),
})
export type StartupIdea = z.infer<typeof StartupIdea>

export const CreateIdeaResponse = z.object({
	ideas: z.array(StartupIdea),
})
export type CreateIdeaResponse = z.infer<typeof CreateIdeaResponse>

export type RealtimeIdeas = { ideas: StartupIdea[] }

export const IdeasRealtimeMessage = z.union([
	z.object({ type: z.literal('init'), ideas: z.array(StartupIdea) }),
	z.object({ type: z.literal('newIdeas'), ideas: z.array(StartupIdea) }),
])
export type IdeasRealtimeMessage = z.infer<typeof IdeasRealtimeMessage>

export const IdeasPartyKitPostRequest = z.union([
	z.object({ type: z.literal('newIdea'), data: CreateIdeaResponse }),
	z.object({ type: z.literal('blah') }),
])
export type IdeasPartyKitPostRequest = z.infer<typeof IdeasPartyKitPostRequest>

export const IdeasSocketParams = z.object({
	userId: z.string().optional(),
})
export type IdeasSocketParams = z.infer<typeof IdeasSocketParams>

export const ideasPartyName = 'ideas'
export const ideasRoomName = 'room-1'

export const ideasQuestions: {
	name: keyof CreateIdeaRequest
	label: string | React.HTMLProps<HTMLParagraphElement>['children']
	type: 'text' | 'textarea'
}[] = [
	{
		name: 'expertise',
		label: 'What are your areas of expertise? (e.g. databases, construction)',
		type: 'text',
	},
	{
		name: 'previousJob',
		label:
			'In a previous job, did you ever find yourself asking "why doesn\'t someone make x? If someone made x we\'d buy it in a second"?',
		type: 'textarea',
	},
	{
		name: 'unusualTrait',
		label: "What's unusual about you that makes your needs different from most other people's?",
		type: 'textarea',
	},
	{
		name: 'desiredAction',
		label: "What's missing in your world? What would you like to do that you can't?",
		type: 'textarea',
	},
	{
		name: 'unpleasantTask',
		label: 'If you had access to a team that could handle any tedious or unpleasant task, what would you have them build?',
		type: 'textarea',
	},
	{
		name: 'tediousTask',
		label: 'What are the most tedious or annoying parts of your work?',
		type: 'textarea',
	},
	{
		name: 'dyingIndustry',
		label: 'Can you think of some companies or industries which are dying out?',
		type: 'text',
	},
]
export function getIdeasRequestWithQuestions(request: CreateIdeaRequest) {
	return Object.entries(request).map(([key, value]) => ({
		question: ideasQuestions.find(q => q.name === key)?.label ?? '',
		answer: value,
	}))
}
