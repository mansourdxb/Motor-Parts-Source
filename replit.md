# Motor Parts Source (MPS) - Auto Parts E-commerce Platform

## Overview

Motor Parts Source (MPS) is a B2B wholesale e-commerce platform for automotive parts distribution based in the UAE. The application serves workshops, garages, fleet managers, and trade buyers with wholesale OEM and aftermarket parts for all major automotive brands. The platform emphasizes wholesale/bulk pricing and features product browsing, category navigation, and contact/quote request functionality with WhatsApp integration for customer communication.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state and caching
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming (purple/orange brand colors)
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful JSON APIs under `/api` prefix
- **Development**: Hot module replacement via Vite middleware
- **Production**: Static file serving from built assets

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Validation**: Zod schemas generated from Drizzle schema via drizzle-zod
- **Database**: PostgreSQL for contact form submissions (table: `contact_submissions`)
- **Storage**: Hybrid approach - products/categories in memory, contact submissions in database

### Contact Form System
- Contact form submissions are saved permanently to PostgreSQL database
- Table: `contact_submissions` with fields: id, name, email, phone, subject, message, submitted_at
- Email notifications: Not configured (user declined Resend integration)
- To add email notifications later: Set up Resend or SendGrid integration

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/   # UI components and page sections
│   │   ├── pages/        # Route page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared types and schemas
│   └── schema.ts     # Drizzle schema and TypeScript types
└── migrations/       # Database migrations (Drizzle Kit)
```

### Key Design Decisions

1. **Monorepo Structure**: Single repository with client, server, and shared code for simplified development and type sharing.

2. **Storage Abstraction**: `IStorage` interface in `server/storage.ts` allows swapping between in-memory and database implementations without changing route handlers.

3. **Type Safety**: Shared schema ensures consistent types between frontend and backend, with Zod providing runtime validation.

4. **Component-Based UI**: Modular sections (Hero, Features, Categories, Products, etc.) composed on page components for maintainability.

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Drizzle Kit**: Schema migrations via `npm run db:push`
- **connect-pg-simple**: PostgreSQL session store (available for authentication)

### UI/Component Libraries
- **Radix UI**: Headless accessible components (dialog, dropdown, tabs, etc.)
- **shadcn/ui**: Pre-styled component collection
- **Lucide React**: Icon library
- **react-icons**: Additional icon sets (WhatsApp, social media)

### Third-Party Integrations
- **WhatsApp Business**: Primary customer communication channel via `wa.me` links
- **Google Fonts**: Inter and Plus Jakarta Sans typography
- **react-helmet-async**: Per-page SEO meta tags management

### Build & Development
- **Vite**: Frontend bundler with React plugin
- **esbuild**: Server bundling for production
- **TypeScript**: Strict mode enabled across all code