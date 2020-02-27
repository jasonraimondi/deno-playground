import { App } from "https://deno.land/x/alosaur/src/mod.ts";

import { HomeArea } from "./app_module.ts";

const app = new App({
  areas: [HomeArea]
});

app.listen();
