---
title: "Lambda REST API"
date: 2025-08-11
weight: 1 
chapter: false
pre: " <b> 3.1.1 </b> "
---
1. Access the [Lambda](https://console.aws.amazon.com/lambda) service page.
![Lambda](/images/3.lambda-api/001.png)
  + Click **Create function**.
  + In the **Function name** field, enter ```getMessage```
  + For **Runtime**, select either **Node.js 22.x** or **Node.js 18.x**
  + For **Architecture**, select **x86_64**
  + In the **Permissions** section, open **Change default execution role**, select **Use an existing role** in the **Execution role** section, and select the chatapp-role created earlier
  + Click **create function** to create the Lambda function
![getMessage](/images/3.lambda-api/003.png)
2. After creating the getMessage Lambda, you will be redirected to the getMessage function page
![getMessage1](/images/3.lambda-api/004.png)
  + Then scroll down to **Code source** and go to the **backend/lamda** directory, copy the code from the **getMessage.mjs** file, and paste it into **Code source**
![getMessage2](/images/3.lambda-api/005.png)
  + Click on deploy to save the code
![getMessage3](/images/3.lambda-api/006.png)
{{% notice note %}}
Do the same for the following **Lambda** functions: **createUser**, **getUser**, **me**, **updateAvatar**
  {{% /notice %}}
3. For the Lambda **upAvatar**, since it uses external libraries that are not available in Lambda, you cannot paste it directly. Instead, you must download the library from your machine, zip the file, and deploy it to Lambda.
  + Create the Lambda function upAvatar similar to the Lambda functions above.  
  + In the code source section, select **Upload from** and choose **.zip file**, then locate the **upAvatar.zip** file in the **upAvatar** directory and select upload.  
![upAvatar](/images/3.lambda-api/007.png)
![upAvatar1](/images/3.lambda-api/008.png)
![upAvatar2](/images/3.lambda-api/009.png)

{{% notice info %}}
  To avoid errors, delete the upAvatar.zip, node_modules, package-lock.json, and package.json files, then cd into the upAvatar directory in VScode and use the following npm command to download and upload to Lambda ```npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner uuid```
  {{% /notice %}}
4. For the Lambda **sendMessage** function, create it but do not upload the code yet, as it will need to be modified to enable real-time web chat.
{{% notice info %}}
Because the sendMessage function contains the following code segment: **endpoint: ‘https://5gm2fis56a.execute-api.ap-southeast-1.amazonaws.com/production’**, which can only be modified after deploying the WebSocket.
  {{% /notice %}}