import createDocument from "./createDocument.js";
import saveInput from "./createDocument.js";
import printDocuments from "./printDocuments.js";




export default function saveDocument() {

    //let savedTitle = document.getElementById('docTitle').value;
    //let savedContent = document.getElementById('textArea').value;

    let savedTitle = document.querySelector('.docTitle').value;
    let savedContent = document.querySelector('.textArea').value;

    //let savedTitle = document.querySelector('.docTitle').value;
    //let savedContent = document.querySelector('.textArea').value;
    console.log(savedContent, savedTitle);

    //let titleValue = savedTitle.value;
    //let contentValue = savedContent.value;

    /*
    localStorage.setItem('savedInputValue', titleValue);
    localStorage.setItem('savedDocumentTitle', contentValue);
    console.log(titleValue, contentValue);
    */
    fetch("http://localhost:3000/savedDocuments", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ docTitle: savedTitle, textArea: savedContent })
        
    })
    .then(res => res.json()) 
    .then(data => {
        console.log("sparad", data);
        documentSaved();
        
    })
    .catch(error => {
        console.error("error under fetch", error);
    }) 
};



function documentSaved() {
    
    
    //let savedTitle = localStorage.getItem('savedInputValue');
    //let savedContent = localStorage.getItem('savedDocumentTitle');

    
    let savedTitle = document.querySelector('.docTitle').value;
    let savedContent = document.querySelector('.textArea').value;
    
    document.body.innerHTML = "";

    let savedDocMessage = document.createElement('h1');
    savedDocMessage.textContent = "Ditt dokument är nu sparad!";
    document.body.appendChild(savedDocMessage);

    let makeNewDocButton = document.createElement('button');
    makeNewDocButton.textContent = "Skapa ett nytt dokument";
    makeNewDocButton.classList.add("newDocButton");
    document.body.appendChild(makeNewDocButton);

    let backToStartButton = document.createElement('button');
    backToStartButton.textContent = "Gå tillbaka till alla dokument";
    document.body.appendChild(backToStartButton);

    
    makeNewDocButton.addEventListener('click', () => {
        createDocument();
    });

    backToStartButton.addEventListener('click', () => {
        printDocuments();
        window.location.href = 'index.html';
        
    });

    console.log(savedTitle.value, savedContent.value);
}



/*
export default saveDocumentBtn.addEventListener('click', () => {
    console.log('click');

    let saveDoc = {
        documents: savedDoc
    }

    fetch("http://localhost:3000/documents", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(saveDoc)
    })
    .then(res => res.json())
    .then(data => {
        console.log("spara dokument", data);
    })
})
*/