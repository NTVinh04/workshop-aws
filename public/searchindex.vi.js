var relearn_searchindex = [
  {
    "breadcrumb": "Session Management",
    "content": "Tổng quan Đây là workshop về webchat serverless realtime trên AWS sử dụng S3 để lưu trữ website, lưu trữ hình ảnh do người dùng tải lên qua tin nhắn hoặc thay đổi avatar của người dùng. Cognito để xử lý việc đăng ký, đăng nhập và xác minh cho người dùng người dùng. Tiếp theo sẽ xây dựng api bằng Lambda và API Gateway để quản lý dữ liệu và sự tương tác của người dùng lên hệ thống. Sau đó sử dụng DynamoDB để lưu trữ dữ liệu do Lambda gửi lên trên hệ thống\nLink Test dự án\nNội dung Giới thiệu Các bước chuẩn bị Tạo kết nối đến máy chủ EC2 Quản lý session logs Port Forwarding Dọn dẹp tài nguyên",
    "description": "Tổng quan Đây là workshop về webchat serverless realtime trên AWS sử dụng S3 để lưu trữ website, lưu trữ hình ảnh do người dùng tải lên qua tin nhắn hoặc thay đổi avatar của người dùng. Cognito để xử lý việc đăng ký, đăng nhập và xác minh cho người dùng người dùng. Tiếp theo sẽ xây dựng api bằng Lambda và API Gateway để quản lý dữ liệu và sự tương tác của người dùng lên hệ thống. Sau đó sử dụng DynamoDB để lưu trữ dữ liệu do Lambda gửi lên trên hệ thống",
    "tags": [],
    "title": "Giới thiệu",
    "uri": "/workshop-aws/vi/1-introduce/index.html"
  },
  {
    "breadcrumb": "Session Management \u003e Tạo Lambda và API Gateway \u003e Tạo Lambda cho Web chat",
    "content": "Truy cập vào trang dịch vụ Lambda. Click chọn Create function. Ở mục Function name nhập getMessage Runtime chọn Node.js 22.x hoặc Node.js 18.x đều được Architecture chọn x86_64 Ở mục Permissions mở mục Change default execution role chọn Use an existing role ở phần Execution role và chọn role chatapp-role đã tạo lúc trước Click create function để tạo function Lambda Sau khi tạo xong Lambda getMessage thì sẽ được chuyển đến trang function getMessage Sau đó kéo xuống Code source và vào thư mục backend/lamda và copy code của file getMessage.mjs và dán vào Code source +Click vào deloy để lưu code Ghi chú\rThực hiện tương tự cho các Lambda sau : createUser, getUser, me, updateAvatar\nĐối với Lambda upAvatar do có sử dụng các thư viện bên ngoài mà Lambda không có sẵn nên không thể dán trực tiếp mà phải tải thư viện về từ máy sau đó zip file lại và deloy lên Lambda Tạo function Lambda upAvatar tương tự các Lambda trên Ở phần code source chọn Upload from chọn .zip file sau đó tìm upAvatar.zip trong thư mục upAvatar và chọn upload Thông tin\rĐể hạn chế bị lỗi thì nên xóa file upAvatar.zip, node_modules,package-lock.json và package.json sau đó cd vào thư mục upAvatar trên VScode và dùng đoạn npm sau để tải và up lên Lambda npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner uuid\n4. Đối với Lambda sendMessage thì vẫn tạo nhưng không đưa code lên vội vì sẽ cần sửa code để web chat có thể realtime Thông tin\rVì trong sendMessage có đoạn code sau endpoint: ‘https://5gm2fis56a.execute-api.ap-southeast-1.amazonaws.com/production' chỉ có thể sửa sau khi deloy websocket",
    "description": "Truy cập vào trang dịch vụ Lambda. Click chọn Create function. Ở mục Function name nhập getMessage Runtime chọn Node.js 22.x hoặc Node.js 18.x đều được Architecture chọn x86_64 Ở mục Permissions mở mục Change default execution role chọn Use an existing role ở phần Execution role và chọn role chatapp-role đã tạo lúc trước Click create function để tạo function Lambda Sau khi tạo xong Lambda getMessage thì sẽ được chuyển đến trang function getMessage Sau đó kéo xuống Code source và vào thư mục backend/lamda và copy code của file getMessage.mjs và dán vào Code source +Click vào deloy để lưu code Ghi chú\rThực hiện tương tự cho các Lambda sau : createUser, getUser, me, updateAvatar",
    "tags": [],
    "title": "Lambda REST API",
    "uri": "/workshop-aws/vi/3-lambda-api/3.1-lambda/3.1.1-restapi/index.html"
  },
  {
    "breadcrumb": "",
    "content": "AWS Serverless realtime webchat Tổng quan Đây là workshop về webchat serverless realtime trên AWS sử dụng S3 để lưu trữ website, lưu trữ hình ảnh do người dùng tải lên qua tin nhắn hoặc thay đổi avatar của người dùng. Cognito để xử lý việc đăng ký, đăng nhập và xác minh cho người dùng người dùng. Tiếp theo sẽ xây dựng api bằng Lambda và API Gateway để quản lý dữ liệu và sự tương tác của người dùng lên hệ thống. Sau đó sử dụng DynamoDB để lưu trữ dữ liệu do Lambda gửi lên trên hệ thống\nNội dung Giới thiệu Các bước chuẩn bị Tạo kết nối đến máy chủ EC2 Quản lý session logs Port Forwarding Dọn dẹp tài nguyên",
    "description": "AWS Serverless realtime webchat Tổng quan Đây là workshop về webchat serverless realtime trên AWS sử dụng S3 để lưu trữ website, lưu trữ hình ảnh do người dùng tải lên qua tin nhắn hoặc thay đổi avatar của người dùng. Cognito để xử lý việc đăng ký, đăng nhập và xác minh cho người dùng người dùng. Tiếp theo sẽ xây dựng api bằng Lambda và API Gateway để quản lý dữ liệu và sự tương tác của người dùng lên hệ thống. Sau đó sử dụng DynamoDB để lưu trữ dữ liệu do Lambda gửi lên trên hệ thống",
    "tags": [],
    "title": "Session Management",
    "uri": "/workshop-aws/vi/index.html"
  },
  {
    "breadcrumb": "Session Management \u003e Tạo Lambda và API Gateway",
    "content": "Ở đoạn này chúng ta sẽ tạo ra 9 Lambda cần thiết cho web chat hoạt động\nNội dung Tạo Lambda cho REST API Tạo Lambda cho websocket",
    "description": "Ở đoạn này chúng ta sẽ tạo ra 9 Lambda cần thiết cho web chat hoạt động\nNội dung Tạo Lambda cho REST API Tạo Lambda cho websocket",
    "tags": [],
    "title": "Tạo Lambda cho Web chat",
    "uri": "/workshop-aws/vi/3-lambda-api/3.1-lambda/index.html"
  },
  {
    "breadcrumb": "Session Management \u003e Các bước chuẩn bị",
    "content": "Trong bước này sẽ cần tạo 2 bucket trong S3 với 1 bucket dùng để lưu trữ và chạy website và 1 bucket để chứa avatar, hình ảnh từ tin nhắn người dùng gửi cho nhau\nCode sử dụng cho dự án Nội dung Tạo S3 chứa website Tạo S3 chứa hình ảnh",
    "description": "Trong bước này sẽ cần tạo 2 bucket trong S3 với 1 bucket dùng để lưu trữ và chạy website và 1 bucket để chứa avatar, hình ảnh từ tin nhắn người dùng gửi cho nhau\nCode sử dụng cho dự án Nội dung Tạo S3 chứa website Tạo S3 chứa hình ảnh",
    "tags": [],
    "title": "Tạo S3",
    "uri": "/workshop-aws/vi/2-prerequiste/2.1-creates3/index.html"
  },
  {
    "breadcrumb": "Session Management \u003e Các bước chuẩn bị \u003e Tạo S3",
    "content": "Tạo S3 chứa website Truy cập dịch vụ S3 Click Create bucket. Tại trang Create bucket. Tại mục Bucket name điền chatapp-web. Tại mục Block Public Access settings for this bucket bỏ chọn Block all public access và chọn I acknowledge that the current settings might result in this bucket and the objects within becoming public. để cho tất cả mọi người có thể truy cập vào website Click Create bucket. Sau đó vào S3 chatapp-web đã tạo và chọn Properties kéo xuống tới phần Static website hosting chọn edit Tại mục Static website hosting chọn Enable sẽ mở ra các mục khác Tại mục Hosting type chọn Host a static website Tại mục Index document và Error document nhập index.html và chọn Save changes để s3 lấy index.html làm trang mặc định cho trang web Tiếp theo vào Permissions ở phần Bucket policy chọn edit Vào file code đã tải xuống tìm file bucketPolicyWebchat.json ở file backend/s3 và copy Tại phần Policy dán đoạn policy đã copy vào sau đó chọn Save changes Thông tin\rSửa link S3 trong file json trên nếu đặt tên khác workshop",
    "description": "Tạo S3 chứa website Truy cập dịch vụ S3 Click Create bucket. Tại trang Create bucket. Tại mục Bucket name điền chatapp-web. Tại mục Block Public Access settings for this bucket bỏ chọn Block all public access và chọn I acknowledge that the current settings might result in this bucket and the objects within becoming public. để cho tất cả mọi người có thể truy cập vào website Click Create bucket. Sau đó vào S3 chatapp-web đã tạo và chọn Properties kéo xuống tới phần Static website hosting chọn edit Tại mục Static website hosting chọn Enable sẽ mở ra các mục khác Tại mục Hosting type chọn Host a static website Tại mục Index document và Error document nhập index.html và chọn Save changes để s3 lấy index.html làm trang mặc định cho trang web Tiếp theo vào Permissions ở phần Bucket policy chọn edit Vào file code đã tải xuống tìm file bucketPolicyWebchat.json ở file backend/s3 và copy Tại phần Policy dán đoạn policy đã copy vào sau đó chọn Save changes Thông tin\rSửa link S3 trong file json trên nếu đặt tên khác workshop",
    "tags": [],
    "title": "Tạo S3 chứa website",
    "uri": "/workshop-aws/vi/2-prerequiste/2.1-creates3/2.1.1-creates3web/index.html"
  },
  {
    "breadcrumb": "Session Management \u003e Tạo Lambda và API Gateway \u003e Tạo API Gateway",
    "content": "Truy cập giao diện dịch vụ API Gateway Click create an API Ở Websocket API chọn Build Ở trường API name nhập chatapp\nỞ trường Route selection expression nhập request.body.action sau đó chọn Next Chọn Add $connect route và Add $disconnect route để tạo route Ở trường Integration type của connect và disconnect chọn Lambda sau đó ở Lambda function thì chọn function tương ứng sau đó nhấn Next Ở Add stages, Stage name nhập production sau đó nhấn Next để kiểm tra lại và nhấn Create để tạo API Nhấn Deloy API Sau khi deloy copy phần Websocket url Thông tin\rchỉ lấy phần giữa của url bỏ đi phần wss:// và /production như sau n5rwnf1sm9.execute-api.ap-southeast-1.amazonaws.com\nSau đó vào file code tìm file README.md copy url websocket vào phần search và dán đoạn url websocket vừa tạo ở phần Replace và chọn Replace All Sau đó quay lại Lambda và deloy code sendMessage vừa sửa",
    "description": "Truy cập giao diện dịch vụ API Gateway Click create an API Ở Websocket API chọn Build Ở trường API name nhập chatapp\nỞ trường Route selection expression nhập request.body.action sau đó chọn Next Chọn Add $connect route và Add $disconnect route để tạo route",
    "tags": [],
    "title": "Tạo Websocket",
    "uri": "/workshop-aws/vi/3-lambda-api/3.2-api-gateway/3.2.1-websocket/index.html"
  },
  {
    "breadcrumb": "Session Management",
    "content": "Nội dung Chuẩn bị S3 cho webchat Tạo IAM Role Tạo DynamoDB Tạo cognito",
    "description": "Nội dung Chuẩn bị S3 cho webchat Tạo IAM Role Tạo DynamoDB Tạo cognito",
    "tags": [],
    "title": "Các bước chuẩn bị",
    "uri": "/workshop-aws/vi/2-prerequiste/index.html"
  },
  {
    "breadcrumb": "Session Management \u003e Tạo Lambda và API Gateway \u003e Tạo Lambda cho Web chat",
    "content": "Truy cập vào trang dịch vụ Lambda. Click chọn Create function. Ở mục Function name nhập connect Runtime chọn Node.js 22.x hoặc Node.js 18.x đều được Architecture chọn x86_64 Ở mục Permissions mở mục Change default execution role chọn Use an existing role ở phần Execution role và chọn role chatapp-role đã tạo lúc trước Click create function để tạo function Lambda Sau khi tạo xong Lambda connect thì sẽ được chuyển đến trang function connect Sau đó vào thư mục backend/socket tìm thư mục connect và cd sau đó dán đoạn npm vào để install thư viện npm install jsonwebtoken jwk-to-pem aws-sdk Sau khi làm xong thì zip thư mục connect lại Thông tin\rKhi zip thì đừng zip thư mục ở bên ngoài mà nên zip toàn bộ file trong thư mục vì nếu zip thư mục bên ngoài thì khi deloy lên lambda sẽ bị lỗi vì không dò được file index.js khiên code không hoạt động\nSau đó upload file zip lên lambda Quay lại trang function và click create function để tạo function disconnect Sau đó vào thư mục backend/socket tìm file disconnect.js sau đó copy code và dán vào code source",
    "description": "Truy cập vào trang dịch vụ Lambda. Click chọn Create function. Ở mục Function name nhập connect Runtime chọn Node.js 22.x hoặc Node.js 18.x đều được Architecture chọn x86_64 Ở mục Permissions mở mục Change default execution role chọn Use an existing role ở phần Execution role và chọn role chatapp-role đã tạo lúc trước Click create function để tạo function Lambda Sau khi tạo xong Lambda connect thì sẽ được chuyển đến trang function connect Sau đó vào thư mục backend/socket tìm thư mục connect và cd sau đó dán đoạn npm vào để install thư viện npm install jsonwebtoken jwk-to-pem aws-sdk Sau khi làm xong thì zip thư mục connect lại Thông tin\rKhi zip thì đừng zip thư mục ở bên ngoài mà nên zip toàn bộ file trong thư mục vì nếu zip thư mục bên ngoài thì khi deloy lên lambda sẽ bị lỗi vì không dò được file index.js khiên code không hoạt động",
    "tags": [],
    "title": "Lambda Websocket",
    "uri": "/workshop-aws/vi/3-lambda-api/3.1-lambda/3.1.2-websocket/index.html"
  },
  {
    "breadcrumb": "Session Management \u003e Tạo Lambda và API Gateway",
    "content": "Sau khi tạo xong các Lambda cho REST API và websocket thì tiếp theo là tạo các API tương tự để dùng cho Lambda\nNội dung: Tạo websocket Tạo REST API",
    "description": "Sau khi tạo xong các Lambda cho REST API và websocket thì tiếp theo là tạo các API tương tự để dùng cho Lambda\nNội dung: Tạo websocket Tạo REST API",
    "tags": [],
    "title": "Tạo API Gateway",
    "uri": "/workshop-aws/vi/3-lambda-api/3.2-api-gateway/index.html"
  },
  {
    "breadcrumb": "Session Management \u003e Các bước chuẩn bị",
    "content": "Tạo IAM Role Trong bước này sẽ tiến hành tạo IAM Role dành cho các chức năng của lambda. Trong IAM Role này sẽ được gán cho các policy với chức năng cho phép Lambda tạo và ghi chú lại log trên CloudWatch để kiểm tra nếu có lỗi trong quá trình làm. Tiếp theo là chức năng cho phép Lambda đọc và ghi dữ liệu vào 2 bảng DynamoDB sẽ tạo sắp tới là User và Messages. Kế tiếp là cho phép Lambda upload file và trong S3. Và cuối cùng là cho phép Lambda gửi tin nhắn hoặc đóng kết nối Websocket thông qua API Gateway\nTruy cập vào dịch vụ IAM\nỞ thanh điều hướng bên trái, click Policies.\nClick Create Policy.\nỞ phần Policy editor chọn JSON\nVào file code đã tải vào thư mục backend/lambda mở file policyLambda.json copy đoạn json đó và dán vào phần Policy editor sau đó chọn next.\nTrong ô Policy name, điền tên cho policy là chatapp và kiểm tra lại phần Permissions defined in this policy xem đã đủ policy chưa. Click Create policy để tạo policy Ở thanh điều hướng bên trái, click Roles. Click Create role Ở mục Service or use case của Use case chọn Lambda Click Next Chọn Policy đã tạo ở trên và ấn Next Ở Role name nhập chatapp-role sau đó kiểm tra lại và ấn Create role",
    "description": "Tạo IAM Role Trong bước này sẽ tiến hành tạo IAM Role dành cho các chức năng của lambda. Trong IAM Role này sẽ được gán cho các policy với chức năng cho phép Lambda tạo và ghi chú lại log trên CloudWatch để kiểm tra nếu có lỗi trong quá trình làm. Tiếp theo là chức năng cho phép Lambda đọc và ghi dữ liệu vào 2 bảng DynamoDB sẽ tạo sắp tới là User và Messages. Kế tiếp là cho phép Lambda upload file và trong S3. Và cuối cùng là cho phép Lambda gửi tin nhắn hoặc đóng kết nối Websocket thông qua API Gateway",
    "tags": [],
    "title": "Tạo IAM Role",
    "uri": "/workshop-aws/vi/2-prerequiste/2.2-createiamrole/index.html"
  },
  {
    "breadcrumb": "Session Management \u003e Tạo Lambda và API Gateway \u003e Tạo API Gateway",
    "content": "Truy cập giao diện dịch vụ API Gateway Click create an API Ở REST API chọn Build Ở trường API name nhập chatapp-RestAPI sau đó chọn Create API Ở mục bên trái chọn Authorizers Click Create authorizer Ở trường Authorizer name nhập cognito Trường Authorizer type chọn cognito Trong Cognito user pool chọn user pool đã tạo Trong trường Token source nhập Authorization sau đó chọn Create authorizer Ở mục bên trái chọn Resources Chọn / ở dưới Create resource sau đó click vào Create resource Ở trường Resource name nhập user sau click Create resource Click vào create method ở /user vừa tạo Ở Method type chọn GET Bật Lambda proxy integration Ở Lambda function chọn function getUser sau đó click Create method Sau đó method GET chọn mục Method request chọn edit Ở Authorization chọn cognito đã tạo sau đó nhấn Save Click Enable CORS Chọn hết tất cả các ô và ấn Save Lặp lại các bước ở phần 3 để tạo các Rest API sau: send-message với Method POST, Lambda function sendMessage create-user với Method POST, Lambda function createUser me với Method GET, Lambda function me Từ resource /me tạo thêm 1 method PUT với function updateAvatar Sau khi tạo xong từ resource /me tạo thêm 1 resource /avatar Từ resource /avatar tạo method POST với Lambda upAvatar sau đó Enable CORS Với avatar thì không cần thêm Authorization Ghi chú\rLý do ở /me lại sử dụng method PUT còn /avatar lại sử dụng method POST là vì POST dùng để tạo cái chưa có còn PUT là để thay thế thứ đã có và /avatar là dùng để tạo url s3 để lưu trữ avatar do người dùng tạo lên còn PUT của /me là thay thế url vừa được tạo ra do /avatar vào trong table User\nTừ resource / chọn Create resource và tạo resource message Từ resource /message chọn Create resource và tạo resource {conversationId} Sau đó tạo method GET với Lambda function là getMessage Sau khi làm xong ấn Deloy API Ở phần stage chọn * New Stage * Stage name nhập dev và chọn deloy Tương tự như websocket copy phần giữa của invoke URL: 92ll2qcxai.execute-api.ap-southeast-1.amazonaws.com Sau đó thay thế ở trong file code",
    "description": "Truy cập giao diện dịch vụ API Gateway Click create an API Ở REST API chọn Build Ở trường API name nhập chatapp-RestAPI sau đó chọn Create API Ở mục bên trái chọn Authorizers Click Create authorizer Ở trường Authorizer name nhập cognito Trường Authorizer type chọn cognito Trong Cognito user pool chọn user pool đã tạo Trong trường Token source nhập Authorization sau đó chọn Create authorizer Ở mục bên trái chọn Resources Chọn / ở dưới Create resource sau đó click vào Create resource Ở trường Resource name nhập user sau click Create resource Click vào create method ở /user vừa tạo Ở Method type chọn GET Bật Lambda proxy integration Ở Lambda function chọn function getUser sau đó click Create method Sau đó method GET chọn mục Method request chọn edit Ở Authorization chọn cognito đã tạo sau đó nhấn Save Click Enable CORS Chọn hết tất cả các ô và ấn Save Lặp lại các bước ở phần 3 để tạo các Rest API sau: send-message với Method POST, Lambda function sendMessage create-user với Method POST, Lambda function createUser me với Method GET, Lambda function me Từ resource /me tạo thêm 1 method PUT với function updateAvatar Sau khi tạo xong từ resource /me tạo thêm 1 resource /avatar Từ resource /avatar tạo method POST với Lambda upAvatar sau đó Enable CORS Với avatar thì không cần thêm Authorization Ghi chú\rLý do ở /me lại sử dụng method PUT còn /avatar lại sử dụng method POST là vì POST dùng để tạo cái chưa có còn PUT là để thay thế thứ đã có và /avatar là dùng để tạo url s3 để lưu trữ avatar do người dùng tạo lên còn PUT của /me là thay thế url vừa được tạo ra do /avatar vào trong table User",
    "tags": [],
    "title": "Tạo REST API",
    "uri": "/workshop-aws/vi/3-lambda-api/3.2-api-gateway/3.2.2-restapi/index.html"
  },
  {
    "breadcrumb": "Session Management \u003e Các bước chuẩn bị \u003e Tạo S3",
    "content": "Tạo S3 chứa hình ảnh Truy cập dịch vụ S3 Click Create bucket. Tại trang Create bucket. Tại mục Bucket name điền chatapp-web. Tại mục Block Public Access settings for this bucket bỏ chọn Block all public access và chọn I acknowledge that the current settings might result in this bucket and the objects within becoming public. Click Create bucket. Tiếp theo vào Permissions ở phần Bucket policy chọn edit Vào file code đã tải xuống tìm file bucketPolicyPic.json ở file backend/s3 và copy Tại phần Policy dán đoạn json đã copy vào sau đó chọn Save changes Thông tin\rSửa link S3 trong file json bucket và CORS trên nếu đặt tên khác workshop\nTiếp theo kéo xuống phần Cross-origin resource sharing (CORS) trong Permissions chọn edit Vào file code đã tải xuống tìm file corsS3Pic.json ở file backend/s3 và copy Tại phần Cross-origin resource sharing (CORS) dán đoạn json đã copy vào sau đó chọn Save changes Sau đó vào file frontend/public và kéo avatar.png vào trong bucket chatapp-pic Thông tin\rNếu đặt tên bucket khác với workshop thì nên lấy link avatar.png trong bucket vừa tạo sau đó trong code thư mục frontend/constants file avatars3.js thay đổi link để tránh gặp lỗi trong hệ thống",
    "description": "Tạo S3 chứa hình ảnh Truy cập dịch vụ S3 Click Create bucket. Tại trang Create bucket. Tại mục Bucket name điền chatapp-web. Tại mục Block Public Access settings for this bucket bỏ chọn Block all public access và chọn I acknowledge that the current settings might result in this bucket and the objects within becoming public. Click Create bucket. Tiếp theo vào Permissions ở phần Bucket policy chọn edit Vào file code đã tải xuống tìm file bucketPolicyPic.json ở file backend/s3 và copy Tại phần Policy dán đoạn json đã copy vào sau đó chọn Save changes Thông tin\rSửa link S3 trong file json bucket và CORS trên nếu đặt tên khác workshop",
    "tags": [],
    "title": "Tạo S3 chứa hình ảnh",
    "uri": "/workshop-aws/vi/2-prerequiste/2.1-creates3/2.1.2-creates3pic/index.html"
  },
  {
    "breadcrumb": "Session Management \u003e Các bước chuẩn bị",
    "content": "Tạo Table User và Messages Trong bước này sẽ tiến hành tạo 2 table là User và Messages để lưu trữ thông tin người dùng lấy từ cognito và để lưu trữ tin nhắn do người dùng gửi lên\nTruy cập vào dịch vụ DynamoDB\nỞ trang DynamoDB click Create table.\nỞ mục Table name nhập User Ở mục Partition Key nhập userId Sau đó click Create Table Tiếp theo là table Messages Ở mục Table name nhập Messages Ở mục Partition Key nhập conversationId Ở mục Sort Key nhập timestamp Sau đó click Create Table Sau khi tạo xong chờ cho tới khi Status của 2 table đều là Active là hoàn thành.",
    "description": "Tạo Table User và Messages Trong bước này sẽ tiến hành tạo 2 table là User và Messages để lưu trữ thông tin người dùng lấy từ cognito và để lưu trữ tin nhắn do người dùng gửi lên\nTruy cập vào dịch vụ DynamoDB\nỞ trang DynamoDB click Create table.\nỞ mục Table name nhập User Ở mục Partition Key nhập userId Sau đó click Create Table Tiếp theo là table Messages Ở mục Table name nhập Messages Ở mục Partition Key nhập conversationId Ở mục Sort Key nhập timestamp Sau đó click Create Table Sau khi tạo xong chờ cho tới khi Status của 2 table đều là Active là hoàn thành.",
    "tags": [],
    "title": "Tạo DynamoDB",
    "uri": "/workshop-aws/vi/2-prerequiste/2.3-createdb/index.html"
  },
  {
    "breadcrumb": "Session Management",
    "content": "Trong bước này, sẽ thực hiện tạo Lambda và API Gateway cho hệ thống.\nNội dung 3.1. Tạo Lambda 3.2. Tạo API Gateway",
    "description": "Trong bước này, sẽ thực hiện tạo Lambda và API Gateway cho hệ thống.\nNội dung 3.1. Tạo Lambda 3.2. Tạo API Gateway",
    "tags": [],
    "title": "Tạo Lambda và API Gateway",
    "uri": "/workshop-aws/vi/3-lambda-api/index.html"
  },
  {
    "breadcrumb": "Session Management",
    "content": "Sau khi thực hiện toàn bộ các phần trên thì chỉ còn 1 bước là tải code lên bucket chứa website\nVào thư mục chứa code cd vào frontend và nhập npm install\nSau khi npm install xong thì nhập npm run build Sau khi chạy xong ta sẽ có file dist đây là file code frontend đã được tối giản đi để AWS sử dụng Upload file dist lên S3 Sau khi upload xong vào mục Properties kéo xuống Static website hosting copy url trang web và sử dụng Thông tin\rKhi test nếu test trên cùng 1 máy thì nên test ở 2 trình duyệt khác nhau vì nếu sử dụng trên cùng 1 trình duyệt kể cả đã bật ẩn danh thì có thể bị lỗi lấy trùng connectionId",
    "description": "Sau khi thực hiện toàn bộ các phần trên thì chỉ còn 1 bước là tải code lên bucket chứa website\nVào thư mục chứa code cd vào frontend và nhập npm install\nSau khi npm install xong thì nhập npm run build Sau khi chạy xong ta sẽ có file dist đây là file code frontend đã được tối giản đi để AWS sử dụng",
    "tags": [],
    "title": "Tải code lên S3",
    "uri": "/workshop-aws/vi/4-s3/index.html"
  },
  {
    "breadcrumb": "Session Management \u003e Các bước chuẩn bị",
    "content": "Tạo User Pools cho Webchat Trong bước này sẽ tiến hành tạo User pools để quản lý việc đăng ký, đăng nhập và xác minh cho người dùng\nTruy cập vào dịch vụ Cognito Ở giao diện của cognito click Get started for free in less than five minutes hoặc ở thanh điều hướng bên trái click User pools, sau đó chọn Create user pool.\nỞ mục Application type chọn Single-page application (SPA) vì SPA hỗ trợ tốt nhất cho các web sử dụng url thay đổi dựa trên hoạt động của người dùng giống như React. Ở phần Configure options mục Options for sign-in identifiers chọn email Ở mục Required attributes for sign-up chọn email và name để khi người dùng đăng ký bắt buộc phải nhập các thông tin đó mà không được bỏ qua Sau đó click Create user directory để tạo User pool Sau khi tạo xong quay lại giao diện User pools và chọn User pools vừa tạo Copy User pool ID ở giao diện User pool.\nSau đó vào phần search của file code và dán vào Replace, tìm file README.md và tìm dòng userpoolId copy và dán vào Search và nhấn Replace All để thay thế userpooldId ở trong code Ở thanh điều hướng bên trái, click App clients và chọn chatapp. Copy ClientID của chatapp sau đó thực hiện tương tự thay ClientID vừa tạo từ user pools cho ClientID của code Sau khi tạo xong 2 bucket trong S3, 2 table trong DynamoDB và đã tạo xong Userpool trong Cognito thì bước tiếp theo là tạo Lambda và API Gateway cho các Lambda",
    "description": "Tạo User Pools cho Webchat Trong bước này sẽ tiến hành tạo User pools để quản lý việc đăng ký, đăng nhập và xác minh cho người dùng\nTruy cập vào dịch vụ Cognito Ở giao diện của cognito click Get started for free in less than five minutes hoặc ở thanh điều hướng bên trái click User pools, sau đó chọn Create user pool.\nỞ mục Application type chọn Single-page application (SPA) vì SPA hỗ trợ tốt nhất cho các web sử dụng url thay đổi dựa trên hoạt động của người dùng giống như React. Ở phần Configure options mục Options for sign-in identifiers chọn email Ở mục Required attributes for sign-up chọn email và name để khi người dùng đăng ký bắt buộc phải nhập các thông tin đó mà không được bỏ qua Sau đó click Create user directory để tạo User pool Sau khi tạo xong quay lại giao diện User pools và chọn User pools vừa tạo Copy User pool ID ở giao diện User pool.\nSau đó vào phần search của file code và dán vào Replace, tìm file README.md và tìm dòng userpoolId copy và dán vào Search và nhấn Replace All để thay thế userpooldId ở trong code Ở thanh điều hướng bên trái, click App clients và chọn chatapp. Copy ClientID của chatapp sau đó thực hiện tương tự thay ClientID vừa tạo từ user pools cho ClientID của code Sau khi tạo xong 2 bucket trong S3, 2 table trong DynamoDB và đã tạo xong Userpool trong Cognito thì bước tiếp theo là tạo Lambda và API Gateway cho các Lambda",
    "tags": [],
    "title": "Tạo Cognito",
    "uri": "/workshop-aws/vi/2-prerequiste/2.4-createcog/index.html"
  },
  {
    "breadcrumb": "Session Management",
    "content": "Bây giờ là các bước cần tiến hành để xóa các tài nguyên đã tạo.\nXóa S3 Truy cập S3 Click chọn S3 bucket đã tạo Click Empty. Điền permanently delete, sau đó click Empty để tiến hành xóa object trong bucket. Click Exit. Sau khi xóa hết object trong bucket, click Delete Sau đó nhập tên bucket và click Delte bucket Xóa API Gateway Truy cập API Gateway.\nClick chọn API đã tạo Click Delete Điền confirm và click Delete Xóa CloudWatch Truy cập CloudWatch.\nỞ thanh bên trái chọn Logs sau đó chọn Log groups Click chọn các log group được tạo ra trong lúc thực hiện Click Action và chọn Delete log group(s) Click Delete Xóa Policy Truy cập IAM.\nỞ thanh bên trái chọn Policies Click chọn policy được tạo ra trong lúc thực hiện Click Delete Điền tên policy và click Delete Xóa Role Truy cập IAM.\nỞ thanh bên trái chọn Roles Click chọn role được tạo ra trong lúc thực hiện Click Delete Điền tên role và click Delete Xóa Lambda Truy cập vào trang dịch vụ Lambda\nỞ thanh bên trái chọn Functions Click chọn các functions được tạo ra trong lúc thực hiện Click Action và chọn Delete Điền confirm và click Delete Xóa DynamoDB Truy cập vào dịch vụ DynamoDB\nỞ thanh bên trái chọn Tables Click chọn các tables được tạo ra trong lúc thực hiện Click Delete Chọn Delete all CloudWatch alarms for the 2 tables tables selected. Điền confirm và click Delete Xóa Truy cập vào dịch vụ Cognito\nỞ thanh bên trái chọn User pools Click chọn các user pools được tạo ra trong lúc thực hiện Click Delete Chọn Delete Cognito domain ap-southeast-1vhb6cgguj that you assigned và Deactivate deletion protection. Điền tên user pool và click Delete",
    "description": "Bây giờ là các bước cần tiến hành để xóa các tài nguyên đã tạo.\nXóa S3 Truy cập S3 Click chọn S3 bucket đã tạo Click Empty. Điền permanently delete, sau đó click Empty để tiến hành xóa object trong bucket. Click Exit. Sau khi xóa hết object trong bucket, click Delete Sau đó nhập tên bucket và click Delte bucket Xóa API Gateway Truy cập API Gateway.\nClick chọn API đã tạo Click Delete Điền confirm và click Delete Xóa CloudWatch Truy cập CloudWatch.",
    "tags": [],
    "title": "Dọn dẹp tài nguyên  ",
    "uri": "/workshop-aws/vi/5-cleanup/index.html"
  },
  {
    "breadcrumb": "Session Management",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Thể loại",
    "uri": "/workshop-aws/vi/categories/index.html"
  },
  {
    "breadcrumb": "Session Management",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Thẻ",
    "uri": "/workshop-aws/vi/tags/index.html"
  }
]
