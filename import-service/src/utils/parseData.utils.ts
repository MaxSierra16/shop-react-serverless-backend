import * as csv from "csv-parser"
import { Readable } from "stream"

export const streamToString = (stream) =>
    new Promise((resolve, reject) => {
        const chunks = [];
        stream.on("data", (chunk: never) => chunks.push(chunk));
        stream.on("error", reject);
        stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    })

export const csvToJson = (stream): Promise<any[]> =>
    new Promise((resolve, reject) => {
        const results = []
        Readable.from(stream)
            .pipe(csv())
            .on('data', (data) => results.push(data as never))
            .on("error", reject)
            .on('end', () => resolve(results));
    })
