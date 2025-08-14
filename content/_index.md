---
title : "WebChat Serverless realtime"
date: 2025-08-11
weight : 1 
chapter : false
---
# AWS Serverless realtime webchat

### Overview  

This is a workshop about serverless real-time webchat on AWS using **S3** to store websites, store images uploaded by users via messages, or change user avatars. **Cognito** is used to handle user registration, login, and verification.
 Next, we will build an API using **Lambda** and **API Gateway** to manage data and user interactions with the system. Then, we will use **DynamoDB** to store data sent by **Lambda** to the system.

![AWS](/images/aws.png) 

### Content

 1. [Introduction](1-introduce/)
 2. [Preparation steps](2-Prerequisites/)
 3. [Create Lambda and API Gateway](3-Lambda-API/)
 4. [Upload code to S3](4-s3/)
 5. [Create CloudFront](5-CloudFront/)
 6. [Clean up resources](6-cleanup/)