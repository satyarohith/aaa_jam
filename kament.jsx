import { Fragment, h, serve } from "https://deno.land/x/sift@0.1.2/mod.ts";
import { kamentApiRoutes } from "https://raw.githubusercontent.com/satyarohith/kament/main/mod.ts";

serve({
  "/": Home,
  "/kament.js": async () => {
    const res = await fetch("https://raw.githubusercontent.com/satyarohith/kament/main/kament_client.js");
    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.set("Content-Type", "application/javascript; charset=utf-8")
    return res;
  },
  "/kament.css": async () => { 
    const res = await fetch(new URL("kament.css", import.meta.url));
    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.set("Content-Type", "text/css; charset=utf-8")
    return res;
  },
  ...kamentApiRoutes,
});

function Home() {
  return (
    <Layout>
      <h1 className="text-3xl">Kament</h1>
      <p className="text-xl">
        Serverless comments system for your static sites.
      </p>
      <br />
      <br />
      <Kament slug="kament.deno.dev" />
    </Layout>
  );
}

function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        />
      </head>
      <body
        className="min-h-screen py-6 flex flex-col place-items-center"
      >
        {children}
      </body>
    </html>
  );
}

function Kament({ slug }) {
  return (
    <>
      <div
        data-postslug={slug}
        data-kme=""
        data-ghid="d4baa77e41e5bb64a72d"
        id="kament"
      >
      </div>
      <script defer src="/kament.js" type="module" />
    </>
  );
}
