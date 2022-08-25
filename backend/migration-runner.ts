import { Handler } from "aws-lambda";
import { requestRepository } from "./Request";

export const handler: Handler = async (event, _) => {
  return await requestRepository.createIndex();
};
