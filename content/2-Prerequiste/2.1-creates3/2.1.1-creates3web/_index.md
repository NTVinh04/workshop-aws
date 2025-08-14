---
title: "Create an S3 bucket for website"
date: 2025-08-11
weight: 1 
chapter: false
pre: " <b> 2.1.1 </b> "
---

#### Create an S3 bucket for website
1. Access the [S3](https://console.aws.amazon.com/s3/home) service.
  + Click **Create bucket**.

![bucket](/images/2.prerequisite/001.png)

2. On the **Create bucket** page.
  + In the **Bucket name** field, enter **chatapp-web**.
  ![bucket](/images/2.prerequisite/002.png)
  + In the **Block Public Access settings for this bucket** section, uncheck **Block all public access** and select **I acknowledge that the current settings might result in this bucket and the objects within becoming public.** to allow everyone to access the website.
  ![bucket](/images/2.prerequisite/003.png)
  + Click **Create bucket**.

3. Then go to the S3 **chatapp-web** you created and select **Properties**, scroll down to the **Static website hosting** section and select **edit**.
  ![static](/images/2.prerequisite/004.png)
  + In the **Static website hosting** section, select **Enable** to open other sections.
  + Under **Hosting type**, select **Host a static website**.
  + Under **Index document** and **Error document**, enter **index.html** and select **Save changes** so that S3 uses **index.html** as the default page for the website.
  ![static](/images/2.prerequisite/005.png)

4. Next, go to **Permissions** in the **Bucket policy** section and select edit
  ![policy](/images/2.prerequisite/006.png)
  + Go to the downloaded code file, find the **bucketPolicyWebchat.json** file in the **backend/s3** folder, and copy it
  + In the Policy section, paste the copied policy