import { S3Client, CopyObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({});

export const handler = async (event) => {
    try {
        const sourceBucket = "sourc-bucket-itg";          ===> SOURCE BUCKET NAME
        const destinationBucket = "dest-bucket-itg";      ===> DESTINATION BUCKET NAME
        const objectKey = event.Records[0].s3.object.key;

        const copyParams = {
            Bucket: destinationBucket,
            CopySource: `/${sourceBucket}/${objectKey}`,
            Key: objectKey
        };

        console.log("Copying object:", copyParams);

        await s3.send(new CopyObjectCommand(copyParams));

        console.log(`Successfully copied '${objectKey}' to '${destinationBucket}'`);
    } catch (err) {
        console.error("Error copying object:", err);
        throw err;
    }
};

