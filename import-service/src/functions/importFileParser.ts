import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { csvToJson } from "../utils/parseData.utils";

export const handler = async (event) => {
    const S3Object = event.Records[0].s3
    const Bucket = S3Object.bucket.name
    const Key = decodeURIComponent(S3Object.object.key.replace(/\+/g, " "))

    const params = {
        Bucket,
        Key,
    }

    const client = new S3Client({});
    const command = new GetObjectCommand(params);
    const { Body } = await client.send(command);

    const csvData = await csvToJson(Body)

    if (csvData.length) {
        csvData.forEach(row => console.log(row))

        return {
            statusCode: 200,
            statusMessage: 'Ok',
        }
    }

    return {
        statusCode: 500,
        statusMessage: 'Error parsing csv file.',
    }

}