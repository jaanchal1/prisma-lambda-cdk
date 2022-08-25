import { Entity, Schema } from "redis-om";
import { client } from "./client";

export class Request extends Entity {
  public awsRequestId: string;
  public createdAt: Date;
}

export const requestSchema = new Schema(Request, {
  awsRequestId: {
    type: "string",
  },
  createdAt: {
    type: "date",
  },
});

export const requestRepository = client.fetchRepository(requestSchema);
