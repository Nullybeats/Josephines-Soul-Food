# Josephine's Soul Food

A modern, luxurious website for Josephine's Soul Food - a Black-owned soul food restaurant in Toledo, Ohio serving authentic family recipes since 1987.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **UI Components**: Custom + shadcn/ui

## Getting Started

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

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Pages (Next.js App Router)
│   ├── page.tsx           # Homepage
│   ├── menu/              # Menu page
│   ├── about/             # About page
│   ├── order/             # Order flow
│   ├── catering/          # Catering page
│   └── shop/              # Store page
│
├── components/
│   ├── home/              # Homepage components
│   ├── layout/            # Header & Footer
│   └── ui/                # Reusable UI components
│
├── data/                  # Static data (menu items)
├── lib/                   # Utilities & store
└── types/                 # TypeScript definitions
```

## Documentation

See [CLAUDE.md](./CLAUDE.md) for detailed project documentation including:
- Complete file structure
- Design system (colors, typography)
- Component patterns
- Development guidelines

## Key Features

- Responsive design for all devices
- Online ordering system
- Interactive food gallery
- Customer testimonials
- News/media feature section
- Delivery zone information
- Click-to-call functionality

## Contact Information

- **Phone**: (419) 242-6666
- **Address**: 902 Lagrange St, Toledo, OH 43604
- **Hours**: Mon-Thu 11am-8pm, Fri-Sat 11am-9pm, Sun 12pm-7pm

## License

Private - All rights reserved.
