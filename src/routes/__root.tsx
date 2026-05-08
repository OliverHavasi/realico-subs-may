import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Stránka neexistuje</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Stránku, ktorú hľadáte, sa nepodarilo nájsť.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[#191919] px-5 py-2.5 text-sm font-medium text-white"
          >
            Domov
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Realico-subpages" },
      { name: "description", content: "Realico subs is a frontend application that replicates provided designs with pixel-perfect accuracy." },
      { property: "og:title", content: "Realico-subpages" },
      { property: "og:description", content: "Realico subs is a frontend application that replicates provided designs with pixel-perfect accuracy." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Realico-subpages" },
      { name: "twitter:description", content: "Realico subs is a frontend application that replicates provided designs with pixel-perfect accuracy." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4ceafbdd-fcfd-4ee8-88d0-ffe5837dff45/id-preview-a22c6566--40cb9efd-d437-467f-bd3f-1ceb5b513892.lovable.app-1777127676145.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4ceafbdd-fcfd-4ee8-88d0-ffe5837dff45/id-preview-a22c6566--40cb9efd-d437-467f-bd3f-1ceb5b513892.lovable.app-1777127676145.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
