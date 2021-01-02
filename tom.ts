import { serve } from "https://deno.land/x/sift@0.1.1/mod.js";

serve({
  "/": () => new Response("Hello from Tom!"),
});
