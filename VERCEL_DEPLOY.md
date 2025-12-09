# Vercel Deployment Guide

## Quick Setup

1. **Push your code to GitHub** (already done ✓)

2. **Go to [vercel.com](https://vercel.com)**
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your `sulam-group-2` repository

3. **Configure Environment Variables**
   
   In Vercel project settings, add these environment variables:
   
   ```
   DATABASE_URL=your_postgresql_connection_string
   DIRECT_URL=your_postgresql_connection_string
   ```

4. **Database Options:**

   ### Option A: Use Vercel Postgres (Easiest)
   - In your Vercel project, go to "Storage"
   - Create a new Postgres database
   - Vercel will automatically add `DATABASE_URL` and `DIRECT_URL`

   ### Option B: Use your existing PostgreSQL
   - Add your existing `DATABASE_URL` and `DIRECT_URL` to Vercel environment variables

5. **Deploy**
   - Click "Deploy"
   - Vercel will automatically:
     - Install dependencies
     - Run `prisma generate`
     - Build your Nuxt app
     - Deploy everything

6. **Run Database Migrations**
   
   After first deployment, run migrations in Vercel:
   - Go to your project → Settings → Environment Variables
   - Install Vercel CLI: `npm i -g vercel`
   - Login: `vercel login`
   - Link project: `vercel link`
   - Run migration: `vercel env pull .env.production && npx prisma migrate deploy`

## That's it! 🎉

Your app will be live at `https://your-project.vercel.app`

Every push to `main` will automatically redeploy.

## Troubleshooting

- **Build fails**: Check build logs in Vercel dashboard
- **Prisma errors**: Make sure environment variables are set correctly
- **Database connection**: Verify DATABASE_URL is accessible from Vercel's servers
