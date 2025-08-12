---
title : "Tạo S3 chứa website"
date: 2025-08-11
weight : 1 
chapter : false
pre : " <b> 2.1.1 </b> "
---

#### Tạo S3 chứa website
1. Truy cập dịch vụ [S3](https://console.aws.amazon.com/s3/home)
  + Click **Create bucket**.

![bucket](/images/2.prerequisite/001.png)

2. Tại trang **Create bucket**.
  + Tại mục **Bucket name** điền **chatapp-web**.
  ![bucket](/images/2.prerequisite/002.png)
  + Tại mục **Block Public Access settings for this bucket** bỏ chọn **Block all public access** và chọn **I acknowledge that the current settings might result in this bucket and the objects within becoming public.** để cho tất cả mọi người có thể truy cập vào website
  ![bucket](/images/2.prerequisite/003.png)
  + Click **Create bucket**.

3. Sau đó vào S3 **chatapp-web** đã tạo và chọn **Properties** kéo xuống tới phần **Static website hosting** chọn **edit**
  ![static](/images/2.prerequisite/004.png)
  + Tại mục **Static website hosting** chọn **Enable** sẽ mở ra các mục khác
  + Tại mục **Hosting type** chọn **Host a static website**
  + Tại mục **Index document** và **Error document** nhập **index.html** và chọn **Save changes** để s3 lấy **index.html** làm trang mặc định cho trang web
  ![static](/images/2.prerequisite/005.png)

4. Tiếp theo vào **Permissions** ở phần **Bucket policy** chọn edit
  ![policy](/images/2.prerequisite/006.png)
  + Vào file code đã tải xuống tìm file **bucketPolicyWebchat.json** ở file **backend/s3** và copy
  + Tại phần Policy dán đoạn policy đã copy vào sau đó chọn **Save changes**
  ![policy](/images/2.prerequisite/007.png)
