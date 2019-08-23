var fs = require("fs");
var text = fs.readFileSync('./animals.txt').toString('utf-8');
var textByLine = text.split("\n");
const START = 'https://google.com';
const Nightmare = require('nightmare'),
  vo = require('vo'),
  nightmare = new Nightmare({ show: true });
  nightmare
          .goto(START)
          .wait('#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input.gNO89b')
          .insert('input[name=q]', 'hello boyy')
          .click('#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input.gNO89b')

textByLine.forEach(function(text){
    nightmare
    .wait('#resultStats')
        .insert('input[name=q]','')
        .insert('input[name=q]',text)
        .click('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > button > div')
        .wait(2000)
        var result = nightmare
        .wait('#resultStats')
        .evaluate(() => {
          return document.querySelector('#resulStats').innerHTML;
        })
        var strResult = result.toString().replace(/w/gi, '');
        var intResult = parseInt(strResult);
        console.log(intResult);

});