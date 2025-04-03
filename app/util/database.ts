import { D1Database } from '@cloudflare/workers-types'
import { PrismaD1 } from '@prisma/adapter-d1'
import { PrismaClient } from '@prisma/client'
import { AppLoadContext } from 'react-router'

export let prisma: any

interface Env {
	DB: D1Database
}

export function getPrisma(context: AppLoadContext) {
	let env = context.cloudflare.env as Env
	const adapter = new PrismaD1(env.DB)
	const prisma = new PrismaClient({ adapter })
	return prisma
}
