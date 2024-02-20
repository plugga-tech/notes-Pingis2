let createDocumentBtn = document.getElementById('createDocumentBtn');
let writingDocument = document.getElementById('writingDocument');

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
            input.setAttribute('class', 'textInput');
            input.style.width = "100%";
            input.style.height = "500px";
            newWindow.document.body.appendChild(input);

            let savedInputValue = localStorage.getItem('savedInputValue');
            if (savedInputValue) {
                input.value = savedInputValue;
            }

            input.addEventListener('input', function() {
                localStorage.setItem
            })
        }
        
        writingDocument();
    })
}

createDocument();