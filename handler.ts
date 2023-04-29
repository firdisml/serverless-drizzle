import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { users } from "./db/scheme";
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

export const hello = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {

  const pool = new Pool({
    connectionString: '',
  });

const db = drizzle(pool);

const allUsers = await db.select().from(users);
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: allUsers,
      },
      null,
      2
    ),
  };
};
