import OpenAI from "openai";
import {openAI_key} from "../utils/constant"
const openai=new OpenAI({
    apiKey:openAI_key,
    dangerouslyAllowBrowser:true
})
export default openai;