import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export interface DatabaseConnectionProps {
  uri: string;
}

interface DockerRedisOmFunctionProps extends lambda.DockerImageFunctionProps {
  database: DatabaseConnectionProps;
}

export class DockerRedisOmFunction extends lambda.DockerImageFunction {
  constructor(scope: Construct, id: string, props: DockerRedisOmFunctionProps) {
    super(scope, id, {
      ...props,
      environment: {
        ...props.environment,
        REDIS_URI: props.database.uri,
      },
    });
  }
}
