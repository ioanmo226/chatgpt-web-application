# OpenAI Web Application

A web application that allows users to interact with OpenAI's modles through a simple and user-friendly interface.
This app is for demo purpose to test OpenAI API and may contain issues/bugs.

If you are looking for React.js version check [here](https://github.com/ioanmo226/chatgpt-react-application)

https://user-images.githubusercontent.com/77344191/223635130-afb01b51-98ee-45c6-b3b9-8c090a5c0e20.mp4

<a href="https://www.buymeacoffee.com/ioanmo226" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="51" width="217"></a>


## Features
- User-friendly interface for making requests to the OpenAI API
- Responses are displayed in a chat-like format
- Select Models (Davinci, DALL·E, Whisper) based on your needs
- Create AI Images (DALL·E)
- Audio-Text Transcribe (Whisper)
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
- Take advantage of DALL·E models to generate AI images.
- Utilize Whisper Model to transcribe audio into text.

## Contributing

This project welcomes contributions and suggestions for improvements. If you have any ideas, please feel free to open an issue or create a pull request.

Thank you for your consideration.


