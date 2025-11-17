const  { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({
    apiKey : process.env.GEMINI_API_KEY
});



async function GenerateCaption(base64ImageFile){
const contents = [
  {
    inlineData: {
      mimeType: "image/jpeg",
      data: base64ImageFile,
    },
  },
  { text: "Caption this image  beautifully " },
];

const response = await ai.models.generateContent({
  model: "gemini-2.0-flash",
  contents: contents,
  config:{
    systemInstruction:`
    hey gemini please help me generating a caption for this image 
    generate only single caption 
    in beautifull language
    try to put some nuance poetry also`
  }
});
return response.text;
}

module.exports = GenerateCaption;