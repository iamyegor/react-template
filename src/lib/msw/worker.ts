import { setupWorker } from "msw/browser";
import { handlers } from "@/lib/msw/handlers.ts";

export const serverAddress = "https://localhost:7071/api";

export const worker = setupWorker(...handlers);
