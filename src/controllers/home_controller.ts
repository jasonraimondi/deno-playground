import {
  Controller,
  Content,
  Get
} from "https://deno.land/x/alosaur/src/mod.ts";

@Controller("/")
export class HomeController {
  @Get("")
  text() {
    return Content("Hello world");
  }
}
