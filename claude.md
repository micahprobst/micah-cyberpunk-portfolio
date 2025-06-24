# Micah Cyberpunk Portfolio - Essential Codebase Guide

## Core Architecture

**Framework:** Next.js 14 App Router + TypeScript + Tailwind CSS  
**Deployment:** Vercel with custom domain (micahprobst.com)

## Essential File Structure

```
app/
├── layout.tsx           # Root layout with metadata & cyberpunk theme
├── page.tsx            # Main homepage - single page portfolio 
├── globals.css         # Global Tailwind + custom cyberpunk CSS
└── not-found.tsx       # 404 page

next.config.js          # Images unoptimized for static export compatibility
package.json            # Scripts: dev, build, start, lint
tailwind.config.js      # Extended colors for cyberpunk theme
vercel.json            # Headers for security & caching (NO outputDirectory)
```

## Existing Design Patterns

- **Color System:** Neon cyan (#00ffff), electric blue, dark backgrounds
- **Typography:** Tech/cyberpunk aesthetic with consistent spacing
- **Layout:** Single-page responsive design
- **Components:** Functional components with TypeScript
- **Styling:** Tailwind utility classes, custom CSS for special effects

## Current Working Features

- ✅ Static generation builds successfully (`npm run build`)
- ✅ Development server runs on port 3000 (`npm run dev`)
- ✅ Vercel deployment configured correctly
- ✅ Custom domain and SSL working
- ✅ Mobile responsive design
- ✅ TypeScript type checking
- ✅ Tailwind CSS processing

## Development Rules

### Code Iteration Guidelines

1. **Always look for existing code to iterate on instead of creating new code.**
2. **Do not drastically change the patterns before trying to iterate on existing patterns.**
3. **Always kill all existing related servers that may have been created in previous testing before trying to start a new server.**
4. **Always prefer simple solutions.**
5. **Avoid duplication of code whenever possible, which means checking for other areas of the codebase that might already have similar code and functionality.**

### Environment & Architecture Rules

6. **Write code that takes into account the different environments: dev, test, and prod.**
7. **You are careful to only make changes that are requested or you are confident are well understood and related to the change being requested.**
8. **When fixing an issue or bug, do not introduce a new pattern or technology without first exhausting all options for the existing implementation. And if you finally do this, make sure to remove the old implementation afterwards so we don't have duplicate logic.**
9. **Keep the codebase very clean and organized.**
10. **Avoid writing scripts in files if possible, especially if the script is likely only to be run once.**

### Code Organization Rules

11. **Avoid having files over 200-300 lines of code. Refactor at that point.**
12. **Mocking data is only needed for tests, never mock data for dev or prod.**
13. **Never add stubbing or fake data patterns to code that affects the dev or prod environments.**
14. **Never overwrite my .env file without first asking and confirming.**

### Change Management Rules

15. **Focus on the areas of code relevant to the task.**
16. **Do not touch code that is unrelated to the task.**
17. **Write thorough tests for all major functionality.**
18. **Avoid making major changes to the patterns and architecture of how a feature works, after it has shown to work well, unless explicitly instructed.**
19. **Always think about what other methods and areas of code might be affected by code changes.**
20. **Always ask questions to me until you are 95% sure that you understand what I am asking you to do.**

## Development Commands

```bash
# Kill any existing servers first
pkill -f "next dev" || pkill -f "npm run dev"

# Start development (port 3000)
npm run dev

# Build for production
npm run build

# Test production build locally
npm run start

# Lint TypeScript and React
npm run lint
```

## Critical Configuration Notes

- **NO static export:** `next.config.js` has `images: { unoptimized: true }` but NO `output: 'export'`
- **Vercel settings:** Output Directory must be BLANK (not "out")
- **Build command:** Use `npm run build` (standard Next.js)
- **Domain setup:** DNS configured at Porkbun pointing to Vercel

## Current Component Structure

```tsx
// app/page.tsx - Main portfolio component
// Uses: TypeScript, Tailwind classes, Lucide icons
// Pattern: Functional component with inline styling
// Layout: Hero section + content sections
```

## Existing Styling Approach

- **Tailwind utilities:** Primary styling method
- **Custom CSS:** Only for cyberpunk effects in globals.css
- **Responsive:** Mobile-first design with Tailwind breakpoints
- **Colors:** Use existing theme colors, don't introduce new ones
- **Typography:** Consistent with current tech aesthetic

---

**Before making any changes:**

1. Review existing implementation thoroughly
2. Identify exact files and patterns to modify
3. Ask clarifying questions about requirements
4. Test changes incrementally
5. Ensure no duplicate or conflicting code remains