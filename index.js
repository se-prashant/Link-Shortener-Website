const headers = {
  'Authorization': "3ff4f4206870f812179350441a67920bbe996dd9",
  'Content-Type': 'application/json'
};

var shortenURL = ""

function handleErrors(response) {
    if (!response.ok) {
      alert("Please enter a valid URL");
    }
    return response;
}

function shortLink() {
  var inputUrl = document.querySelector("input").value;
  if (inputUrl) {
    fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          "long_url": inputUrl,
          "domain": "bit.ly"
        }),
      })
      .then(handleErrors)
      .then(response => response.json())
      .then(data => {
        shortenURL = data.link;
        displayResult()
      })
      .catch((error) => {
        console.log('Error:', error);
      });

  }

}

function displayResult() {
  document.getElementById("shortUrl").value = shortenURL;
}

function clear_(){
  document.getElementById("shortUrl").value = "";
  document.querySelector("input").value   = "";
}
const clipboard = new ClipboardJS("#copy-btn");
