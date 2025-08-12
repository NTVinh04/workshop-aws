---
title : "Tạo S3 chứa hình ảnh"
date: 2025-08-11
weight : 2 
chapter : false
pre : " <b> 2.1.2 </b> "
---
### Tạo S3 chứa hình ảnh
1. Truy cập dịch vụ [S3](https://console.aws.amazon.com/s3/home)
  + Click **Create bucket**.

![bucket](/images/2.prerequisite/001.png)

2. Tại trang **Create bucket**.
  + Tại mục **Bucket name** điền **chatapp-web**.
  ![bucket](/images/2.prerequisite/008.png)
  + Tại mục **Block Public Access settings for this bucket** bỏ chọn **Block all public access** và chọn **I acknowledge that the current settings might result in this bucket and the objects within becoming public.**
  ![bucket](/images/2.prerequisite/003.png)
  + Click **Create bucket**.

3. Tiếp theo vào **Permissions** ở phần **Bucket policy** chọn edit
  ![policy](/images/2.prerequisite/006.png)
  + Vào file code đã tải xuống tìm file **bucketPolicyPic.json** ở file **backend/s3** và copy
  + Tại phần Policy dán đoạn json đã copy vào sau đó chọn **Save changes**
  ![policy](/images/2.prerequisite/009.png)

4. Tiếp theo kéo xuống phần **Cross-origin resource sharing (CORS)** trong **Permissions** chọn edit
  ![cors](/images/2.prerequisite/010.png)
  + Vào file code đã tải xuống tìm file **corsS3Pic.json** ở file **backend/s3** và copy
  + Tại phần Cross-origin resource sharing (CORS) dán đoạn json đã copy vào sau đó chọn **Save changes**
  ![cors](/images/2.prerequisite/011.png)

5. Sau đó vào file **frontend/public** và kéo **avatar.png** vào trong bucket **chatapp-pic**
  ![avatar](/images/2.prerequisite/012.png)