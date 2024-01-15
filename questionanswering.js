import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";
dotenv.config();

const HF_TOKEN = process.env.HF_TOKEN
const inference = new HfInference(HF_TOKEN);

async function getAnswer(question, context){
  try{
    const answer = await inference.questionAnswering({
      model: 'mrm8488/distill-bert-base-spanish-wwm-cased-finetuned-spa-squad2-es',
      inputs: {
        question: question,
        context: context
      }
    });
    return answer;
  }
  catch (error){
    console.error("Error durante inferencia: ", error);
    return null;
  }
}

export { getAnswer };


console.log(answer);


