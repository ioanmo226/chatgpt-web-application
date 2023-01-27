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
    if (prompt) {
        hljs.highlightAll()
    }
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
function getGPTResult() {
    if (isGeneratingResponse) {
        return;
    }
    const prompt = promptInput.textContent;
    submitButton.classList.add("loading");

    promptInput.textContent = '';
    addResponse(true, prompt);
    const uniqueId = addResponse(false);
    const responseElement = document.getElementById(uniqueId);
    loader(responseElement);
    isGeneratingResponse = true;
    fetch(`${API_URL}/get-prompt-result?prompt=` + encodeURI(prompt))
        .then(response => response.text())
        .then(responseText => {
            document.getElementById(uniqueId).textContent = responseText.replace(/^\s+/g, '');
            hljs.highlightAll();
            responseList.scrollTop = responseList.scrollHeight;
        }).catch((err) => {
            responseElement.textContent = `${err}`;
            responseElement.style.color = 'rgb(200, 0, 0)';
        }).finally(() => {
            isGeneratingResponse = false;
            submitButton.classList.remove("loading");
            clearInterval(loadInterval);
        });
}

submitButton.addEventListener("click", () => {
    getGPTResult();
});

promptInput.focus();