# ChatGPT Web Application

A web application that allows users to interact with OpenAI's GPT-3 language model through a simple and user-friendly interface.
This app is for demo purpose to test OpenAI API and may contain issues/bugs.

If you are looking for React.js version check [here](https://github.com/ioanmo226/chatgpt-react-application)

![Demo Gif](/client/assets/img/demo3.gif)

<a href="https://www.buymeacoffee.com/ioanmo226" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="51" width="217"></a>


## Features
- User-friendly interface for making requests to the OpenAI API
- Responses are displayed in a chat-like format
- Select Models (Davinci, Codex, Create Image) based on your needs
- Highlight code syntax

## Technologies Used
- For client, I haven't used frameworks as this is simple demo version.
- For server, I used express.

## Setup
### Prerequisites
- Node.js
- OpenAI API Key
### Installation
1. Clone the repository:
```sh
git clone https://github.com/ioanmo226/chatgpt-web-application
```
2. Install the dependencies:
```sh
npm install
```
3. Create a .env file in the root folder and add your OpenAI API key in the following format:
```sh
OPENAI_API_KEY=your_api_key
```
4. Start node server
```sh
node index.js
```
5. Now when you navigate to http://localhost:3001 you will see web response.

## Usage
- Type in the input field and press enter or click on the send button to make a request to the OpenAI API
- Use control+enter to add line breaks in the input field
- Responses are displayed in the chat-like format on top of the page
- Generate code, including translating natural language to code
- You can also create AI images using DALL·E models 

## Contributing

This project welcomes contributions and suggestions for improvements. If you have any ideas, please feel free to open an issue or create a pull request.

Thank you for your consideration.


