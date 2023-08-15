const axios = require('axios');
const express = require('express');
const funcaxios = express.Router();
const url = 'http://localhost:5000/';
const url1 = 'http://localhost:5000/isbn/';
const url2 = 'http://localhost:5000/author/';
const url3 = 'http://localhost:5000/title/';

let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {resolve(connectToURL(url))},6000)
})

async function connectToURL(url){
    const outcome = await axios.get(url);
    var listOfWork = outcome.data.books;
    return listOfWork;
}
  
funcaxios.get('/axios',async function (req, res) {
    //Write your code here
    const result = "";
    myPromise.then((result) => {
        return res.status(200).json({message: result});
    }).catch((error) => {
        return res.status(500).json({message: error});
    })
});

async function connectToURL1(url1, isbn){
    const outcome = await axios.get(url1 + isbn);
    const listOfWork = outcome.data;
    return listOfWork;
}

var getBookByIsbn = function (isbn) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {resolve(connectToURL1(url1, isbn))},6000)
    });
  };

funcaxios.get('/axios/isbn/:isbn',async function (req, res) {
    //Write your code here
    const result = "";
    const isbn = req.params.isbn;
    getBookByIsbn(isbn).then((result) => {
        return res.status(200).json(result);
    }).catch((error) => {
        return res.status(500).json({message: error});
    })
});

async function connectToURL2(url2, author){
    const outcome = await axios.get(url2 + author);
    const listOfWork = outcome.data.books;
    return listOfWork;
}

var getBookByAuthor = function (author) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {resolve(connectToURL1(url2, author))},6000)
    });
  };

funcaxios.get('/axios/author/:author',async function (req, res) {
    //Write your code here
    const result = "";
    const author = req.params.author;
    getBookByAuthor(author).then((result) => {
        return res.status(200).json(result);
    }).catch((error) => {
        return res.status(500).json({message: error});
    })
});

async function connectToURL3(url3, title){
    const outcome = await axios.get(url3 + title);
    const listOfWork = outcome.data;
    return listOfWork;
}

var getBookByTitle = function (title) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {resolve(connectToURL1(url3, title))},6000)
    });
  };

funcaxios.get('/axios/title/:title',async function (req, res) {
    //Write your code here
    const result = "";
    const title = req.params.title;
    getBookByTitle(title).then((result) => {
        return res.status(200).json(result);
    }).catch((error) => {
        return res.status(500).json({message: error});
    })
});

module.exports.general = funcaxios;