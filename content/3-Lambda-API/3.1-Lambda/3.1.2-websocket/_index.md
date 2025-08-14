---
title: "Lambda Websocket"
date: 2025-08-11
weight: 2 
chapter: false
pre: " <b> 3.1.2 </b> "
---
1. Access the [Lambda](https://console.aws.amazon.com/lambda) service page.
  + Click **Create function**.
  + In the **Function name** field, enter ```connect```
  + For **Runtime**, select either **Node.js 22.x** or **Node.js 18.x**
  + For **Architecture**, select **x86_64**
  + In the **Permissions** section, open the **Change default execution role** section, select **Use an existing role** in the **Execution role** section, and select the chatapp-role role created earlier
  + Click **create function** to create the Lambda function
![connect](/images/3.lambda-api/010.png)
2. After creating the Lambda connect function, you will be redirected to the connect function page
![connect1](/images/3.lambda-api/011.png)
  + Then go to the **backend/socket** directory, find the connect directory, cd into it, and paste the npm command to install the libraries ```npm install jsonwebtoken jwk-to-pem aws-sdk```
  + After completing the installation, zip the connect directory
  {{% notice info %}}
When zipping, do not zip the outer directory; instead, zip all files within the directory. If you zip the outer directory, deploying to Lambda will result in an error because the index.js file cannot be found, causing the code to fail.
  {{% /notice %}}
  + Then upload the zip file to Lambda
![connect2](/images/3.lambda-api/012.png)
3. Return to the function page and click **create function** to create the **disconnect** function.
![disconnect](/images/3.lambda-api/013.png)
  + Then go to the **backend/socket** directory, find the **disconnect.js** file, copy the code, and paste it into the code source.
![disconnect1](/images/3.lambda-api/014.png)
