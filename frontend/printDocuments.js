import saveDocument from "./saveDocument.js";
import deleteDocument from "./deleteDocument.js";

let documentList = document.getElementById('documentList');

export default function printDocuments() {
    fetch("http://localhost:3000/documents")
    .then(res => res.json())
    .then(data => {

        documentList.innerHTML = "";

        data.map(documents => {

            let div = document.createElement("div")
            div.innerText = documents.documentName;
            div.classList.add('documents');

            let openButton = document.createElement("button");
            openButton.innerText = "Öppna dokument";
            div.appendChild(openButton);

            openButton.addEventListener('click', () => {
                console.log("click");

                function openedDocument(documentName, documentContent) {
                    document.body.innerHTML = "";
                
                    let title = document.createElement('h1');
                    title.textContent = documentName;
                    document.body.appendChild(title);

                    let content = document.createElement('p');
                    content.textContent = documentContent;
                    document.body.appendChild(content);

                    let editButton = document.createElement('button');
                    editButton.textContent = "redigera dokument";
                    document.body.appendChild(editButton); 

                    editButton.addEventListener('click', () => {
                        document.body.innerHTML = "";

                        editDocument(documentName, documentContent);
                    })

                    
                };

                openedDocument(documents.documentName, documents.documentContent);

            });

            let deleteButton = document.createElement("button");
            deleteButton.innerText = "Ta bort dokument";
            div.appendChild(deleteButton);

            deleteButton.addEventListener('click', () => {
                deleteDocument(documents.documentID);
            })
            
            return div;
            
        }).forEach(element => {
            documentList.appendChild(element);
        })
    })
    
}

function editDocument(documentName, documentContent) {

    let docTitle = document.createElement('textarea');
    docTitle.classList.add('docTitle');
    docTitle.textContent = documentName;
    document.body.appendChild(docTitle);

    let textArea = document.createElement('textarea');
    textArea.classList.add('textArea');
    textArea.textContent = documentContent;
    document.body.appendChild(textArea);

    
    let saveEditedDoc = document.createElement('button');
    saveEditedDoc.textContent = "spara dokument";
    document.body.appendChild(saveEditedDoc);
 
    saveEditedDoc.addEventListener('click', () => {
        console.log("click");

        const editedDocumentTitle = docTitle.value;
        const editedDocumentContent = textArea.value;

        fetch('http://localhost:3000/editedDocument', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                docTitle: editedDocumentTitle,
                textArea: editedDocumentContent,
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log("dokument updaterad", data);
            saveDocument(editedDocumentTitle, editedDocumentContent);
        })

    })

    

}



