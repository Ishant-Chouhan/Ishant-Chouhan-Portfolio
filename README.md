# Minimal Portfolio

A clean, minimal portfolio site built with React, Vite, and Framer Motion.
Features layered scroll depth (parallax), proximity-triggered micro-interactions, and a custom cursor.

## Features

- **Minimal Visual System**: Focus on typography, whitespace, and content.
- **Custom Cursor**: Context-aware cursor that reacts to interactive elements.
- **Motion**:
  - Parallax effects on scroll.
  - Magnetic buttons that attract the cursor.
  - Staggered reveal animations.
- **Performance**: Optimized with Vite, lazy-loading images, and CSS-first transitions where possible.
- **Accessibility**:
  - Respects 'prefers-reduced-motion'.
  - Semantic HTML structure.
  - Keyboard navigable.

## Tech Stack

- **Framework**: React (Vite)
- **Styling**: CSS Modules + CSS Variables
- **Motion**: Framer Motion
- **Fonts**: Inter & Outfit (via Google Fonts)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Customization

- **Projects**: Edit `src/data/projects.js` to update the portfolio items.
- **Design Tokens**: Edit `src/index.css` to change colors, fonts, and spacing.
- **Motion**: Adjust `transition` props in components or global variables in `src/index.css`.

## Accessibility Notes

- The custom cursor is hidden from screen readers (`aria-hidden="true"`).
- Interactive elements (links, buttons) retain standard focus indicators or have enhanced focus styles.
- Animations utilize `prefers-reduced-motion` media query to disable movement for sensitive users.
