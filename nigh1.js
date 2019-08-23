var fs = require("fs");
var text = fs.readFileSync('./animals.txt').toString('utf-8');
var textByLine = text.split("\n");
var result1 ,result2, result3;
const Push = require('push.js');

const path = require ('path');
const START = 'https://google.com';
  var nightmare1;
  var nightmare2;
  const Nightmare = require('nightmare')
  var args = { 
  show:true, 
electronPath:require('electron-nightmare'),
webPreferences: {
  partition: 'persist: testing'
}};
// First instance:



var storedCookies // This is where we will store the cookies. It could be stored in a file or database to make it permanent

document.getElementById("login").addEventListener("click", function(){
document.getElementById("status").innerHTML = "Signing in";

nightmare1 = Nightmare(args);
nightmare1.
  goto('https://relay.amazon.com').
  cookies.get().
  wait('.mt-1').
  then();

});
document.getElementById("start").addEventListener("click", function(){
document.getElementById("status").innerHTML = "Starting Notification";

const constLoop = async id=>{};
nightmare2 = Nightmare(args);
nightmare2
        .goto(START)
        .wait('#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input.gNO89b')
        .insert('input[name=q]', 'hello boyy')
        .click('#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input.gNO89b')

const getAddress = async id => {
    console.log(`Now checking ${id}`);
    
  
  // Go to initial start page, navigate to Detail search
 
    try {
        await nightmare2
        .wait('#resultStats')
        .insert('input[name=q]','')
        .insert('input[name=q]',id)
        .click('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > button > div')
        .wait(2000)
      } catch(e) {
        console.error(e);
      }
      try {
        const result = await nightmare2
          .wait('#resultStats')
          .evaluate(() => {
            return [...document.querySelectorAll('#resultStats')]
              .map(el => el.innerText);
          })
          var intStr = result[0];
          var intResult = intStr.toString().replace(/\D/g, '');
          result1 = parseInt(intResult);
          
          if (result1>result2){
            //console.log('Overall is '+result1);
            result3 = result1 - result2;
            //console.log(result3+' are new')
            result2 = result1;
            Push.create("Overall is "+result1+" results", {
                body: "There are new "+result3+" results",
                icon: './amazon-icon.png',
                timeout: 4000,
                onClick: function () {
                    window.focus();
                    this.close();
                }

            });
          }else{
            result2 = result1;
          }

          
        return { numberofResults: result[0]};
      } catch(e) {
        console.error(e);
        return undefined;
      } 

  }

 
  const series = textByLine.reduce(async (queue, textByLine) => {
    const dataArray = await queue;
    dataArray.push(await getAddress(textByLine));
    return dataArray;
    
   
  }, Promise.resolve([]));

  series.then(data => {
   console.log(data);
  })
  .catch(e => console.error(e));
});
