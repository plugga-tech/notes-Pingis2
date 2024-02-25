import printDocuments from "./printDocuments.js";
import saveDocument from "./saveDocument.js";


export default function createDocument() {
    fetch("http://localhost:3000/documents", {
        method: "GET"
    })
    .then(res => res.json())
    .then(data => {

        writingDocument();
        
    });
};

function writingDocument() {

    document.body.innerHTML = "";

    localStorage.removeItem('savedInputValue');
    localStorage.removeItem('savedDocumentTitle');

    let savedTitle = document.getElementById('docTitle');
    let savedContent = document.getElementById('textArea');

    //let savedTitle = document.querySelector('.docTitle');
    //let savedContent = document.querySelector('.textInput');

    let title = document.createElement('h1');
    title.textContent = "Välj ett namn på ditt dokument";
    document.body.appendChild(title);

    let docTitle = document.createElement('textarea');
    docTitle.classList.add('docTitle');
    docTitle.id = "docTitle";
    document.body.appendChild(docTitle);

    let textArea = document.createElement('textarea');
    textArea.classList.add('textArea');
    textArea.id = "textArea";
    document.body.appendChild(textArea);
    console.log(savedTitle, savedTitle);


    docTitle.addEventListener('input', function() {
        localStorage.setItem('savedDocumentTitle', docTitle.value);
    })

    
    textArea.addEventListener('input', function() {
        localStorage.setItem('savedInputValue', textArea.value);
    })
    

    let savedInputValue = localStorage.getItem('savedInputValue');
    let savedDocumentTitle = localStorage.getItem('savedDocumentTitle');

    /*
    if (savedInputValue) {
        textArea.value = savedInputValue;
    }

    if (savedDocumentTitle) {
        docTitle.value = savedDocumentTitle;
    }
    */

    let saveDocumentBtn = document.createElement('button');
        saveDocumentBtn.textContent = "spara dokument";
        document.body.appendChild(saveDocumentBtn);

    saveDocumentBtn.addEventListener('click', () => {
        console.log("dokument sparad");
        saveDocument(docTitle, textArea);
    })

    //saveDocument();
    console.log(savedTitle, savedContent);

}




