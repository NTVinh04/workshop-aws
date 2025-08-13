---
title : "Tạo Cognito"
date: 2025-08-11
weight : 4 
chapter : false
pre : " <b> 2.4 </b> "
---

### Tạo User Pools cho Webchat

Trong bước này sẽ tiến hành tạo **User pools** để quản lý việc đăng ký, đăng nhập và xác minh cho người dùng

1. Truy cập vào dịch vụ [Cognito](https://console.aws.amazon.com/cognito/)
2. Ở giao diện của cognito click  **Get started for free in less than five minutes** hoặc ở thanh điều hướng bên trái click **User pools**, sau đó chọn **Create user pool**.  
![cognito](/images/2.prerequisite/028.png)
![cognito1](/images/2.prerequisite/029.png)
3. Ở mục **Application type** chọn **Single-page application (SPA)** vì **SPA** hỗ trợ tốt nhất cho các web sử dụng url thay đổi dựa trên hoạt động của người dùng giống như **React**.  
  + Ở phần **Configure options** mục **Options for sign-in identifiers** chọn **email**
  + Ở mục **Required attributes for sign-up** chọn **email** và **name** để khi người dùng đăng ký bắt buộc phải nhập các thông tin đó mà không được bỏ qua 
  + Sau đó click **Create user directory** để tạo User pool
![Userpool](/images/2.prerequisite/030.png)
![Userpool1](/images/2.prerequisite/031.png)

4. Sau khi tạo xong quay lại giao diện User pools và chọn User pools vừa tạo
  + Copy **User pool ID** ở giao diện User pool.  
![Userpool2](/images/2.prerequisite/032.png)
  + Sau đó vào phần search của file code và dán vào **Replace**, tìm file **README.md** và tìm dòng **userpoolId** copy và dán vào **Search** và nhấn **Replace All** để thay thế userpooldId ở trong code
![role](/images/2.prerequisite/033.png)

6. Ở thanh điều hướng bên trái, click  **App clients** và chọn **chatapp**.
![createrole](/images/2.prerequisite/034.png)
  + Copy **ClientID** của chatapp sau đó thực hiện tương tự thay **ClientID** vừa tạo từ user pools cho ClientID của code
![createrole1](/images/2.prerequisite/035.png)
![createrole2](/images/2.prerequisite/036.png)

Sau khi tạo xong 2 bucket trong **S3**, 2 table trong **DynamoDB** và đã tạo xong Userpool trong **Cognito** thì bước tiếp theo là tạo **Lambda** và **API Gateway** cho các **Lambda**