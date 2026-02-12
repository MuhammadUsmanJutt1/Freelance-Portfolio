# Deployment Guide

This guide covers deploying your freelance agency portfolio to various platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the easiest option for Next.js applications and offers:
- Automatic deployments from Git
- Free SSL certificates
- Global CDN
- Serverless functions for API routes
- Free tier available

### Steps:

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

2. Visit [vercel.com](https://vercel.com) and sign up

3. Click "New Project" and import your GitHub repository

4. Configure environment variables:
   - Add `RESEND_API_KEY` (or your chosen email service key)
   - Click "Deploy"

5. Your site will be live at `your-project.vercel.app`

### Custom Domain on Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

---

## 🌐 Deploy to Netlify

1. Push code to GitHub (see Vercel steps above)

2. Visit [netlify.com](https://netlify.com) and sign up

3. Click "Add new site" → "Import an existing project"

4. Connect to GitHub and select your repository

5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

6. Add environment variables in Site Settings → Environment Variables

7. Deploy!

---

## 🐳 Deploy with Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Update `next.config.js`:
```js
module.exports = {
  output: 'standalone',
}
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## ☁️ Deploy to AWS (EC2 + PM2)

### Prerequisites:
- AWS account
- EC2 instance running Ubuntu
- Domain name (optional)

### Steps:

1. SSH into your EC2 instance:
```bash
ssh -i your-key.pem ubuntu@your-ec2-ip
```

2. Install Node.js and npm:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. Install PM2:
```bash
sudo npm install -g pm2
```

4. Clone your repository:
```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

5. Install dependencies and build:
```bash
npm install
npm run build
```

6. Create `.env.local` with your environment variables

7. Start with PM2:
```bash
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

8. Configure Nginx as reverse proxy:
```bash
sudo apt install nginx
sudo nano /etc/nginx/sites-available/portfolio
```

Add configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

9. Install SSL with Let's Encrypt:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## 🔧 Environment Variables Setup

Create `.env.local` in your project root:

```bash
# Email Service
RESEND_API_KEY=your_key_here

# Database (optional)
DATABASE_URL=your_database_url

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_ga_id
```

### For Production:
- Never commit `.env.local` to Git
- Add environment variables through your hosting platform's dashboard
- Use different keys for development and production

---

## 📊 Post-Deployment Checklist

- [ ] Test contact form submission
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Test page load speed (use [PageSpeed Insights](https://pagespeed.web.dev/))
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Configure email notifications
- [ ] Set up error monitoring (Sentry, LogRocket)
- [ ] Add sitemap.xml for SEO
- [ ] Submit to Google Search Console
- [ ] Test on multiple browsers
- [ ] Set up automated backups (if using database)

---

## 🔍 SEO Optimization

1. Update `app/layout.tsx` metadata:
```tsx
export const metadata: Metadata = {
  title: "Your Agency Name | Lead Generation & Web Development",
  description: "Professional lead generation and web development services...",
  keywords: ["lead generation", "web development", "your keywords"],
  openGraph: {
    title: "Your Agency Name",
    description: "Your description",
    url: "https://yourdomain.com",
    siteName: "Your Agency",
    images: [{ url: "/og-image.jpg" }],
  },
};
```

2. Create `app/sitemap.ts`:
```tsx
export default function sitemap() {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
```

3. Create `app/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

---

## 📈 Performance Optimization

1. Enable image optimization in `next.config.js`:
```js
module.exports = {
  images: {
    domains: ['your-image-domain.com'],
    formats: ['image/avif', 'image/webp'],
  },
}
```

2. Add caching headers for static assets

3. Use Vercel Analytics or similar for monitoring

4. Implement lazy loading for images

---

## 🆘 Troubleshooting

### Build fails on deployment:
- Check Node.js version matches locally and on server
- Verify all dependencies are in `package.json`
- Check for TypeScript errors: `npm run build`

### Contact form not working:
- Verify environment variables are set
- Check API route logs
- Test email service credentials

### Slow page loads:
- Optimize images
- Check bundle size: `npm run build`
- Enable caching
- Use CDN for static assets

---

## 📞 Support

For deployment issues:
1. Check hosting platform documentation
2. Review build logs
3. Test locally with `npm run build && npm start`
4. Check environment variables are correctly set
