---
title: "Upload code to S3"
date: 2025-08-11
weight: 4 
chapter: false
pre: " <b> 4. </b> "
---
After completing all the steps above, there is only one more step left: uploading the code to the website bucket.
1. Go to the directory containing the code.
  + cd into frontend and enter ```npm install```
  + After npm install is complete, enter ```npm run build```
  ![s3](/images/4.s3/001.png)

  + After running, you will have the dist file, which is the frontend code optimized for AWS use
  ![s3.1](/images/4.s3/002.png)

  + Upload the dist file to S3
  ![s3.2](/images/4.s3/003.png)

2. After uploading, go to the **Properties** section, scroll down to **Static website hosting**, copy the website URL, and use it
  ![s3.3](/images/4.s3/004.png)
  ![s3.4](/images/4.s3/005.png)

  {{% notice info %}}
When testing on the same machine, it is recommended to test on two different browsers because using the same browser, even in private mode, may result in a duplicate connectionId error.
  {{% /notice %}}