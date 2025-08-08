# Premium Promotion Hub

## Overview

Premium Promotion Hub is a modern full-stack web application built for showcasing premium promotions and deals. The application features an engaging intro screen, promotional modals, and payment integration interfaces. It's designed as a promotional platform that presents various premium packages (Premium, VIP Membership, Diamond Elite) with interactive user experiences including animated introductions and payment processing workflows.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture (Pure Client-Side)
- **Framework**: React 18 with TypeScript for type-safe component development
- **Routing**: Wouter for lightweight client-side routing with minimal bundle size
- **State Management**: Local React state (removed TanStack Query dependency for pure frontend)
- **Styling**: Tailwind CSS with CSS custom properties for design system consistency
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **Animations**: Framer Motion for smooth transitions and interactive animations
- **Build Tool**: Vite for fast development and optimized production builds
- **Deployment**: Static files that can be served from any web server or opened directly in browser

### Backend Architecture
- **Status**: REMOVED - Converted to pure frontend-only application
- **Previous**: Node.js with Express.js (now eliminated)
- **Current**: All functionality moved to client-side JavaScript
- **Static Assets**: All media files (images, videos) served statically from /Arsipnasional/ folder

### Data Storage Solutions
- **Current**: Pure client-side state management using React hooks
- **Assets**: Static media files organized in /Arsipnasional/ folder
- **No Database**: All data is now hardcoded in components (promotional data, team info, payment details)

### Deployment Strategy
- **Format**: Static website files in /frontend-only/ directory
- **Contains**: Built HTML, CSS, JS assets + media files
- **Deployment Options**: 
  - Any static web server (Nginx, Apache)
  - CDN services (Vercel, Netlify, GitHub Pages)
  - Direct file opening in browser
  - No server required

### Development and Build Configuration
- **Monorepo Structure**: Shared types and schemas between client and server
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Environment Configuration**: Separate development and production builds
- **Code Quality**: TypeScript strict mode enabled with comprehensive type checking