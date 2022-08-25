#!/usr/bin/env node
import "source-map-support/register";
import { App } from "aws-cdk-lib";
import { RedisOmLambdaCdkStack } from "../lib/stack/redis-om-lambda-cdk-stack";
import { config } from "dotenv";

config();

const redisURI = process.env.REDIS_URI;

if (!redisURI) {
  throw new Error("REDIS_URI is required!");
}

const app = new App();
new RedisOmLambdaCdkStack(app, "RedisOmLambdaCdkStack", {
  redisURI,
});
