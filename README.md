# Contact Manager
CRM but for general social relationships rather than converting prospects to sales. Track who I met, where I met, and some notes if I want.

## Table of Contents
- [Features](#features)
- [Technology](#technology)
- [Installation](#installation)
- [Purpose](#purpose)
- [Notes](#notes)
- [Next.js README](#next.js-default-readme)

## Features
Track who, where, and when I talked to people.
- Displays contacts in tabular or card form w/ how long ago & where I talked to people
- Jot down personal notes after a conversation
- Displays analytics of places in a dashboard
- Sort contacts to see people I have not talked to in a long time

## Technology
- Next.js - React framework with page-based routing, SSR, etc.
- PWA - used next-pwa, _document.js to create Progressive Web App. ()
- react-icons - icon library
- react-datepicker - date picker component
- react-pro-sidebar - Sidebar component
- prop-types - enforce typing of props in my custom components
- Vercel - JAM stack to deploy content for free (JAM = JavaScript, APIs, and HTML markup)

## Installation
- `npm install`
- `npm run dev`

#### Purpose
I graduated college, but had trouble staying in touch with college friends
- Existing CRM solutions were geared towards sales and difficult to use for beginners
- Social Media apps were focused on messaging, but I wanted notes from real life meetups.
  - Could not find note functionality in WeChat, WhatsApp, Line, Facebook, Messenger, Discord, Signal
  - Tried Keep Notes, Standard Notes, & EZNotes but those note apps quickly grow cluttered

## Notes
Flow of this project was:
  - Created Next.js project
  - Wrote all components from scratch
  - Created bad lookiing UI and stopped
  - Major refactor and added PropTypes to components & created /backup
  - Implemented some features but stopped
  - After creating /pageComponents folder, decided to use component library and remove most features
  - Implement card view from scratch
  - Add as Next.js PWA => fix problems using Lighthouse
  - Implement table view from scratch
  - Implement analytics page

#### Ant Design
- great documentation - got up and running fast due to good code to copy paste
- forms are kind of clunky - React gives errors when using them and there's a roundabout solution - https://github.com/ant-design/ant-design/issues/25150

#### Takeaways
- ALWAYS use a component library. Initially thought I would be "pro" and write it myself, but that is a mistake.
  - Wrote project w/o component library, but ultimately decided against (& used TailwindCSS)
  - Wrote numerous components custom with CSS Modules inside /src/components
    - Scrapped my Row & Col components
  - Ant Design is REALLLY good
- /pages/api was not used (did everything in frontend - however, endpoint was written/used at one point - & then deleted)
- picked themes from color hunt palette: [https://colorhunt.co/palette/264815](https://colorhunt.co/palette/264815)
- found background image from: [https://www.reddit.com/r/Hololive/comments/ia940a/hoshimachi_suisei_minimalvector_wallpaper/](https://www.reddit.com/r/Hololive/comments/ia940a/hoshimachi_suisei_minimalvector_wallpaper/)

#### File Structure
In Next.js, all files in /pages become routes for actual pages where the filename is the route name.
- /pages/_app/ holds state & passes -> pages -> components
- Next.js localStorage workaround in /pages/_app/ since window is not defined on SSR - [https://dev.to/jaklaudiusz/next-js-persistent-state-with-react-hooks-and-localstorage-how-to-make-it-work-3al6](https://dev.to/jaklaudiusz/next-js-persistent-state-with-react-hooks-and-localstorage-how-to-make-it-work-3al6)
- /components/_layouts/ stores default layout & possibly more in the future
- /hooks/ used in InlineEdit and for localStorage persistence

#### References
- https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
- Referencedd to fix Ant Design form issue w/ React keys - https://github.com/ant-design/ant-design/issues/25150

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
