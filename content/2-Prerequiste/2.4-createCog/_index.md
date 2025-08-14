---
title: "Create Cognito"
date: 2025-08-11
weight: 4 
chapter: false
pre: " <b> 2.4 </b> "
---

### Create User Pools for Webchat

In this step, we will create **User pools** to manage user registration, login, and verification.

1. Access the [Cognito](https://console.aws.amazon.com/cognito/) service.
2. On the Cognito interface, click  **Get started for free in less than five minutes** or click **User pools** in the left navigation bar, then select **Create user pool**.  
![cognito](/images/2.prerequisite/028.png)
![cognito1](/images/2.prerequisite/029.png)
3. Under **Application type**, select **Single-page application (SPA)** because **SPA** provides the best support for websites that use URLs that change based on user activity, such as **React**.  
  + Under **Configure options**, select **email** under **Options for sign-in identifiers**
  + In the **Required attributes for sign-up** section, select **email** and **name** so that users must enter this information when registering and cannot skip it. 
  + Then click **Create user directory** to create a User pool.
![Userpool](/images/2.prerequisite/030.png)
![Userpool1](/images/2.prerequisite/031.png)

4. After creating, return to the User pools interface and select the User pools you just created.  
+ Copy **User pool ID** in the User pool interface.  
![Userpool2](/images/2.prerequisite/032.png)
  + Then go to the search section of the code file and paste it into **Replace**, find the **README.md** file and find the line **userpoolId**, copy and paste it into **Search**, and click **Replace All** to replace userpooldId in the code.
![role](/images/2.prerequisite/033.png)

5. In the left navigation bar, click **App clients** and select **chatapp**.
![createrole](/images/2.prerequisite/034.png)
  + Copy the **ClientID** of chatapp, then do the same to replace the **ClientID** just created from user pools with the ClientID of the code.
![createrole1](/images/2.prerequisite/035.png)
![createrole2](/images/2.prerequisite/036.png)

After creating the two buckets in **S3**, the two tables in **DynamoDB**, and the user pool in **Cognito**, the next step is to create **Lambda** and **API Gateway** for the **Lambda** functions.