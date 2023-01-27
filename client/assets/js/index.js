const API_URL = 'http://localhost:3001';

const submitButton = document.getElementById("submit-button");
const promptInput = document.getElementById("prompt-input");
const responseList = document.getElementById("response-list");
let isGeneratingResponse = false;

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

function addResponse(selfFlag, prompt) {
    const html = `
            <div class="response-container ${selfFlag ? 'my-question' : 'chatgpt-response'}">
                <img src="assets/img/${selfFlag ? 'me' : 'chatgpt'}.png" alt="avatar"/>
                <pre><code class="prompt-content">${prompt}</code></pre>
            </div>
        `
    responseList.insertAdjacentHTML('beforeend', html);
    hljs.highlightAll()
}

function getGPTResult() {
    if (isGeneratingResponse) {
        return;
    }
    const prompt = promptInput.textContent;
    submitButton.classList.add("loading");

    promptInput.textContent = '';
    addResponse(true, prompt);
    isGeneratingResponse = true;
    fetch(`${API_URL}/get-prompt-result?prompt=` + encodeURI(prompt))
        .then(response => response.text())
        .then(responseText => {
            addResponse(false, responseText);
        }).catch((err) => {
        alert(err);
    }).finally(() => {
        isGeneratingResponse = false;
        submitButton.classList.remove("loading");
    });
}

submitButton.addEventListener("click", () => {
    getGPTResult();
});

promptInput.focus();