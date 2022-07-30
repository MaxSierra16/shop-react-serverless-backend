import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const REGION = "us-east-1";
const expiresIn = 60 * 2;

export const handler = async (event) => {
  const fileName = event?.queryStringParameters?.name || "TestName";

  try {
    const s3Client = new S3Client({ region: REGION });
    const command = new PutObjectCommand({ Bucket: 'shop-react-csv', Key: `uploaded/${fileName}` })
    const presignedUrl = await getSignedUrl(s3Client, command, { expiresIn });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(
        {
          message: `Successfully created presigned url!`,
          presignedUrl,
        }
      ),
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          message: err.message,
        }
      ),
    };
  }
};
