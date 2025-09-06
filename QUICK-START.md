# Modern Web App Monorepo

## Quick Start

```bash
# Install dependencies
npm install

# Start the frontend development server
npm run dev:web

# Or start both frontend and backend (once backend is implemented)
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## Project Structure Overview

```
├── apps/
│   ├── web/           # Next.js frontend (✅ Ready)
│   └── api/           # Backend placeholder (📋 TODO)
├── packages/
│   ├── ui/            # Shared components (✅ Ready)
│   └── utils/         # Shared utilities (✅ Ready)
├── public/            # Static assets
├── docs/              # Documentation
└── package.json       # Root package management
```

## What's Included

✅ **Next.js Frontend** - Modern React app with TypeScript and TailwindCSS  
✅ **Shared UI Components** - Reusable components with Framer Motion animations  
✅ **Utility Functions** - Shared utilities for frontend and backend  
✅ **Development Scripts** - Ready-to-use npm scripts for development  
✅ **Documentation** - Comprehensive docs and setup guides  
📋 **Backend Placeholder** - Ready for Express/NestJS implementation

## Next Steps

1. **Customize the frontend**: Edit `apps/web/pages/index.tsx`
2. **Add your branding**: Update colors in `apps/web/tailwind.config.js`
3. **Implement backend**: Follow the guide in `apps/api/README.md`
4. **Add features**: Use the shared components from `packages/ui`

For detailed instructions, see the full [README.md](./README.md) file.
