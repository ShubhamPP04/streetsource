# Copilot Instructions for Street Food Vendor Sourcing Platform

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a Next.js application built to solve raw material sourcing challenges for street food vendors in India. The platform connects vendors with verified suppliers, enabling efficient procurement through features like group buying, price comparison, and trust-based ratings.

## Key Features to Implement
- Vendor registration and authentication
- Supplier marketplace with verification system
- Group ordering functionality for bulk purchases
- Real-time price comparison across suppliers
- Order tracking and delivery management
- Trust and rating system for suppliers
- Location-based supplier discovery
- Inventory management for vendors

## Tech Stack
- **Frontend**: Next.js 15 with TypeScript, Tailwind CSS, App Router
- **Backend**: Next.js API routes with serverless functions
- **Database**: Consider using Supabase, Firebase, or MongoDB for data persistence
- **Authentication**: NextAuth.js or similar
- **UI Components**: Shadcn/ui for consistent design
- **State Management**: React Context or Zustand for simple state management

## Code Style Guidelines
- Use TypeScript for all components and utilities
- Follow React best practices with functional components and hooks
- Use Tailwind CSS for styling with mobile-first approach
- Implement proper error handling and loading states
- Create reusable components in the components directory
- Use proper SEO optimization with Next.js features

## Business Logic Focus
- Prioritize user experience for street vendors (simple, intuitive UI)
- Implement trust and verification mechanisms for suppliers
- Focus on mobile-responsive design (vendors often use mobile devices)
- Include features that encourage bulk/group purchasing for better prices
- Implement location-based services for nearby supplier discovery
