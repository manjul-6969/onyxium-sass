import { NextApiRequest, NextApiResponse } from "next";
import CharacterAI from "node-characterai";

const characterAI = new CharacterAI();

async function authenticateWithToken() {
  try {
    await characterAI.authenticateWithToken("2f763b38ad6c26368f5b6d3c86b2089bb98acfd4");
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

export async function POST(err: Error, req: NextApiRequest, res: NextApiResponse, next: any) {
  const message = req.body;
  console.log("Received message:", message);

  try {
    const characterId = "PH7dDFG7FXHnEIcTw8maMJypt142z7HLYqt6Vdz88YE";

    const chatClient = await createChatClient(characterId);

    const response = await chatClient.sendAndAwaitResponse(message, true);
    console.log(response);
    if (response && response.text) {
      console.log("AI Response:", response.text);
      res.status(200).json({ response: response.text });
    } else {
      console.error("Invalid AI response:", response);
      res.status(500).json({ error: "Invalid AI response" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send message" });
  }
}
