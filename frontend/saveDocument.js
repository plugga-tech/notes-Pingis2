import createDocument from "./createDocument.js";
import saveInput from "./createDocument.js";
import printDocuments from "./printDocuments.js";




export default function saveDocument() {

    let savedTitle = document.querySelector('.docTitle').value;
    let savedContent = document.querySelector('.textInput').value;
    console.log(savedContent, savedTitle);

    localStorage.setItem('savedInputValue', savedTitle);
    localStorage.setItem('savedDocumentTitle', savedContent);

    fetch("http://localhost:3000/documents", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ savedTitle, savedContent })
        
    })
    .then(res => res.text())
    .then(data => {

        
        let saveDocumentBtn = document.createElement('button');
        saveDocumentBtn.textContent = "spara dokument";
        document.body.appendChild(saveDocumentBtn);

        saveDocumentBtn.addEventListener('click', () => {
            console.log("dokument sparad");
            
            documentSaved();
        });
        

    });
};



function documentSaved() {

    document.body.innerHTML = "";

    //let savedTitle = localStorage.getItem('savedInputValue');
    //let savedContent = localStorage.getItem('savedDocumentTitle');
    let savedTitle = document.querySelector('.docTitle');
    let savedContent = document.querySelector('.textInput');

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