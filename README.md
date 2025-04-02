# migrations

```

npx wrangler d1 migrations create blog-1 add_goals_sites_usages

npx prisma migrate diff --from-local-d1 --to-schema-datamodel ./prisma/schema.prisma --script --output migrations/0004_add_goal_time.sql

npx wrangler d1 migrations apply blog-1 --local

npx wrangler d1 migrations apply blog-1 --remote

npx prisma generate

```

## copy to prod

```bash
sqlite3  /Users/willy/projects/blog/.wrangler/state/v3/d1/miniflare-D1DatabaseObject/1f8e6a1832cba97529595fb5162a3ceeec5e01f64a3d006888d24920b965688f.sqlite .dump > db.sql

delete transaction, commit, all migration stuff

npx wrangler d1 execute blog-1 --remote --file=db.sql
```
