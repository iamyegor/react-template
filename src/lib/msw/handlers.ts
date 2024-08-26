import { http, HttpResponse } from "msw";
import { serverAddress } from "@/lib/msw/worker.ts";

export const handlers = [
    http.get(`${serverAddress}/data`, async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return HttpResponse.json("Idi nahuy");
    }),
];
