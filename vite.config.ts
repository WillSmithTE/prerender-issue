import { reactRouter } from '@react-router/dev/vite'
import { cloudflareDevProxy } from '@react-router/dev/vite/cloudflare'
import { defineConfig } from 'vite'
import commonjs from 'vite-plugin-commonjs'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ isSsrBuild }) => {
	const env = process.env
	return {
		optimizeDeps: {
			include: ['@prisma/debug', '@prisma/client'],
		},
		build: {
			commonjsOptions: {
				transformMixedEsModules: true,
			},
			rollupOptions: isSsrBuild
				? {
						input: ['virtual:react-router/server-build', './workers/app.ts'],
				  }
				: undefined,
		},
		ssr: {
			target: 'webworker',
			noExternal: true,
			resolve: {
				conditions: ['workerd', 'browser'],
			},
			optimizeDeps: {
				include: ['react', 'react/jsx-runtime', 'react/jsx-dev-runtime', 'react-dom', 'react-dom/server', 'react-router'],
			},
		},
		plugins: [
			commonjs(),
			cloudflareDevProxy({}),
			reactRouter(),
			tsconfigPaths(),
			// sentryVitePlugin({
			//   org: env.SENTRY_ORG,
			//   project: env.SENTRY_PROJECT,
			//   authToken: env.SENTRY_AUTH_TOKEN,
			// }),
		],
	}
})
