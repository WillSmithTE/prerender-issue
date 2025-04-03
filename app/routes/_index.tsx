import { LoaderFunctionArgs, useLoaderData } from 'react-router'
import { getPrisma } from '~/util/database'

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
	const prisma = getPrisma(context)
	const userIds = await prisma.user.findMany({ select: { id: true } }).then(users => users.map(it => it.id))
	return { userIds }
}

export default function Component() {
	const { userIds } = useLoaderData<typeof loader>()
	return (
		<div>
			<p>hi</p>
			<p>users</p>
			{userIds}
		</div>
	)
}
