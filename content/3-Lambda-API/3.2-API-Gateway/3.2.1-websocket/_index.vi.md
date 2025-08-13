---
title : "Tạo Websocket"
date: 2025-08-11
weight : 1
chapter : false
pre : " <b> 3.2.1 </b> "
---
1. Truy cập giao diện dịch vụ [API Gateway](https://console.aws.amazon.com/apigateway)
  + Click **create an API**
![API](/images/3.lambda-api/015.png)
  + Ở **Websocket API** chọn **Build**
![API](/images/3.lambda-api/016.png)

  + Ở trường API name nhập ```chatapp```
  + Ở trường **Route selection expression** nhập ```request.body.action``` sau đó chọn **Next**
![socket](/images/3.lambda-api/018.png)
  + Chọn **Add $connect route** và **Add $disconnect route** để tạo route
![socket1](/images/3.lambda-api/019.png)
  + Ở trường **Integration type** của connect và disconnect chọn Lambda sau đó ở **Lambda function** thì chọn function tương ứng sau đó nhấn **Next**
![socket2](/images/3.lambda-api/020.png)
  + Ở Add stages, Stage name nhập ```production``` sau đó nhấn **Next** để kiểm tra lại và nhấn **Create** để tạo API
![socket3](/images/3.lambda-api/021.png)
2. Nhấn **Deloy API**
![socket4](/images/3.lambda-api/023.png)
![socket5](/images/3.lambda-api/024.png)
  + Sau khi deloy copy phần **Websocket url**
![socket6](/images/3.lambda-api/025.png)
{{% notice info %}}
chỉ lấy phần giữa của url bỏ đi phần wss:// và /production như sau **n5rwnf1sm9.execute-api.ap-southeast-1.amazonaws.com**
  {{% /notice %}}
  + Sau đó vào file code tìm file README.md copy url websocket vào phần search và dán đoạn url websocket vừa tạo ở phần Replace và chọn Replace All
![sendMessage](/images/3.lambda-api/026.png)
  + Sau đó quay lại Lambda và deloy code sendMessage vừa sửa