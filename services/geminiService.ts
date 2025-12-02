import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { AppData, Language } from "../types";

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
  history: { role: 'user' | 'model'; text: string }[],
  currentData: AppData,
  language: Language
): Promise<string> => {
  try {
    const ai = getClient();
    
    const SYSTEM_INSTRUCTION = `
You are an expert technical sales assistant for "Tung Viet Chemical Joint Stock Company".
Your goal is to assist customers by providing accurate information about chemical products, resins, and pine derivatives based STRICTLY on the provided data.

Current Language: ${language === 'vi' ? 'Vietnamese' : 'English'} (Please respond primarily in ${language === 'vi' ? 'Vietnamese' : 'English'}).

Company Context:
${JSON.stringify(currentData.company_info, null, 2)}

Product Catalog:
${JSON.stringify(currentData.products, null, 2)}

Guidelines:
1. Always be professional, helpful, and concise.
2. If a user asks about a product, recommend specific codes (e.g., "M1103", "G90") based on their needs.
3. If the answer is not in the data, state that you don't have that information and suggest they contact sales directly.
4. Format your responses using Markdown for readability (lists, bold text).
`;

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
    
    return result.text || (language === 'vi' ? "Xin lỗi, tôi không thể trả lời ngay lúc này." : "Sorry, I cannot respond at the moment.");

  } catch (error) {
    console.error("Gemini API Error:", error);
    return language === 'vi' 
      ? "Xin lỗi, đã có lỗi xảy ra khi kết nối với trợ lý ảo. Vui lòng thử lại sau."
      : "Sorry, an error occurred while connecting to the AI assistant. Please try again later.";
  }
};