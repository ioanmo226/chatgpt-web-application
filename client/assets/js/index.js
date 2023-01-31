const API_URL = 'http://localhost:3001';

const submitButton = document.getElementById("submit-button");
const promptInput = document.getElementById("prompt-input");
const responseList = document.getElementById("response-list");
let isGeneratingResponse = false;

let loadInterval = null;

promptInput.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        if (event.ctrlKey || event.shiftKey) {
            document.execCommand("insertHTML", false, "<br/><br/>");
        } else {
            getGPTResult();
        }
    }
});

function generateUniqueId() {
    // Used to generate unique IDs
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
}

function addResponse(selfFlag, prompt) {
    const uniqueId = generateUniqueId();
    const html = `
            <div class="response-container ${selfFlag ? 'my-question' : 'chatgpt-response'}">
                <img src="assets/img/${selfFlag ? 'me' : 'chatgpt'}.png" alt="avatar"/>
                <pre><code class="prompt-content" id="${uniqueId}">${prompt}</code></pre>
            </div>
        `
    responseList.insertAdjacentHTML('beforeend', html);
    responseList.scrollTop = responseList.scrollHeight;
    return uniqueId;
}

function loader(element) {
    element.textContent = ''

    loadInterval = setInterval(() => {
        // Update the text content of the loading indicator
        element.textContent += '.';

        // If the loading indicator has reached three dots, reset it
        if (element.textContent === '....') {
            element.textContent = '';
        }
    }, 300);
}

function setErrorForResponse(element, message) {
    element.innerText = message;
    element.style.color = 'rgb(200, 0, 0)';
}

// Function to get GPT result
async function getGPTResult() {
    // Get the prompt input
    const prompt = promptInput.textContent;

    // If a response is already being generated or the prompt is empty, return
    if (isGeneratingResponse || !prompt) {
        return;
    }

    // Add loading class to the submit button
    submitButton.classList.add("loading");

    // Clear the prompt input
    promptInput.textContent = '';

    // Add the prompt to the response list
    addResponse(true, prompt);

    // Get a unique ID for the response element
    const uniqueId = addResponse(false);

    // Get the response element
    const responseElement = document.getElementById(uniqueId);

    // Show the loader
    loader(responseElement);

    // Set isGeneratingResponse to true
    isGeneratingResponse = true;

    try {
        // Send a POST request to the API with the prompt in the request body
        const response = await fetch(API_URL + '/get-prompt-result', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt })
        });
        if (!response.ok) {
            setErrorForResponse(responseElement, `HTTP Error: ${await response.text()}`);
            return;
        }
        const responseText = await response.text();
        // Set the response text
        responseElement.innerText = responseText.trim();

        // Scroll to the bottom of the response list
        responseList.scrollTop = responseList.scrollHeight;
    } catch (err) {
        // If there's an error, show it in the response element
        setErrorForResponse(responseElement, `Error: ${err.message}`);
    } finally {
        // Set isGeneratingResponse to false
        isGeneratingResponse = false;

        // Remove the loading class from the submit button
        submitButton.classList.remove("loading");

        // Clear the loader interval
        clearInterval(loadInterval);
    }
}


submitButton.addEventListener("click", () => {
    getGPTResult();
});

document.addEventListener("DOMContentLoaded", function(){
    promptInput.focus();
});
