---
title : "Cleaning up resources"
date : 2025-08-11
weight : 6
chapter : false
pre : "<b>6. </b>"
---

Now, here are the steps to delete the resources you created.

#### Delete S3

1. Access [S3](https://s3.console.aws.amazon.com/s3/home)
  + Click to select the S3 bucket you created
  + Click **Empty**.
  + Enter **permanently delete**, then click **Empty** to delete the objects in the bucket.
  + Click **Exit**.

2. After deleting all objects in the bucket, click **Delete**
  + Then enter the bucket name and click **Delete bucket**

#### Delete API Gateway

Access [API Gateway](https://console.aws.amazon.com/apigateway).
  + Click to select the created API
  + Click **Delete**
  + Enter **confirm** and click **Delete**

#### Delete CloudWatch
Access [CloudWatch](https://console.aws.amazon.com/cloudwatch).
  + On the left sidebar, select **Logs**, then select **Log groups**
  + Click to select the log groups created during the process
  + Click **Action** and select **Delete log group(s)**
  + Click **Delete**

#### Delete Policy
Access [IAM](https://console.aws.amazon.com/iamv2/).
  + On the left sidebar, select **Policies**
  + Click to select the policy created during the process
  + Click **Delete**
  + Enter the policy name and click **Delete**

#### Delete Role
Access [IAM](https://console.aws.amazon.com/iamv2/).
  + Select **Roles** from the left sidebar.
  + Click on the role created during the process.
  + Click **Delete**.
  + Enter the role name and click **Delete**.

#### Delete Lambda
Access the [Lambda](https://console.aws.amazon.com/lambda) service page.
  + On the left sidebar, select **Functions**.
  + Click to select the functions created during the process.
  + Click **Action** and select **Delete**.
  + Enter **confirm** and click **Delete**.

#### Delete DynamoDB
Access the [DynamoDB](https://console.aws.amazon.com/dynamodb/) service.
  + Select **Tables** from the left sidebar.
  + Click to select the tables created during the process.
  + Click **Delete**.
  + Select **Delete all CloudWatch alarms for the 2 tables selected**.
  + Enter **confirm** and click **Delete**

#### Delete Cognito
Access the [Cognito](https://console.aws.amazon.com/cognito/)
  + On the left sidebar, select **User pools**
  + Click to select the user pools created during the process
  + Click **Delete**
  + Select **Delete Cognito domain ap-southeast-1vhb6cgguj that you assigned** and **Deactivate deletion protection**.
  + Enter the user pool name and click **Delete**

#### Delete CloudFront
Access the [CloudFront](https://console.aws.amazon.com/cloudfront/) service
  + On the left sidebar, select **Distributions**
  + Click on the **Distributions** created during the process
  + Click **Disable** and wait until **Last modified** no longer shows **deloyinng**
  + Click **Delete** and confirm deletion