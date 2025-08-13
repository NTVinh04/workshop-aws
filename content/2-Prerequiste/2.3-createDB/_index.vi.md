---
title : "Tạo DynamoDB"
date: 2025-08-11
weight : 3 
chapter : false
pre : " <b> 2.3 </b> "
---

### Tạo Table User và Messages

Trong bước này sẽ tiến hành tạo 2 table là User và Messages để lưu trữ thông tin người dùng lấy từ cognito và để lưu trữ tin nhắn do người dùng gửi lên

1. Truy cập vào dịch vụ [DynamoDB](https://console.aws.amazon.com/dynamodb/)
2. Ở trang DynamoDB click **Create table**.  
![Dynamo](/images/2.prerequisite/024.png)

3. Ở mục **Table name** nhập ```User   ```  
  + Ở mục **Partition Key** nhập ```userId```
  + Sau đó click **Create Table**
![TableUser](/images/2.prerequisite/025.png)

4. Tiếp theo là table **Messages**
  + Ở mục **Table name** nhập ```Messages```  
  + Ở mục **Partition Key** nhập ```conversationId```
  + Ở mục **Sort Key** nhập ```timestamp```
  + Sau đó click **Create Table**
![TableMessages](/images/2.prerequisite/026.png)

5. Sau khi tạo xong chờ cho tới khi **Status** của 2 table đều là **Active** là hoàn thành.
![createpolicy1](/images/2.prerequisite/027.png)
