# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Environment Variables

### Local Development

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3002
```

### Vercel Deployment

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variable:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: Your Gemini API key
   - **Environment**: Production, Preview, Development (select all)

The environment variables will be automatically injected at runtime. No `.env` file needed in production!

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the backend server:
   ```bash
   npm run server
   ```

3. Start the frontend (in another terminal):
   ```bash
   npm run dev
   ```

## Deployment to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add the `GEMINI_API_KEY` environment variable in Vercel dashboard
4. Deploy!

The API endpoint will be available at `/api/chat` automatically.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-x': reactX,
      'react-dom': reactDom,
    },
    rules: {
      ...reactX.configs.recommended.rules,
      ...reactDom.configs.recommended.rules,
    },
  },
])
```
