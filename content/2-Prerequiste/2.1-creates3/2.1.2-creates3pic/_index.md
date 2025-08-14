---
title: “Create an S3 bucket for images”
date: 2025-08-11
weight: 2 
chapter: false
pre: “ <b> 2.1.2 </b> ”
---
### Create an S3 bucket for images
1. Access the [S3](https://console.aws.amazon.com/s3/home) service
  + Click **Create bucket**.

![bucket](/images/2.prerequisite/001.png)

2. On the **Create bucket** page.
  + In the **Bucket name** field, enter **chatapp-web**.
  ![bucket](/images/2.prerequisite/008.png)
  + Under **Block Public Access settings for this bucket**, uncheck **Block all public access** and select **I acknowledge that the current settings might result in this bucket and the objects within becoming public.**
  ![bucket](/images/2.prerequisite/003.png)
  + Click **Create bucket**.

3. Next, go to **Permissions** in the **Bucket policy** section and select edit
  ![policy](/images/2.prerequisite/006.png)
  + Go to the downloaded code file, find the **bucketPolicyPic.json** file in the **backend/s3** folder, and copy it
  + In the Policy section, paste the copied json segment, then select **Save changes**
  {{% notice info %}}
  Edit the S3 link in the bucket json file and CORS above if the name is different from workshop
  {{% /notice %}}
  ![policy](/images/2.prerequisite/009.png)

4. Next, scroll down to the **Cross-origin resource sharing (CORS)** section in **Permissions** and select edit.
  ![cors](/images/2.prerequisite/010.png)
  + Go to the downloaded code file, find the **corsS3Pic.json** file in the **backend/s3** folder, and copy it.
  + In the Cross-origin resource sharing (CORS) section, paste the copied JSON segment, then select **Save changes**
  ![cors](/images/2.prerequisite/011.png)

5. Then go to the **frontend/public** file and drag **avatar.png** into the **chatapp-pic** bucket
  ![avatar](/images/2.prerequisite/012.png)
  {{% notice info %}}
If the bucket name is different from the workshop, you should retrieve the avatar.png link from the newly created bucket, then in the code directory **frontend/constants** file **avatars3.js**, change the link to avoid errors in the system
{{% /notice %}}