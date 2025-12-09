# Quick Fix for Vercel Deployment Error

The error is likely because **database migrations haven't been run yet** on your production database.

## Fix Steps:

### 1. Check Environment Variables in Vercel
Go to your Vercel project → Settings → Environment Variables

Make sure you have:
- `DATABASE_URL`
- `DIRECT_URL`

### 2. Run Database Migration

**Option A: Using Vercel CLI (Recommended)**
```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Login to Vercel
vercel login

# Link to your project
vercel link

# Pull environment variables
vercel env pull .env.production

# Run migration
npx prisma migrate deploy
```

**Option B: Direct SQL (Quick)**
Run this SQL directly in your database:
```sql
CREATE TABLE "Pledge" (
  "id" TEXT NOT NULL,
  "name" TEXT,
  "text" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ("id")
);
```

### 3. Redeploy
```bash
git add .
git commit -m "Add error logging and fix"
git push
```

### 4. Check Vercel Logs
After redeploying:
- Go to your Vercel project
- Click on "Deployments" → Latest deployment
- Click "Functions" tab
- Check logs for the `/api/pledges` function

The improved error logging will now show the exact issue!

## Common Issues:

1. **Database not connected** → Check DATABASE_URL
2. **Table doesn't exist** → Run migrations (Step 2)
3. **Prisma client not generated** → Should be fixed by vercel.json
4. **Wrong database URL** → Check if URL is accessible from Vercel's servers
