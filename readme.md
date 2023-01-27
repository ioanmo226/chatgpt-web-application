# ChatGPT Web Application

A web application that allows users to interact with OpenAI's GPT-3 language model through a simple and user-friendly interface.
This app is for demo purpose to test OpenAI API and may contain issues/bugs.

## Features
- User-friendly interface for making requests to the OpenAI API
- Responses are displayed in a chat-like format
- Code Blocks are detected and displayed in a Code Viewer

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
cd server && npm install
```
3. Create a .env file in the server folder and add your OpenAI API key in the following format:
```sh
OPENAI_API_KEY=your_api_key
```
4. Start node server
```sh
node index.js
```
5. Start the client app by opening the client/index.html file or by hosting the client folder in your own server.
Be sure to set correct API_URL when you host on your own server

## Usage
- Type in the input field and press enter or click on the send button to make a request to the OpenAI API
- Use control+enter to add line breaks in the input field
- Responses are displayed in the chat-like format on top of the page
- Code Blocks are detected and displayed in the Code Viewer

## Screenshot
![Demo image](/client/assets/img/demo.png)
