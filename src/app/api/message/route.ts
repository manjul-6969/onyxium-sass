"use server";

import { NextApiRequest, NextApiResponse } from "next";
import CharacterAI from "node-characterai";

const characterAI = new CharacterAI();
let isAuthenticated = false;

async function authenticateWithToken() {
  try {
    if (!isAuthenticated) {
      await characterAI.authenticateWithToken("2f763b38ad6c26368f5b6d3c86b2089bb98acfd4");
      isAuthenticated = true;
    }
  } catch (error) {
    throw new Error("Failed to authenticate with session token: " + (error as Error).message);
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

export async function POST(req: any, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json(`Method ${req.method} Not Allowed`);
    return;
  }

  const message = await req.json();
  // console.log("log 1:", message);

  try {
    // console.log("log 2:", message);
    const characterId = "PH7dDFG7FXHnEIcTw8maMJypt142z7HLYqt6Vdz88YE";

    const chatClient = await createChatClient(characterId);

    const response = await chatClient.sendAndAwaitResponse(JSON.stringify(message), true);
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
