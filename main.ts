import { App, staticFiles } from "fresh";
import { type State } from "@/lib/utils.ts";

export const app = new App<State>();

app.use(staticFiles());
app.fsRoutes();
