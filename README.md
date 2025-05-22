# Lambda-DEMO
This REPO houses a Node.js Lambda event-driven function, which runs automatically when a new object is uploaded to the source S3 bucket.
The upload creates an event, which triggers the Lambda. The Lambda then:
 - Reads the event to identify the uploaded file.
 - Fetches the object from the source bucket.
 - Copies it to the destination bucket destination S3 bucket using the AWS SDK's CopyObjectCommand.

NOTE: To run this Lambda successfully, attach the following IAM policy to the Lambda execution role located in the lambda-inline-policy file
