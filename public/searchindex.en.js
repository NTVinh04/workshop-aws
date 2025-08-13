var relearn_searchindex = [
  {
    "breadcrumb": "Session Management \u003e Connect to EC2 servers",
    "content": "Go to EC2 service management console. Click on Public Linux Instance. Click Actions. Click Security. Click Modify IAM role. At the Modify IAM role page. Click to select SSM-Role. Click Save. Note\rYou will need to wait about 10 minutes before performing the next step. This time our EC2 instance will automatically register with the Session Manager.\nGo to the AWS Systems Manager service management console Drag the left menu slider down. Click Session Manager. Click Start Session. Then select Public Linux Instance and click Start session to access the instance. Terminal will appear on the browser. Testing with the command sudo tcpdump -nn port 22 and sudo tcpdump we will see no SSH traffic but only HTTPS traffic. Note\rAbove, we have created a connection to the public instance without opening SSH port 22, for better security, avoiding any attack to the SSH port.\nOne disadvantage of the above method is that we have to open the Security Group outbound at port 443 to the internet. Since it’s a public instance, it probably won’t be a problem, but if you want extra security, you can block port 443 to the internet and still use the Session Manager. We will go through this in the private instance section below.\nYou can click terminate to end the currently connected session before proceeding to the next step.",
    "description": "Go to EC2 service management console. Click on Public Linux Instance. Click Actions. Click Security. Click Modify IAM role. At the Modify IAM role page. Click to select SSM-Role. Click Save. Note\rYou will need to wait about 10 minutes before performing the next step. This time our EC2 instance will automatically register with the Session Manager.",
    "tags": [],
    "title": "Connect to Public Instance",
    "uri": "/workshop-aws/3-lambda-api/3.1-lambda/index.html"
  },
  {
    "breadcrumb": "Session Management \u003e Connect to EC2 servers \u003e Connect to Private instance",
    "content": "Enable DNS hostnames on VPC. To create VPC Endpoint we will need to enable DNS hostnames feature on VPC. Go to VPC service management console\nClick Your VPCs.\nSelect Lab VPC.\nClick Actions.\nClick Edit DNS hostnames.\nClick Endpoint, then click Create Endpoint.\nAt the Edit DNS hostnames page. Click to select Enable. Click Save changes.",
    "description": "Enable DNS hostnames on VPC. To create VPC Endpoint we will need to enable DNS hostnames feature on VPC. Go to VPC service management console\nClick Your VPCs.\nSelect Lab VPC.\nClick Actions.\nClick Edit DNS hostnames.\nClick Endpoint, then click Create Endpoint.\nAt the Edit DNS hostnames page. Click to select Enable. Click Save changes.",
    "tags": [],
    "title": "Enable DNS hostnames",
    "uri": "/workshop-aws/3-lambda-api/3.2-api-gateway/3.2.2-restapi/index.html"
  },
  {
    "breadcrumb": "Session Management",
    "content": "Session Manager is a function within the AWS System Manager service, SSM provides verifiable and secure version management without opening incoming ports, without Bastion Host or SSH key management. Session Manager also makes it easy to comply with corporate policies that require controlled access to instances, strict security practices, and fully auditable logs with instance access details, while still providing end-users with one-click cross-platform access to your managed instances.\nBy using Session Manager, you get the following advantages that traditional methods do not have:\nNo need to open port 22 for SSH protocol, so it is more secure. Can be configured so that the connection does not need to go outside the internet, so it is more secure. No need to manage the server’s private key to connect to SSH. Centralized management of users using AWS IAM. Access to the server easily and simply with one click. Faster access time than traditional methods like SSH Support many different operating systems such as Linux, Windows, MacOS Log the connection sessions and commands executed while connecting to the server. With the above advantages, you can use Session Manager instead of using Bastion host technique to save us time and money when managing Bastion server.",
    "description": "Session Manager is a function within the AWS System Manager service, SSM provides verifiable and secure version management without opening incoming ports, without Bastion Host or SSH key management. Session Manager also makes it easy to comply with corporate policies that require controlled access to instances, strict security practices, and fully auditable logs with instance access details, while still providing end-users with one-click cross-platform access to your managed instances.\nBy using Session Manager, you get the following advantages that traditional methods do not have:",
    "tags": [],
    "title": "Introduction",
    "uri": "/workshop-aws/1-introduce/index.html"
  },
  {
    "breadcrumb": "Session Management \u003e Preparation",
    "content": "In this step, we will need to create a VPC with 2 public / private subnets. Then create 1 EC2 Instance Linux located in the public subnet, 1 EC2 Instance Windows located in the private subnet.\nThe architecture overview after you complete this step will be as follows:\nTo learn how to create EC2 instances and VPCs with public/private subnets, you can refer to the lab:\nAbout Amazon EC2 Works with Amazon VPC",
    "description": "In this step, we will need to create a VPC with 2 public / private subnets. Then create 1 EC2 Instance Linux located in the public subnet, 1 EC2 Instance Windows located in the private subnet.\nThe architecture overview after you complete this step will be as follows:\nTo learn how to create EC2 instances and VPCs with public/private subnets, you can refer to the lab:",
    "tags": [],
    "title": "Preparing VPC and EC2",
    "uri": "/workshop-aws/2-prerequiste/2.1-creates3/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Work with Amazon System Manager - Session Manager Overall In this lab, you’ll learn the basics and practice of Amazon System Manager - Session Manager . Perform creating public and private instance connections.\nContent Introduction Preparation Connect to EC2 instance Manage session logs Port Forwarding Clean up resources",
    "description": "Work with Amazon System Manager - Session Manager Overall In this lab, you’ll learn the basics and practice of Amazon System Manager - Session Manager . Perform creating public and private instance connections.\nContent Introduction Preparation Connect to EC2 instance Manage session logs Port Forwarding Clean up resources",
    "tags": [],
    "title": "Session Management",
    "uri": "/workshop-aws/index.html"
  },
  {
    "breadcrumb": "Session Management \u003e Connect to EC2 servers",
    "content": "For Windows instance located in private subnet, there is no public IP, no internet gateway so it cannot go out internet.\nWith this type of instance, the traditional way is to use Bastion host technique which is expensive and laborious, but here we will use Session Manager with this type.\nBasically, the private instance still has to open the TCP 443 port to System Manager, but we don’t want to allow connection go out to the internet, but only in its VPC, to enhance our security posture.\nTo do that, we have to include the System Manager endpoint in the VPC, that is, using the VPC interface endpoint:\nVPC interface endpoint is attached to the subnet, so this method can be done not only with private subnet but also with public subnet, meaning that with public subnet, you can completely prohibit TCP 443 go out to the internet.\nContent: Enable DNS hostnames Create VPC Endpoint Connect Private Instance",
    "description": "For Windows instance located in private subnet, there is no public IP, no internet gateway so it cannot go out internet.\nWith this type of instance, the traditional way is to use Bastion host technique which is expensive and laborious, but here we will use Session Manager with this type.\nBasically, the private instance still has to open the TCP 443 port to System Manager, but we don’t want to allow connection go out to the internet, but only in its VPC, to enhance our security posture.\nTo do that, we have to include the System Manager endpoint in the VPC, that is, using the VPC interface endpoint:",
    "tags": [],
    "title": "Connect to Private instance",
    "uri": "/workshop-aws/3-lambda-api/3.2-api-gateway/index.html"
  },
  {
    "breadcrumb": "Session Management \u003e Preparation",
    "content": "Create IAM Role In this step, we will proceed to create IAM Role. In this IAM Role, the policy AmazonSSMManagedInstanceCore will be assigned, this is the policy that allows the EC2 server to communicate with the Session Manager.\nGo to IAM service administration interface In the left navigation bar, click Roles. Click Create role. Click AWS service and click EC2. Click Next: Permissions. In the Search box, enter AmazonSSMManagedInstanceCore and press Enter to search for this policy. Click the policy AmazonSSMManagedInstanceCore. Click Next: Tags. Click Next: Review. Name the Role SSM-Role in Role Name Click Create Role . Next, we will make the connection to the EC2 servers we created with Session Manager.",
    "description": "Create IAM Role In this step, we will proceed to create IAM Role. In this IAM Role, the policy AmazonSSMManagedInstanceCore will be assigned, this is the policy that allows the EC2 server to communicate with the Session Manager.\nGo to IAM service administration interface In the left navigation bar, click Roles. Click Create role.",
    "tags": [],
    "title": "Create IAM Role",
    "uri": "/workshop-aws/2-prerequiste/2.2-createiamrole/index.html"
  },
  {
    "breadcrumb": "Session Management \u003e Connect to EC2 servers \u003e Connect to Private instance",
    "content": "Create VPC Endpoint SSM We will create 3 interface endpoints required by the Session Manager:\nInterface endpoints: com.amazonaws.region.ssm com.amazonaws.region.ec2messages com.amazonaws.region.ssmmessages You can refer to more here\nContent: Create Endpoint ssm Create Endpoint ssmmessages Create Endpoint ec2messages",
    "description": "Create VPC Endpoint SSM We will create 3 interface endpoints required by the Session Manager:\nInterface endpoints: com.amazonaws.region.ssm com.amazonaws.region.ec2messages com.amazonaws.region.ssmmessages You can refer to more here\nContent: Create Endpoint ssm Create Endpoint ssmmessages Create Endpoint ec2messages",
    "tags": [],
    "title": "Create VPC Endpoint",
    "uri": "/workshop-aws/3-lambda-api/3.2-api-gateway/3.2.1-websocket/index.html"
  },
  {
    "breadcrumb": "Session Management",
    "content": "Info\rYou need to create 1 Linux instance on the public subnet and 1 Window instance on the private subnet to perform this lab.\nTo learn how to create EC2 instances and VPCs with public/private subnets, you can refer to the lab:\nAbout Amazon EC2 Works with Amazon VPC In order to use System Manager to manage our window instances in particular and our instances in general on AWS, we need to give permission to our instances to be able to work with System Manager. In this preparation, we will also proceed to create an IAM Role to grant permissions to instances that can work with System Manager.\nContent Prepare VPC and EC2 Create IAM Role",
    "description": "Info\rYou need to create 1 Linux instance on the public subnet and 1 Window instance on the private subnet to perform this lab.\nTo learn how to create EC2 instances and VPCs with public/private subnets, you can refer to the lab:\nAbout Amazon EC2 Works with Amazon VPC In order to use System Manager to manage our window instances in particular and our instances in general on AWS, we need to give permission to our instances to be able to work with System Manager. In this preparation, we will also proceed to create an IAM Role to grant permissions to instances that can work with System Manager.",
    "tags": [],
    "title": "Preparation ",
    "uri": "/workshop-aws/2-prerequiste/index.html"
  },
  {
    "breadcrumb": "Session Management",
    "content": "In this step, we will connect to our EC2 servers, located in both the public and private subnets.\nContent 3.1. Connect to EC2 Public Server 3.2. Cconnect to EC2 Private Server",
    "description": "In this step, we will connect to our EC2 servers, located in both the public and private subnets.\nContent 3.1. Connect to EC2 Public Server 3.2. Cconnect to EC2 Private Server",
    "tags": [],
    "title": "Connect to EC2 servers",
    "uri": "/workshop-aws/3-lambda-api/index.html"
  },
  {
    "breadcrumb": "Session Management",
    "content": "With Session Manager, we can view the history of connections to instances through Session history. However, we have not seen the details of the commands used in a session.\nIn this section, we will proceed to create an S3 bucket and configure the session logs feature to see the details of the commands used in the session.\nContent: Update IAM Role Create S3 Bucket Create S3 Gateway endpoint Configure Session logs",
    "description": "With Session Manager, we can view the history of connections to instances through Session history. However, we have not seen the details of the commands used in a session.\nIn this section, we will proceed to create an S3 bucket and configure the session logs feature to see the details of the commands used in the session.",
    "tags": [],
    "title": "Manage session logs",
    "uri": "/workshop-aws/4-s3/index.html"
  },
  {
    "breadcrumb": "Session Management",
    "content": "We will take the following steps to delete the resources we created in this exercise.\nDelete EC2 instance Go to EC2 service management console\nClick Instances. Select both Public Linux Instance and Private Windows Instance instances. Click Instance state. Click Terminate instance, then click Terminate to confirm. Go to IAM service management console\nClick Roles. In the search box, enter SSM. Click to select SSM-Role. Click Delete, then enter the role name SSM-Role and click Delete to delete the role. Click Users. Click on user Portfwd. Click Delete, then enter the user name Portfwd and click Delete to delete the user. Delete S3 bucket Access System Manager - Session Manager service management console.\nClick the Preferences tab. Click Edit. Scroll down. In the section S3 logging. Uncheck Enable to disable logging. Scroll down. Click Save. Go to S3 service management console\nClick on the S3 bucket we created for this lab. (Example: lab-fcj-bucket-0001 ) Click Empty. Enter permanently delete, then click Empty to proceed to delete the object in the bucket. Click Exit. After deleting all objects in the bucket, click Delete\nEnter the name of the S3 bucket, then click Delete bucket to proceed with deleting the S3 bucket. Delete VPC Endpoints Go to VPC service management console Click Endpoints. Select the 4 endpoints we created for the lab including SSM, SSMMESSAGES, EC2MESSAGES, S3GW. Click Actions. Click Delete VPC endpoints. In the confirm box, enter delete.\nClick Delete to proceed with deleting endpoints. Click the refresh icon, check that all endpoints have been deleted before proceeding to the next step.\nDelete VPC Go to VPC service management console\nClick Your VPCs. Click on Lab VPC. Click Actions. Click Delete VPC. In the confirm box, enter delete to confirm, click Delete to delete Lab VPC and related resources.",
    "description": "We will take the following steps to delete the resources we created in this exercise.\nDelete EC2 instance Go to EC2 service management console\nClick Instances. Select both Public Linux Instance and Private Windows Instance instances. Click Instance state. Click Terminate instance, then click Terminate to confirm. Go to IAM service management console\nClick Roles. In the search box, enter SSM. Click to select SSM-Role. Click Delete, then enter the role name SSM-Role and click Delete to delete the role.",
    "tags": [],
    "title": "Clean up resources",
    "uri": "/workshop-aws/5-cleanup/index.html"
  },
  {
    "breadcrumb": "Session Management",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/workshop-aws/categories/index.html"
  },
  {
    "breadcrumb": "Session Management",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/workshop-aws/tags/index.html"
  }
]
