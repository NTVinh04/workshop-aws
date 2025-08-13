---
title : "Lambda REST API"
date: 2025-08-11
weight : 1 
chapter : false
pre : " <b> 3.1.1 </b> "
---
1. Truy cập vào trang dịch vụ [Lambda](https://console.aws.amazon.com/lambda).
![Lambda](/images/3.lambda-api/001.png)
  + Click chọn **Create function**.
  + Ở mục **Function name** nhập ```getMessage```
  + **Runtime** chọn **Node.js 22.x** hoặc **Node.js 18.x** đều được
  + **Architecture** chọn **x86_64**
  + Ở mục **Permissions** mở mục **Change default execution role** chọn **Use an existing role** ở phần **Execution role** và chọn role chatapp-role đã tạo lúc trước
  + Click **create function** để tạo function Lambda
![getMessage](/images/3.lambda-api/003.png)
2. Sau khi tạo xong Lambda getMessage thì sẽ được chuyển đến trang function getMessage
![getMessage1](/images/3.lambda-api/004.png)
  + Sau đó kéo xuống **Code source** và vào thư mục **backend/lamda** và copy code của file **getMessage.mjs** và dán vào **Code source**
![getMessage2](/images/3.lambda-api/005.png)
  +Click vào deloy để lưu code
![getMessage3](/images/3.lambda-api/006.png)
{{% notice note %}}
Thực hiện tương tự cho các **Lambda** sau : **createUser**, **getUser**, **me**, **updateAvatar**
  {{% /notice %}}
3. Đối với Lambda **upAvatar** do có sử dụng các thư viện bên ngoài mà Lambda không có sẵn nên không thể dán trực tiếp mà phải tải thư viện về từ máy sau đó zip file lại và deloy lên Lambda
  + Tạo function Lambda upAvatar tương tự các Lambda trên
  + Ở phần code source chọn **Upload from** chọn **.zip file** sau đó tìm **upAvatar.zip** trong thư mục **upAvatar** và chọn upload
![upAvatar](/images/3.lambda-api/007.png)
![upAvatar1](/images/3.lambda-api/008.png)
![upAvatar2](/images/3.lambda-api/009.png)

{{% notice info %}}
  Để hạn chế bị lỗi thì nên xóa file upAvatar.zip, node_modules,package-lock.json và package.json sau đó cd vào thư mục upAvatar trên VScode và dùng đoạn npm sau để tải và up lên Lambda ```npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner uuid```
  {{% /notice %}}
4. Đối với Lambda **sendMessage** thì vẫn tạo nhưng không đưa code lên vội vì sẽ cần sửa code để web chat có thể realtime
{{% notice info %}}
Vì trong sendMessage có đoạn code sau **endpoint: 'https://5gm2fis56a.execute-api.ap-southeast-1.amazonaws.com/production'** chỉ có thể sửa sau khi deloy websocket
  {{% /notice %}}