+++
title = "Dọn dẹp tài nguyên  "
date = 2021
weight = 5
chapter = false
pre = "<b>5. </b>"
+++

Bây giờ là các bước cần tiến hành để xóa các tài nguyên đã tạo.

#### Xóa S3

1. Truy cập [S3](https://s3.console.aws.amazon.com/s3/home)
  + Click chọn S3 bucket đã tạo
  + Click **Empty**.
  + Điền **permanently delete**, sau đó click **Empty** để tiến hành xóa object trong bucket.
  + Click **Exit**.

2. Sau khi xóa hết object trong bucket, click **Delete**
  + Sau đó nhập tên bucket và click **Delte bucket**

#### Xóa API Gateway

Truy cập [API Gateway](https://console.aws.amazon.com/apigateway).
  + Click chọn API đã tạo
  + Click **Delete**
  + Điền **confirm** và click **Delete**

#### Xóa CloudWatch
Truy cập [CloudWatch](https://console.aws.amazon.com/cloudwatch).
  + Ở thanh bên trái chọn **Logs** sau đó chọn **Log groups**
  + Click chọn các log group được tạo ra trong lúc thực hiện
  + Click **Action** và chọn **Delete log group(s)**
  + Click **Delete**

#### Xóa Policy
Truy cập [IAM](https://console.aws.amazon.com/iamv2/).
  + Ở thanh bên trái chọn **Policies**
  + Click chọn policy được tạo ra trong lúc thực hiện
  + Click **Delete**
  + Điền tên policy và click **Delete**

#### Xóa Role
Truy cập [IAM](https://console.aws.amazon.com/iamv2/).
  + Ở thanh bên trái chọn **Roles**
  + Click chọn role được tạo ra trong lúc thực hiện
  + Click **Delete**
  + Điền tên role và click **Delete**

#### Xóa Lambda
Truy cập vào trang dịch vụ [Lambda](https://console.aws.amazon.com/lambda)
  + Ở thanh bên trái chọn **Functions**
  + Click chọn các functions được tạo ra trong lúc thực hiện
  + Click **Action** và chọn **Delete**
  + Điền **confirm** và click **Delete**

#### Xóa DynamoDB
Truy cập vào dịch vụ [DynamoDB](https://console.aws.amazon.com/dynamodb/)
  + Ở thanh bên trái chọn **Tables**
  + Click chọn các tables được tạo ra trong lúc thực hiện
  + Click **Delete**
  + Chọn **Delete all CloudWatch alarms for the 2 tables tables selected**.
  + Điền **confirm** và click **Delete**

#### Xóa 
Truy cập vào dịch vụ [Cognito](https://console.aws.amazon.com/cognito/)
  + Ở thanh bên trái chọn **User pools**
  + Click chọn các user pools được tạo ra trong lúc thực hiện
  + Click **Delete**
  + Chọn **Delete Cognito domain ap-southeast-1vhb6cgguj that you assigned** và **Deactivate deletion protection**.
  + Điền tên user pool và click **Delete**
