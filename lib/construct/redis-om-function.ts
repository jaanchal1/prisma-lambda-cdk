import * as lambdanode from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";

export interface DatabaseConnectionProps {
  uri: string;
}

interface RedisOmFunctionProps extends lambdanode.NodejsFunctionProps {
  database: DatabaseConnectionProps;
}

export class RedisOmFunction extends lambdanode.NodejsFunction {
  constructor(scope: Construct, id: string, props: RedisOmFunctionProps) {
    super(scope, id, {
      ...props,
      environment: {
        ...props.environment,
        REDIS_URI: props.database.uri,
      },
      bundling: {
        nodeModules: ["redis-om"].concat(props.bundling?.nodeModules ?? []),
      },
    });
  }
}
