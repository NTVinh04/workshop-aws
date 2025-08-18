---
title : "Giới thiệu"
date: 2025-08-11
weight : 1 
chapter : false
pre : " <b> 1. </b> "
---

### Tổng quan

 Đây là workshop về webchat serverless realtime trên AWS sử dụng **S3** để lưu trữ website, lưu trữ hình ảnh do người dùng tải lên qua tin nhắn hoặc thay đổi avatar của người dùng. **Cognito** để xử lý việc đăng ký, đăng nhập và xác minh cho người dùng người dùng.
 Tiếp theo sẽ xây dựng api bằng **Lambda** và **API Gateway** để quản lý dữ liệu và sự tương tác của người dùng lên hệ thống. Sau đó sử dụng **DynamoDB** để lưu trữ dữ liệu do **Lambda** gửi lên trên hệ thống

  [Link Test dự án S3](http://chatapp-web.s3-website-ap-southeast-1.amazonaws.com/)
  [Link Test dự án CloudFront](https://d1comvci1i8tqc.cloudfront.net/)
![AWS](/images/aws.png) 
### Nội dung

 1. [Giới thiệu](1-introduce/)
 2. [Các bước chuẩn bị](2-Prerequiste/)
 3. [Tạo Lambda và API Gateway](3-Lambda-API/)
 4. [Tải code lên S3](4-s3/)
 5. [Dùng CloudFront để tối ưu Web](5-CloudFront)
 6. [Dọn dẹp tài nguyên](6-cleanup/)