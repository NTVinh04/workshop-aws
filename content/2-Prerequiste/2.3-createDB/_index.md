---
title: “Create DynamoDB”
date: 2025-08-11
weight: 3 
chapter: false
pre: “ <b> 2.3 </b> ”
---

### Create User and Messages Tables

In this step, we will create two tables, User and Messages, to store user information retrieved from Cognito and to store messages sent by users.

1. Access the [DynamoDB](https://console.aws.amazon.com/dynamodb/) service.
2. On the DynamoDB page, click **Create table**.  
![Dynamo](/images/2.prerequisite/024.png)

3. In the **Table name** field, enter ```User   ```  
  + In the **Partition Key** field, enter ```userId```
  + Then click **Create Table**
![TableUser](/images/2.prerequisite/025.png)

4. Next is the **Messages** table
+ In the **Table name** field, enter ```Messages```  
  + In the **Partition Key** field, enter ```conversationId```
+ In the **Sort Key** field, enter ```timestamp```
  + Then click **Create Table**
![TableMessages](/images/2.prerequisite/026.png)

5. After creating the tables, wait until the **Status** of both tables is **Active** to complete the process.
![createpolicy1](/images/2.prerequisite/027.png)