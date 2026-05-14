# CC3PO Stories — Deploy Instructions

The site is built and ready. Here's how to deploy it:

## Quick Deploy (2 minutes)

1. Go to https://app.netlify.com/start
2. Click **"Import from Git"** → **GitHub**
3. Select **carloscbrls/stories-cc3po-astro**
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**
6. After deploy, go to **Site settings → Domain management**
7. Add custom domain: **stories.cc3po.com**
8. Add DNS record in Cloudflare:
   - Type: CNAME
   - Name: stories
   - Target: stories-cc3po.netlify.app
   - Proxy: DNS only (no Cloudflare proxy)

## What's Live

**URL:** stories.cc3po.com (after DNS setup)

**The page tells the story of what we're building:**
- Life Story Book — Preserve a loved one's story in their own voice
- Personal Song — Music written for someone, about someone
- Sensescape — Recreate a place from memory
- Time Capsule Letter — Letters delivered in the future
- Living Memorial — A memorial that grows
- Dream Journal — Your subconscious as art

**CTA:** Email stories@cc3po.com to start

## What Still Needs Building

1. **The story intake experience** — A form or chat where people tell their story
2. **The creation engine** — Our agents take the story and create the output
3. **The delivery system** — How people receive their creation (email, physical book, digital page)
4. **stories@cc3po.com email** — Set up in SiteGround or Resend

## GitHub Repo

https://github.com/carloscbrls/stories-cc3po-astro