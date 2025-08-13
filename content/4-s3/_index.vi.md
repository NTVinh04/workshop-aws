---
title : "Tải code lên S3"
date: 2025-08-11
weight : 4 
chapter : false
pre : " <b> 4. </b> "
---
Sau khi thực hiện toàn bộ các phần trên thì chỉ còn 1 bước là tải code lên bucket chứa website
1. Vào thư mục chứa code
  + cd vào frontend và nhập ```npm install```
  + Sau khi npm install xong thì nhập ```npm run build```
  ![s3](/images/4.s3/001.png)

  + Sau khi chạy xong ta sẽ có file dist đây là file code frontend đã được tối giản đi để AWS sử dụng
  ![s3.1](/images/4.s3/002.png)

  + Upload file dist lên S3
  ![s3.2](/images/4.s3/003.png)

2. Sau khi upload xong vào mục **Properties** kéo xuống **Static website hosting** copy url trang web và sử dụng
  ![s3.3](/images/4.s3/004.png)
  ![s3.4](/images/4.s3/005.png)

  {{% notice info %}}
Khi test nếu test trên cùng 1 máy thì nên test ở 2 trình duyệt khác nhau vì nếu sử dụng trên cùng 1 trình duyệt kể cả đã bật ẩn danh thì có thể bị lỗi lấy trùng connectionId
  {{% /notice %}}