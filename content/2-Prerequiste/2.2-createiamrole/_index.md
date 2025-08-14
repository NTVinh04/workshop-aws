---
title: “Create IAM Role”
date: 2025-08-11
weight: 2 
chapter: false
pre: “ <b> 2.2 </b> ”
---

### Create IAM Role

In this step, we will create an IAM Role for the lambda functions. This IAM Role will be assigned policies that allow **Lambda** to create and log entries in **CloudWatch** to check for errors during the process. Next is the functionality that allows **Lambda** to read and write data to the two **DynamoDB** tables that will be created soon: **User** and **Messages**. Next, we will allow **Lambda** to upload files to **S3**. Finally, we will allow **Lambda** to send messages or close Websocket connections through **API Gateway**.

1. Access the [IAM](https://console.aws.amazon.com/iamv2/) service.
2. In the left navigation bar, click **Policies**.  
![policy](/images/2.prerequisite/013.png)

3. Click **Create Policy**.  
![policy1](/images/2.prerequisite/014.png)

4. In the **Policy editor** section, select **JSON** 
  + Go to the code file you uploaded to the **backend/lambda** directory, open the **policyLambda.json** file, copy the JSON code, and paste it into the **Policy editor** section, then select Next.  
![createpolicy](/images/2.prerequisite/015.png)

5. In the Policy name field, enter the policy name as ```chatapp``` and review the **Permissions defined in this policy** section to ensure the policy is complete.
![createpolicy1](/images/2.prerequisite/016.png)
+ Click **Create policy** to create the policy.
![createpolicy2](/images/2.prerequisite/017.png)

6. In the left navigation bar, click **Roles**.
![role](/images/2.prerequisite/018.png)
  + Click **Create role** 
  + In the **Service or use case** section of **Use case**, select **Lambda**
  + Click **Next**
![createrole](/images/2.prerequisite/019.png)
  + Select the policy created above and click **Next**
![createrole1](/images/2.prerequisite/020.png)
  + In **Role name**, enter ```chatapp-role``` then review and click **Create role**
![createrole2](/images/2.prerequisite/021.png)
![createrole3](/images/2.prerequisite/022.png)
![createrole4](/images/2.prerequisite/023.png)