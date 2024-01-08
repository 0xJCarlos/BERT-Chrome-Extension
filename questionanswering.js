import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";
import fetch from "node-fetch";
dotenv.config();

const HF_TOKEN = process.env.HF_TOKEN
const inference = new HfInference(HF_TOKEN);

const answer = await inference.questionAnswering({
    model: 'mrm8488/distill-bert-base-spanish-wwm-cased-finetuned-spa-squad2-es',
    inputs: {
      question: '¿Como me llamo?',
      context: 'Soy Juan y tengo 22 años'
    }
  })

console.log(answer);


