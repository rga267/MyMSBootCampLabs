console.log("It's ALive!");

var Player = require('./jasmine_examples/Player');
var Song = require('./jasmine_examples/Song');
var GoogleBook = require('./dist/GoogleBook')
var googleBookSvc = require ('./dist/GoogleBookService.js');
const googleBookItemCatStub = require('./dist/GoogleBookItem');


var song = new Song();
var player = new Player();
var googlebook = new GoogleBook();
googlebook.googleBookItemMapper(googleBookItemCatStub);
player.play(song);
player.pause();
player.resume();

const service = new googleBookSvc.GoogleBookService();
service.fetchBooks("Cats");
setTimeout(function(){ console.log(service.fetchedResults); }, 1000);

module.exports = {googleBookSvc, GoogleBook}