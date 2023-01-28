const express = require('express');
const {Configuration, OpenAIApi} = require("openai");
const app = express();
const cors = require('cors');
require("dotenv").config();
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(cors());
app.use(express.json());
app.use('/', express.static(__dirname + '/client')); // Serves resources from client folder

app.post('/get-prompt-result', async (req, res) => {
    // Get the prompt from the request body
    const {prompt} = req.body;

    // Check if prompt is present in the request
    if (!prompt) {
        // Send a 400 status code and a message indicating that the prompt is missing
        return res.status(400).send({error: 'Prompt is missing in the request'});
    }

    try {
        // Use the OpenAI SDK to create a completion
        // with the given prompt, model and maximum tokens
        const completion = await openai.createCompletion({
            model: "text-davinci-003", // model name
            prompt, // input prompt
            max_tokens: 4000 // maximum number of tokens to generate
        });
        // Send the generated text as the response
        res.send(completion.data.choices[0].text);
    } catch (error) {
        // Log the error message from the OpenAI API
        console.error(error.response.data.error);
        // Send a 500 status code and the error message as the response
        res.status(500).send(error.response.data.error.message);
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
