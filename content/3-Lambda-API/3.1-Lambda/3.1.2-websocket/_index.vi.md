---
title : "Lambda Websocket"
date: 2025-08-11
weight : 2 
chapter : false
pre : " <b> 3.1.2 </b> "
---
1. Truy cập vào trang dịch vụ [Lambda](https://console.aws.amazon.com/lambda).
  + Click chọn **Create function**.
  + Ở mục **Function name** nhập ```connect```
  + **Runtime** chọn **Node.js 22.x** hoặc **Node.js 18.x** đều được
  + **Architecture** chọn **x86_64**
  + Ở mục **Permissions** mở mục **Change default execution role** chọn **Use an existing role** ở phần **Execution role** và chọn role chatapp-role đã tạo lúc trước
  + Click **create function** để tạo function Lambda
![connect](/images/3.lambda-api/010.png)
2. Sau khi tạo xong Lambda connect thì sẽ được chuyển đến trang function connect
![connect1](/images/3.lambda-api/011.png)
  + Sau đó vào thư mục **backend/socket** tìm thư mục connect và cd sau đó dán đoạn npm vào để install thư viện ```npm install jsonwebtoken jwk-to-pem aws-sdk```
  + Sau khi làm xong thì zip thư mục connect lại
  {{% notice info %}}
Khi zip thì đừng zip thư mục ở bên ngoài mà nên zip toàn bộ file trong thư mục vì nếu zip thư mục bên ngoài thì khi deloy lên lambda sẽ bị lỗi vì không dò được file index.js khiên code không hoạt động
  {{% /notice %}}
  + Sau đó upload file zip lên lambda
![connect2](/images/3.lambda-api/012.png)
3. Quay lại trang function và click **create function** để tạo function **disconnect**
![disconnect](/images/3.lambda-api/013.png)
  + Sau đó vào thư mục **backend/socket** tìm file **disconnect.js** sau đó copy code và dán vào code source
![disconnect1](/images/3.lambda-api/014.png)
