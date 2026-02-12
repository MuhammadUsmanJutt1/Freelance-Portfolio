# Freelance Agency Portfolio

A modern, high-end portfolio website for digital agencies specializing in lead generation, web development, and data extraction services.

## 🎨 Design Features

- Clean, modern aesthetic with purple (#6D28D9) accent colors
- Glassmorphism effects and smooth animations
- Fully responsive for mobile and desktop
- Scroll-reveal animations using Framer Motion
- Sticky navigation with blur effect

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Modern icon library

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **TypeScript** - Type-safe backend

## 📁 Project Structure

```
freelance-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Main page component
│   └── globals.css               # Global styles
├── components/
│   ├── Navigation.tsx            # Sticky header with glassmorphism
│   ├── Hero.tsx                  # Hero section with CTA
│   ├── Services.tsx              # Services grid with animations
│   ├── Portfolio.tsx             # Project showcase
│   ├── ContactForm.tsx           # Contact form with validation
│   └── Footer.tsx                # Footer with links
├── public/                       # Static assets
└── tailwind.config.ts            # Tailwind configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd freelance-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization Guide

### 1. Update Branding
Edit `components/Navigation.tsx` and `components/Footer.tsx`:
```tsx
// Change "YourAgency" to your agency name
<div className="text-2xl font-bold">YourAgencyName</div>
```

### 2. Modify Services
Edit `components/Services.tsx` to update service offerings:
```tsx
const services = [
  {
    icon: Target,
    title: 'Your Service Name',
    description: 'Your service description',
    features: ['Feature 1', 'Feature 2'],
  },
];
```

### 3. Add Portfolio Projects
Edit `components/Portfolio.tsx`:
```tsx
const projects = [
  {
    title: 'Project Name',
    category: 'Category',
    description: 'Project description',
    tags: ['Tech1', 'Tech2'],
    liveUrl: 'https://...',
    githubUrl: 'https://...',
  },
];
```

### 4. Configure Contact Form Email
Edit `app/api/contact/route.ts` to integrate with your email service:

**Option A: Using Resend (Recommended)**
```bash
npm install resend
```

```tsx
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'your-email@example.com',
  subject: `New Contact: ${service}`,
  html: `...`
});
```

**Option B: Using SendGrid**
```bash
npm install @sendgrid/mail
```

**Option C: Using Nodemailer**
```bash
npm install nodemailer
```

### 5. Update Colors
Edit `tailwind.config.ts`:
```tsx
colors: {
  primary: {
    DEFAULT: '#6D28D9',  // Your primary color
    light: '#9333EA',
    dark: '#5B21B6',
  },
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Environment Variables
Add these to your deployment platform:
```
RESEND_API_KEY=your_api_key_here
```

## 📧 Contact Form Setup

The contact form currently logs submissions to the console. To make it functional:

1. Choose an email service (Resend, SendGrid, or Nodemailer)
2. Install the package
3. Add API keys to `.env.local`:
```
RESEND_API_KEY=your_key_here
```
4. Update `app/api/contact/route.ts` with your email logic

## 🎯 Features Checklist

- ✅ Responsive navigation with mobile menu
- ✅ Animated hero section with CTAs
- ✅ Services grid with hover effects
- ✅ Portfolio showcase
- ✅ Contact form with validation
- ✅ API endpoint for form submissions
- ✅ Smooth scroll navigation
- ✅ Glassmorphism effects
- ✅ Framer Motion animations

## 🔧 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Design System

### Colors
- Primary: #6D28D9 (Purple)
- Primary Light: #9333EA
- Primary Dark: #5B21B6
- Background: White
- Text: Gray-900

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold, 2xl-7xl
- Body: Regular, base-xl

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or support, please open an issue or contact through the website.
