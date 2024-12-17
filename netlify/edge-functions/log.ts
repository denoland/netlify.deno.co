import type { Config, Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  console.log("Hello from the logging service. Here's window:");
  console.log(window);

  return new Response("The request to this URL was logged. Bert modified it.", {
    headers: { "content-type": "text/html" },
  });
};

export const config: Config = {
  path: "/log",
};
