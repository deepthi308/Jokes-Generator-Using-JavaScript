const button = document.getElementById("button");
const joke = document.getElementById("joke");
const copy = document.getElementById("copy");

const apiKey = "J9hAG9nXJYpPv3vIYIMkzw==N4niMgE1xIPcQrzl";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key" : apiKey
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const getJoke = async () => {

try {
    
    joke.innerHTML = `<div class="dotted">
                        <li></li>
                        <li></li>
                        <li></li>
                      </div>`
    
    button.innerText = "Loading"
    const response = await fetch(apiURL, options);
    const data = await response.json();
    
    const text = data[0].joke;

    joke.innerText = text;
    button.disabled = false;
    button.innerText = "Tell me a joke"
} catch (error) {
    console.log(`Error is : ${error}`)
    joke.innerText = "An error happened, try again later"
     button.disabled = false;
    button.innerText = "Tell me a joke"
}

}

button.addEventListener("click", getJoke);

copy.addEventListener("click", () => {
    const textToBeCopied = joke.innerText;
    // console.log(textToBeCopied);
    navigator.clipboard.writeText(textToBeCopied);
    alert("Text Copied")
})

