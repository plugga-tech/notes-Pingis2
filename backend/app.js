var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql2');
const cors = require('cors');
const connection = require("./lib/conn")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get("/documents", (req, res) => {

    
    connection.connect((err) => {
        if (err) console.log("err", err);

        let query = "SELECT * FROM documents";

        connection.query(query, (err, data) => {
            if (err) console.log("err", err);

            res.json(data);
        })

    })
})


app.post('/savedDocuments', (req, res) => {

    let documentName = req.body.docTitle;
    let documentContent = req.body.textArea;
    console.log(documentName, documentContent);
    //let documentContent = req.body.docContent;

    connection.connect((err) => {
        if (err) console.log("err", err);

        let query = "INSERT into documents (documentName, documentContent) VALUES (?, ?)";
        let values = [documentName, documentContent];
        

        console.log(documentName, documentContent);
        

        //let query = "INSERT into documents (documentName) VALUES (?)";
        //let values = [documentName];

        connection.query(query, values, (err, data) => {
            if(err) console.log("err", err);

            console.log("documents", query);
            res.json({message: "Dokument sparad"});
        });
    });
});

app.put('/editedDocument/:documentID', (req, res) => {

    let documentID = req.params.documentID;
    let documentName = req.body.docTitle;
    let documentContent = req.body.textArea;
    console.log(documentName, documentContent, documentID);
    //let documentContent = req.body.docContent;

    connection.connect((err) => {
        if (err) console.log("err", err);

        let query = "UPDATE documents SET documentName = ?, documentContent = ? WHERE documentID = ?";
        //let query = "UPDATE documents SET documentContent = ? WHERE documentName = ?";
        let values = [documentContent, documentName, documentID];
        console.log(values);

        //let query = "INSERT into documents (documentName) VALUES (?)";
        //let values = [documentName];

        connection.query(query, values, (err, data) => {
            if(err) console.log("err", err);
            console.log(values);

            console.log("documents", query);
            res.json({message: "Dokument sparad"});
        });
    });
});

app.delete("/documents/:documentID", (req, res) => {

    let documentID = req.params.documentID;

    connection.connect((err) => {
        if (err) console.log("err", err);

        let query = "DELETE FROM documents WHERE documentID = ?";
        let values = [documentID];

        connection.query(query, values, (err, data) => {
            if (err) console.log("err", err);

            console.log("documents", data);
            res.json({message: "dokument raderad"});
        });
    });
});


module.exports = app;
