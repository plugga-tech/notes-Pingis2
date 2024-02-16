let documentList = document.getElementById('documentList');

export default function printDocuments() {
    fetch("http://localhost:3000/documents")
    .then(res => res.json())
    .then(data => {
        console.log("documents", data);

        documentList.innerHTML = "";

        data.map(documents => {
            let div = document.createElement("div")
            div.innerText = documents.documentName;

            documentList.appendChild(div);
        })
    })
}