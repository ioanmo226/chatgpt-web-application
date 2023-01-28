const express = require('express');
const {Configuration, OpenAIApi} = require("openai");
const app = express();
const cors = require('cors');
require("dotenv").config();

app.use(cors())

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get('/get-prompt-result', async (req, res) => {
    const prompt = req.query.prompt;
    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt,
            max_tokens: 4000
        });
        res.send(completion.data.choices[0].text);
    } catch (error) {
        console.error(error.response.data.error);
        res.status(500).send(error.response.data.error.message);
    }
});

app.use('/', express.static(__dirname + '/client')); //Serves resources from public folder

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
