---
title : "Tạo IAM Role"
date: 2025-08-11
weight : 2 
chapter : false
pre : " <b> 2.2 </b> "
---

### Tạo IAM Role

Trong bước này sẽ tiến hành tạo IAM Role dành cho các chức năng của lambda. Trong IAM Role này sẽ được gán cho các policy với chức năng cho phép **Lambda** tạo và ghi chú lại log trên **CloudWatch** để kiểm tra nếu có lỗi trong quá trình làm. Tiếp theo là chức năng cho phép **Lambda** đọc và ghi dữ liệu vào 2 bảng **DynamoDB** sẽ tạo sắp tới là **User** và **Messages**. Kế tiếp là cho phép **Lambda** upload file và trong **S3**. Và cuối cùng là cho phép **Lambda** gửi tin nhắn hoặc đóng kết nối Websocket thông qua **API Gateway**

1. Truy cập vào dịch vụ [IAM](https://console.aws.amazon.com/iamv2/)
2. Ở thanh điều hướng bên trái, click  **Policies**.  
![policy](/images/2.prerequisite/013.png)

3. Click **Create Policy**.  
![policy1](/images/2.prerequisite/014.png)

4. Ở phần **Policy editor** chọn **JSON** 
  + Vào file code đã tải vào thư mục **backend/lambda** mở file **policyLambda.json** copy đoạn json đó và dán vào phần **Policy editor** sau đó chọn next.  
![createpolicy](/images/2.prerequisite/015.png)

5. Trong ô Policy name, điền tên cho policy là ```chatapp``` và kiểm tra lại phần **Permissions defined in this policy** xem đã đủ policy chưa.
![createpolicy1](/images/2.prerequisite/016.png)
  + Click **Create policy** để tạo policy
![createpolicy2](/images/2.prerequisite/017.png)

6. Ở thanh điều hướng bên trái, click  **Roles**.
![role](/images/2.prerequisite/018.png)
  + Click **Create role** 
  + Ở mục **Service or use case** của **Use case** chọn **Lambda**
  + Click **Next**
![createrole](/images/2.prerequisite/019.png)
  + Chọn Policy đã tạo ở trên và ấn **Next**
![createrole1](/images/2.prerequisite/020.png)
  + Ở **Role name** nhập ```chatapp-role``` sau đó kiểm tra lại và ấn **Create role**
![createrole2](/images/2.prerequisite/021.png)
![createrole3](/images/2.prerequisite/022.png)
![createrole4](/images/2.prerequisite/023.png)