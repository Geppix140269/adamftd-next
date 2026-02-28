# ADAMftd - Trade Intelligence Platform

A Next.js 14 application providing commercial decision intelligence for global trade, market analysis, and buyer discovery.

## Features

- 🎯 **Mission Control** - Central dashboard with market updates and quick actions
- 🔍 **Find Buyers/Suppliers** - Search verified importers and exporters with real shipment data
- 💰 **Price Benchmarking** - Compare pricing against real transaction data
- ✅ **Company Validation** - Verify counterparty legitimacy and trade history
- 📊 **Market Analysis** - Evaluate market opportunities and competition
- 🚢 **Tariffs & Compliance** - Calculate duty rates and entry requirements
- 📄 **Market Reports** - AI-generated market intelligence reports
- 🛡️ **Risk Dashboard** - Trade finance and risk assessment tools
- 📁 **Deal Room** - Manage trade deals and documentation
- 👤 **User Profile** - Account management and preferences

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Plus Jakarta Sans, Outfit, Fira Code (via next/font)
- **Icons:** Lucide React
- **Deployment:** Netlify

## Design System

- **Theme:** Dark navy (#05090e) with gold accents (#e8a424)
- **Typography:** Heading font (Plus Jakarta Sans), Body font (Outfit), Monospace (Fira Code)
- **Components:** 12+ reusable UI components (Button, Card, Modal, Toast, etc.)
- **Responsive:** Mobile-first design with bottom navigation on mobile devices

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
adamftd-nextjs/
├── app/                    # Next.js App Router pages
│   ├── mission-control/    # Dashboard
│   ├── pricing/            # Pricing plans
│   ├── find-buyers/        # Buyer search
│   └── ...                 # Other pages
├── components/
│   ├── layout/             # Header, Navigation, Mobile Nav
│   └── ui/                 # Reusable UI components
├── lib/
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   └── constants/          # App constants
└── types/                  # TypeScript type definitions
```

## Environment Variables

No environment variables required for basic functionality.

## Deployment

### Netlify

This project is configured for Netlify deployment with the Next.js plugin.

1. Push to GitHub
2. Connect repository to Netlify
3. Deploy automatically on push

Build settings:
- Build command: `npm run build`
- Publish directory: `.next`

## License

Proprietary - All rights reserved

## Credits

Built with Next.js 14, TypeScript, and Tailwind CSS.
