---
title: “Create REST API”
date: 2025-08-11
weight: 2
chapter: false
pre: “ <b> 3.2.2 </b> ”
---
1. Access the [API Gateway](https://console.aws.amazon.com/apigateway) service interface.
  + Click **create an API**.
![API](/images/3.lambda-api/015.png)
![API](/images/3.lambda-api/016.png)

  + Under **REST API**, select **Build**
![REST](/images/3.lambda-api/017.png)
  + In the API name field, enter ```chatapp-RestAPI``` then select **Create API**
![REST](/images/3.lambda-api/022.png)

2. On the left side, select Authorizers 
  + Click **Create authorizer**
![Auth](/images/3.lambda-api/028.png)
  + In the **Authorizer name** field, enter ```cognito```
  + In the **Authorizer type** field, select **cognito**
  + In **Cognito user pool**, select the user pool you created
  + In the **Token source** field, enter ```Authorization``` then select **Create authorizer**
![Auth1](/images/3.lambda-api/029.png)
![Auth2](/images/3.lambda-api/030.png)

3. On the left side, select **Resources**.
  + Select / under **Create resource**, then click **Create resource**.
![REST](/images/3.lambda-api/022.png)
  + In the **Resource name** field, enter ```user   ``` then click **Create resource**
![user](/images/3.lambda-api/033.png)
  + Click on create method in the newly created **/user**
![user1](/images/3.lambda-api/034.png)
  + In **Method type**, select **GET** 
  + Enable **Lambda proxy integration**
  + In **Lambda function**, select the **getUser** function, then click **Create method**
![user2](/images/3.lambda-api/035.png)
  + Then, for the GET method, select **Method request** and click **Edit**
![user3](/images/3.lambda-api/036.png)
  + Under **Authorization**, select the Cognito you created, then click **Save**
![user4](/images/3.lambda-api/037.png)
  + Click **Enable CORS**
![user5](/images/3.lambda-api/031.png)
  + Select all boxes and click **Save**
![user6](/images/3.lambda-api/032.png)
4. Repeat the steps in section 3 to create the following Rest APIs:
  + **send-message** with POST method, Lambda function **sendMessage**
  + **create-user** with POST method, Lambda function **createUser**
  + **me** with GET method, Lambda function **me**
5. From the /me resource, create an additional PUT method with the **updateAvatar** function
![me](/images/3.lambda-api/038.png)
  + After creating the /me resource, create an additional /avatar resource
![avatar](/images/3.lambda-api/039.png)
  + From the /avatar resource, create a POST method with Lambda upAvatar, then **Enable CORS**
  + With avatar, there is no need to add **Authorization**
  {{% notice note %}}
The reason why /me uses the PUT method and /avatar uses the POST method is because POST is used to create something that does not yet exist, while PUT is used to replace something that already exists. /avatar is used to create an S3 URL to store the avatar created by the user, while the PUT of /me replaces the URL just created by /avatar in the User table.
  {{% /notice %}}
![avatar1](/images/3.lambda-api/040.png)
6. From the resource / select **Create resource** and create the resource ```message```
![message](/images/3.lambda-api/041.png)
+ From the resource /message select **Create resource** and create the resource ```{conversationId}```
![message1](/images/3.lambda-api/042.png)
  + Then create a GET method with the Lambda function **getMessage**
![message2](/images/3.lambda-api/043.png)
  + After completing, click **Deploy API** 
  + In the stage section, select * New Stage *
  + Enter the stage name ```dev    ``` and select deploy
![message3](/images/3.lambda-api/044.png)
  + Similar to websocket, copy the middle part of the invoke URL: **92ll2qcxai.execute-api.ap-southeast-1.amazonaws.com**
![message4](/images/3.lambda-api/045.png)
  + Then replace it in the code file
![message5](/images/3.lambda-api/027.png)