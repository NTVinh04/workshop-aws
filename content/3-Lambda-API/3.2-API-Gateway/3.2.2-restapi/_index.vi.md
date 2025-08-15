---
title : "Tạo REST API"
date: 2025-08-11
weight : 2
chapter : false
pre : " <b> 3.2.2 </b> "
---
1. Truy cập giao diện dịch vụ [API Gateway](https://console.aws.amazon.com/apigateway)
  + Click **create an API**
![API](/images/3.lambda-api/015.png)
![API](/images/3.lambda-api/016.png)

  + Ở **REST API** chọn **Build**
![REST](/images/3.lambda-api/017.png)
  + Ở trường API name nhập ```chatapp-RestAPI``` sau đó chọn **Create API**
![REST](/images/3.lambda-api/022.png)

2. Ở mục bên trái chọn Authorizers 
  + Click **Create authorizer**
![Auth](/images/3.lambda-api/028.png)
  + Ở trường **Authorizer name** nhập ```cognito```
  + Trường **Authorizer type** chọn **cognito**
  + Trong **Cognito user pool** chọn user pool đã tạo
  + Trong trường **Token source** nhập ```Authorization``` sau đó chọn **Create authorizer**
![Auth1](/images/3.lambda-api/029.png)
![Auth2](/images/3.lambda-api/030.png)

3. Ở mục bên trái chọn **Resources**
  + Chọn / ở dưới **Create resource** sau đó click vào **Create resource**
![REST](/images/3.lambda-api/022.png)
  + Ở trường **Resource name** nhập ```user   ``` sau click **Create resource**
![user](/images/3.lambda-api/033.png)
  + Click vào create method ở **/user** vừa tạo
![user1](/images/3.lambda-api/034.png)
  + Ở **Method type** chọn **GET** 
  + Bật **Lambda proxy integration**
  + Ở **Lambda function** chọn function ```getUser``` sau đó click **Create method**
![user2](/images/3.lambda-api/035.png)
  + Sau đó method GET chọn mục **Method request** chọn edit
![user3](/images/3.lambda-api/036.png)
  + Ở **Authorization** chọn cognito đã tạo sau đó nhấn **Save**
![user4](/images/3.lambda-api/037.png)
  + Click **Enable CORS**
![user5](/images/3.lambda-api/031.png)
  + Chọn hết tất cả các ô và ấn **Save**
![user6](/images/3.lambda-api/032.png)
4. Tiếp theo là tạo resource ```send-message``` với Method POST, Lambda function ```sendMessage```
![sendMessage](/images/3.lambda-api/046.png)
  + Gắn **Authorization** cho method **send-message**
![sendMessage1](/images/3.lambda-api/052.png)
  + Bật **CORS** cho method **send-message**
![sendMessage2](/images/3.lambda-api/051.png)
5.Sau đó tạo resource ```create-user``` với Method POST, Lambda function ```createUser```
![createUser](/images/3.lambda-api/048.png)
  + Gắn **Authorization** cho method **create-user**
![createUser1](/images/3.lambda-api/053.png)
  + Bật **CORS** cho method **create-user**
![createUser2](/images/3.lambda-api/049.png)
6. ```me    ``` với Method GET, Lambda function ```me    ```
![me](/images/3.lambda-api/050.png)
  + Gắn **Authorization** cho method **me**
![me1](/images/3.lambda-api/054.png)
  + Bật **CORS** cho method **me**
![me2](/images/3.lambda-api/055.png)
![me3](/images/3.lambda-api/056.png)
7. Từ resource /me tạo thêm 1 method PUT với function **updateAvatar**
![me](/images/3.lambda-api/038.png)
  + Sau khi tạo xong từ resource /me tạo thêm 1 resource /avatar
![avatar](/images/3.lambda-api/039.png)
  + Từ resource /avatar tạo method POST với Lambda upAvatar sau đó **Enable CORS**
  + Với avatar thì không cần thêm **Authorization**
  {{% notice note %}}
Lý do ở /me lại sử dụng method PUT còn /avatar lại sử dụng method POST là vì POST dùng để tạo cái chưa có còn PUT là để thay thế thứ đã có và /avatar là dùng để tạo url s3 để lưu trữ avatar do người dùng tạo lên còn PUT của /me là thay thế url vừa được tạo ra do /avatar vào trong table User
  {{% /notice %}}
![avatar1](/images/3.lambda-api/040.png)
8. Từ resource / chọn **Create resource** và tạo resource ```message```
![message](/images/3.lambda-api/041.png)
  + Từ resource /message chọn **Create resource** và tạo resource ```{conversationId}```
![message1](/images/3.lambda-api/042.png)
  + Sau đó tạo method GET với Lambda function là **getMessage**
![message2](/images/3.lambda-api/043.png)
  + Sau khi làm xong ấn **Deloy API** 
  + Ở phần stage chọn * New Stage *
  + Stage name nhập ```dev    ``` và chọn deloy
![message3](/images/3.lambda-api/044.png)
  + Tương tự như websocket copy phần giữa của invoke URL: **92ll2qcxai.execute-api.ap-southeast-1.amazonaws.com**
![message4](/images/3.lambda-api/045.png)
  + Sau đó thay thế ở trong file code
![message5](/images/3.lambda-api/027.png)