# My Portfolio Website

> 🚧 **Work in Progress**

## Overview
My portfolio website with clean and modern technologies that is both responsive and high-performance.

## Tech Stack
- **React**: High maintainable frontend development
- **Vite**: Fast build tool for efficient development
- **Bootstrap**: Proven UI framework with pre-built components
- **Sass**: Efficient CSS management

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

### GitHub Pages Setup

1. Update `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',
  // ... other config
})
```

2. Add deployment script to `package.json`:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

3. Install gh-pages package:
```bash
npm install gh-pages --save-dev
```

4. Build and deploy:
```bash
npm run build
npm run deploy
```
