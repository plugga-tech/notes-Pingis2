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
    

    let title = document.createElement('h1');
    title.textContent = "Välj ett namn på ditt dokument";
    document.body.appendChild(title);

    let docTitle = document.createElement('textarea');
    docTitle.classList.add('docTitle');
    document.body.appendChild(docTitle);

    let textArea = document.createElement('textarea');
    textArea.classList.add('textInput');
    document.body.appendChild(textArea);

    docTitle.addEventListener('input', function() {
        localStorage.setItem('savedDocumentTitle', docTitle.value);
    })
    
    textArea.addEventListener('input', function() {
        localStorage.setItem('savedInputValue', textArea.value);
    })

    let savedInputValue = localStorage.getItem('savedInputValue');
    let savedDocumentTitle = localStorage.getItem('savedDocumentTitle');

    if (savedInputValue) {
        textArea.value = savedInputValue;
    }

    if (savedDocumentTitle) {
        docTitle.value = savedDocumentTitle;
    }

    saveDocument();
    
}



