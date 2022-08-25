import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Application } from "../construct/application";
import { Construct } from "constructs";

export interface RedisOmLambdaCdkStackProps extends cdk.StackProps {
  redisURI: string;
}

export class RedisOmLambdaCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: RedisOmLambdaCdkStackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, `Vpc`);

    const application = new Application(this, `Application`, {
      vpc,
      database: {
        uri: props.redisURI,
      },
    });
  }
}
