
let documentList = document.getElementById('documentList');

export default function printDocuments() {
    fetch("http://localhost:3000/documents")
    .then(res => res.json())
    .then(data => {

        console.log(data);
        documentList.innerHTML = "";

        data.map(documents => {

            let div = document.createElement("div")
            div.innerText = documents.documentName;
            div.classList.add('documents');

            let openButton = document.createElement("button");
            openButton.innerText = "Öppna dokument";
            div.appendChild(openButton);

            let deleteButton = document.createElement("button");
            deleteButton.innerText = "Ta bort dokument";
            div.appendChild(deleteButton);

            return div;
            
        }).forEach(element => {
            documentList.appendChild(element);
        })
    })
}
