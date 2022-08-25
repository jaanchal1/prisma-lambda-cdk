import { Handler } from "aws-lambda";
import { requestRepository } from "./Request";

export const handler: Handler = async (event, context) => {
  console.log(event);
  console.log(context);
  const command: string = event.command ?? "create";

  switch (command) {
    case "create":
      return await requestRepository.createAndSave({
        awsRequestId: context.awsRequestId,
        createdAt: new Date(),
      });
    default:
    case "get":
      return await requestRepository.search().all();
  }
};
