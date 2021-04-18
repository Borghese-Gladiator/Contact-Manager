# Next Installer Site
Next.js UI to let users download EXE files created by Electron Desktop app (separate repo).
- Next.js is a React framework (known for SSR & serverless functions through Vercel) - I did not use any here (yet), so I am hosting on Netlify
- `/public` folder holds files available for download (which `<a href={file_name}>` lets users download)
- `_app.js` runs to getLayout of page before displaying
- used package `react-pro-sidebar` for Sidebar
- created pages Home, Download, Resources, & Contact (loosely based things off of Notepad++ installation site)
- prepared for Netlify deploy (added "export" command to package.json)

## Installation
- `npm install` - installs listed packages from package.json into /node_modules/
- `npm run dev` - runs dev command in package.json - `"next dev"` which runs Next.js's dev server

## File Structure
- Next.js standard file structure
  - every JS file in /pages/ is one page that users can navigate to
  - `/pages/_app.js` is ran right before loading each page
  - /pages/api/ holds all serverless functions for frontend to hit at `api/<file_name` (uses Node.js under the hood)
- /components/ holds components & layouts
- /styles/ holds module.css files (React loads as scoped CSS) && globals.css (normal global CSS for all files to access)

## Next.js Default README
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
