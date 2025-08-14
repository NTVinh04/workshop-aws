---
title : "Tạo CloudFront"
date : 2025-08-11
weight : 5
chapter : false
pre : "<b>5. </b>"
---
Sau khi đã upload Webchat lên S3 và sử dụng thì khi những tin nhắn quá nhiều hoặc hình ảnh có dung lượng lớn thì sẽ tải lên mất rất nhiều thời gian để hiện nên sử dụng CloudFront để tăng tốc website giúp website mượt hơn

1. Truy cập [CloudFront](https://console.aws.amazon.com/cloudfront)
  + Click **Create a CloudFront distribution**.
  ![cloudfront](/images/5.cloud/001.png)
  + Ở trường **Distributions** nhập ```vchat ``` để giúp nhận biết được vai trò của **CloudFront** này để làm gì
  + Có thể nhập thêm ở trường **Description** để chi tiết hơn
  + Click **Next**.
  ![cloudfront1](/images/5.cloud/002.png)
  + **Origin Type** chọn **Amazon S3**
  + Ở trường **S3 origin** nhập url của **chatapp** từ S3 hoặc chọn **Browse S3** và tìm bucket chứa website
  ![cloudfront](/images/5.cloud/004.png)
  + Sau đó chọn **Use website endpoint** sau đó ấn **Next**
  ![cloudfront](/images/5.cloud/005.png)
  ![cloudfront](/images/5.cloud/006.png)
  + Vì là dự án cá nhân và không có dữ liệu quan trọng nên có thể chọn **Do not enable security protections** và ấn **Next**
  ![cloudfront](/images/5.cloud/007.png)
  + Sau khi xong chờ khoảng 5p để **Last modified** hiện thời gian là đã deloy xong
  ![cloudfront](/images/5.cloud/008.png)
  ![cloudfront](/images/5.cloud/009.png)

2. Sau khi đã deloy xong thì copy **Distribution domain name** và test
  ![web](/images/5.cloud/010.png)
  + Đây là url của **S3** thì có thể thấy là ở time sẽ tốn 169ms để xuất giao diện
  ![web1](/images/5.cloud/011.png)
  + Đây là url của **CloudFront** cung cấp thì time chỉ cần 9ms để xuất được giao diện
  ![web2](/images/5.cloud/012.png)