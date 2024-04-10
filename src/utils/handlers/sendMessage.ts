export async function sendMessage(message: string): Promise<string> {
  try {
    if (!message) {
      console.log("Message is invalid");
      throw new Error("Message is invalid");
    }

    const response = await fetch("/.netlify/functions/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    const data = await response.json();

    if ("response" in data) {
      return data.response;
    } else {
      throw new Error('Invalid response format: Missing "response" property');
    }
  } catch (error) {
    throw new Error(`Failed to send message: ${(error as Error).message}`);
  }
}
