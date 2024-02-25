import printDocuments from "./printDocuments.js";

export default function deleteDocument(documentID) {
    console.log("deleted", documentID);

    fetch("http://localhost:3000/documents/" + documentID, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log("raderad", data);
        printDocuments();
    })
}