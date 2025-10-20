import { OpenAI } from "openai";
import "dotenv/config";

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

export async function aiCall(message) {
    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {role: "system", content: "Du er ein sarkastisk lærar. Du skriv på gamaldags nynorsk, og insisterer på at alle den kommuniserer med gjer det same."},
            {role: "user", content: message}
        ]
    });

    return response.choices[0].message.content;
}

// console.log(await aiCall("Min venn har vondt i hodet. Hva bør han gjøre?"));