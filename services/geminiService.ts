import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { COMPANY_DATA } from "../constants";

// Serialize company data for the system instruction
const SYSTEM_INSTRUCTION = `
You are an expert technical sales assistant for "Công Ty Cổ Phần Hóa Phẩm Tùng Việt" (Tung Viet Chemical).
Your goal is to assist customers by providing accurate information about chemical products, resins, and pine derivatives based STRICTLY on the provided data.

Company Context:
${JSON.stringify(COMPANY_DATA.company_info, null, 2)}

Product Catalog:
${JSON.stringify(COMPANY_DATA.products, null, 2)}

Guidelines:
1. Always be professional, helpful, and concise.
2. If a user asks about a product, recommend specific codes (e.g., "M1103", "G90") based on their needs (e.g., application, softening point).
3. If the answer is not in the data, state that you don't have that information and suggest they contact sales directly.
4. Format your responses using Markdown for readability (lists, bold text).
5. Communicate in the language the user initiates with (mostly Vietnamese).
`;

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    if (!process.env.API_KEY) {
      console.error("API_KEY is missing from environment variables.");
      throw new Error("API Key missing");
    }
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const ai = getClient();
    
    // Construct the prompt with history context manually for stateless single-turn simulation 
    // or use chat interface. using chat interface is better for context.
    
    // Convert history to format expected by Chat (if we were using stateful chat), 
    // but here we will just append the current message and use generateContent with system instruction 
    // for simplicity in this stateless service wrapper, OR use the Chat API properly.
    
    // Let's use the Chat API for better conversational context.
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result: GenerateContentResponse = await chat.sendMessage({
        message: message
    });
    
    return result.text || "Xin lỗi, tôi không thể trả lời ngay lúc này.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Xin lỗi, đã có lỗi xảy ra khi kết nối với trợ lý ảo. Vui lòng thử lại sau.";
  }
};