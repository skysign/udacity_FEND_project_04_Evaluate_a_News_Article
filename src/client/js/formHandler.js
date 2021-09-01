function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    Client.checkForName(formText);

    console.log("::: Form Submitted :::")

    if (false == Client.validateURL(formText)) {
        console.log(`url is not valid`);
        return;
    }

    doPost('http://localhost:8081/nlp', {url: formText})
    .then(function(res) {
        console.log(`res from nlp: ${res}`);
        console.log(`res.agreement: ${res.agreement}`);
        console.log(`res.confidence: ${res.confidence}`);
        console.log(`res.polarity: ${res.polarity}`);
        console.log(`res.subjectivity: ${res.subjectivity}`);

        document.getElementById('agreement').innerHTML = `agreement: ${res.agreement}`;
        document.getElementById("confidence").innerHTML = `confidence: ${res.confidence}`;
        document.getElementById("polarity").innerHTML = `polarity: ${res.subjectivity}`;
        document.getElementById("subjectivity").innerHTML = `subjectivity: ${res.subjectivity}`;
    })
}

const doPost = async (url = "", data = {}) => {
    console.log('doPost:', data);
    let res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    try {
        res = await res.json();
        console.log('res of doPost:', res);
        return res;
    }
    catch (error) {
       console.log('doPost error', error);
   }
};

export { handleSubmit }
