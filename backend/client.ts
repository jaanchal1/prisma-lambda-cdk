import { Client } from "redis-om";

export const client = new Client();

client.open(process.env.REDIS_URI);
