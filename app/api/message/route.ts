// "use server";

import { NextApiRequest, NextApiResponse } from "next";

let CharacterAI: any;
CharacterAI = require("node_characterai");

export const config = {
  runtime: "edge",
};

const characterAI = new CharacterAI();
// characterAI.puppeteerPath = process.env.PUPPETEER_EXECUTABLE_PATH;

let isAuthenticated = false;

async function authenticateWithToken() {
  try {
    if (!isAuthenticated) {
      await characterAI.authenticateWithToken(process.env.ACCESS_TOKEN);
      isAuthenticated = true;
    }
  } catch (error) {
    throw new Error(
      "Failed to authenticate with session token: " + (error as Error).message,
    );
  }
}

// Function to create a chat client
async function createChatClient(characterId: string) {
  try {
    await authenticateWithToken();

    return await characterAI.createOrContinueChat(characterId);
  } catch (error) {
    console.error("Error creating chat client:", error);
    throw new Error("Failed to create chat client");
  }
}

export async function POST(req: Request, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json(`Method ${req.method} Not Allowed`);
    return;
  }

  const message = await req.json();
  // console.log("log 1:", message);

  try {
    console.log("log 2:", message);
    const characterId = process.env.CHARACTER_ID || "";

    const chatClient = await createChatClient(characterId);

    const response = await chatClient.sendAndAwaitResponse(
      JSON.stringify(message),
      true,
    );
    // console.log(response);
    if (response && response.text) {
      // console.log("AI Response:", response.text);
      return Response.json({ response: response.text });
    } else {
      // console.error("Invalid AI response:", response);
      return Response.json({ error: "Invalid AI response" });
    }
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to send message" });
  }
}
