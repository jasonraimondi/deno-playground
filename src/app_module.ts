import { Area } from "https://deno.land/x/alosaur/src/mod.ts";

import { HomeController } from "./controllers/home_controller.ts";

@Area({
  controllers: [HomeController]
})
export class HomeArea {}
