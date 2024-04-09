import { NextApiRequest, NextApiResponse } from "next";
import { CharacterAI } from "node-characterai";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const characterAI = new CharacterAI();
    await characterAI.authenticateWithToken(process.env.ACCESS_TOKEN as string);
    const chatClient = await characterAI.createOrContinueChat(process.env.CHARACTER_ID as string);

    return res.status(200).json({ message: "Connected to CharacterAI" });
  } catch (error) {
    console.error("Error connecting to CharacterAI:", error);
    return res.status(500).json({ error: "Failed to connect to CharacterAI" });
  }
}
