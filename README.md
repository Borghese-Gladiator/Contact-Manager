# Contact Manager
Quick utility to track people I talked to and how long ago it was. I built this since existing solutions I found were CRM tools (but I'm just talking to people for fun).
- wrote custom styling in module.css files per file (eg: Button, Flexbox, Sidebar)

## File Structure
- /pages/_app/ holds state & passes -> pages -> components
- Next.js localStorage workaround in /pages/_app/ since window is not defined on SSR - [https://dev.to/jaklaudiusz/next-js-persistent-state-with-react-hooks-and-localstorage-how-to-make-it-work-3al6](https://dev.to/jaklaudiusz/next-js-persistent-state-with-react-hooks-and-localstorage-how-to-make-it-work-3al6)
- /components/_layouts/ stores default layout & possibly more in the future
- /hooks/ used in InlineEdit and for localStorage persistence

## Technology Used
Next.js (React framework) + CSS3 (written by me)
- Icons picked from - `react-icons`
- DatePicker component -  `react-datepicker`
- Sidebar component - `react-pro-sidebar`
- Generate IDs per element, so react keys are unique - `uuid`
- PropTypes to enforce typing (due to numerous components)
- applied InlineEdit component on each part of /user/\[uuid\].js page for ease of editing

## Installation
- `npm install`
- `npm run dev`

## Extra
- /pages/api was not used (did everything in frontend - however, endpoint was written/used at one point - & then deleted)
- picked themes from color hunt palette: [https://colorhunt.co/palette/264815](https://colorhunt.co/palette/264815)
- found background image from: [https://www.reddit.com/r/Hololive/comments/ia940a/hoshimachi_suisei_minimalvector_wallpaper/](https://www.reddit.com/r/Hololive/comments/ia940a/hoshimachi_suisei_minimalvector_wallpaper/)

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
