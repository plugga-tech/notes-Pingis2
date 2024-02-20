let createDocumentBtn = document.getElementById('createDocumentBtn');
let writingDocument = document.getElementById('document');

createDocumentBtn.addEventListener('click', () => {
    console.log("click");
});

export default function createDocument() {
    fetch("http://localhost:3000/new_document", {
        method: "GET"
    })
    .then(res => res.text())
    .then(data => {


        let newWindow = window.open('', 'new_document');

        function writingDocument() {
            let input = document.createElement('input');
            newWindow.document.body.appendChild(input);
        }

        writingDocument();
    })
}
