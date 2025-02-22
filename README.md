# Portfolio

This is my personal web portfolio, showcasing my projects and skills.

## 🚀 Live Demo

Check out the live version: [crljhnmngs](https://crljhnmngs.vercel.app)

## 🛠 Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)

## 📦 Getting Started

To run this project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/crljhnmngs/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🔨 Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 🚀 Deployment

This project is hosted on [Vercel](https://vercel.com/). To deploy:

1. **Install Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Deploy the project:**

   ```bash
   vercel
   ```

Follow the prompts to complete the deployment.

## 🔄 Migration from Create React App (CRA) to Vite

This project was originally bootstrapped with Create React App and has been migrated to Vite for faster builds and improved performance.

### Key Changes:

- Replaced `react-scripts` with Vite.
- Updated `package.json` scripts:

  ```json
  {
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "serve": "vite preview"
    }
  }
  ```

- Added `vite.config.ts` for Vite-specific configuration.
- Updated import paths for assets based on Vite’s requirements.

For more details, check out the [Vite Migration Guide](https://vitejs.dev/guide/migration-from-cra.html).

