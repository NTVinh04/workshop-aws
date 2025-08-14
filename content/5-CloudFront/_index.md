---
title: "Create CloudFront"
date: 2025-08-11
weight: 5
chapter: false
pre: "<b>5. </b>"
---
After uploading Webchat to S3 and using it, when there are too many messages or large images, it takes a long time to load, so use CloudFront to speed up the website and make it smoother.

1. Access [CloudFront](https://console.aws.amazon.com/cloudfront)
  + Click **Create a CloudFront distribution**.
  ![cloudfront](/images/5.cloud/001.png)
  + In the **Distributions** field, enter ```vchat ``` to help identify the purpose of this **CloudFront**.
  + You can add more details in the **Description** field.
  + Click **Next**.
  ![cloudfront1](/images/5.cloud/002.png)
  + Select **Amazon S3** for **Origin Type**
  + In the **S3 origin** field, enter the URL of the **chatapp** from S3 or select **Browse S3** and locate the bucket containing the website
  ![cloudfront2](/images/5.cloud/004.png)
  + Then select **Use website endpoint** and click **Next**
  ![cloudfront3](/images/5.cloud/005.png)
  ![cloudfront4](/images/5.cloud/006.png)
  + Since this is a personal project and there is no important data, you can select **Do not enable security protections** and click **Next**
  ![cloudfront5](/images/5.cloud/007.png)
  + After completing the process, wait about 5 minutes for **Last modified** to show the time when the deployment is complete
  ![cloudfront6](/images/5.cloud/008.png)
  ![cloudfront7](/images/5.cloud/009.png)

2. After deployment is complete, copy the **Distribution domain name** and test it
  ![web](/images/5.cloud/010.png)
  + This is the URL of **S3**, which shows that it takes 169ms to render the interface.
  ![web1](/images/5.cloud/011.png)
  + This is the URL for **CloudFront**, which only takes 9ms to render the interface.
  ![web2](/images/5.cloud/012.png)