var fs = require("fs");
var text = fs.readFileSync('./animals.txt').toString('utf-8');
var textByLine = text.split("\n");
const Nightmare = require('nightmare')
const Push = require('push.js')
var result1 ,result2, result3;
const START = 'https://google.com';
const constLoop = async id=>{};
const nightmare = new Nightmare({ show: true });
nightmare
        .goto(START)
        .wait('#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input.gNO89b')
        .insert('input[name=q]', 'hello boyy')
        .click('#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input.gNO89b')

const getAddress = async id => {
    console.log(`Now checking ${id}`);
    
  
  // Go to initial start page, navigate to Detail search
 
    try {
        await nightmare
        .wait('#resultStats')
        .insert('input[name=q]','')
        .insert('input[name=q]',id)
        .click('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > button > div')
        .wait(2000)
      } catch(e) {
        console.error(e);
      }
      try {
        const result = await nightmare
          .wait('#resultStats')
          .evaluate(() => {
            return [...document.querySelectorAll('#resultStats')]
              .map(el => el.innerText);
          })
          var intStr = result[0];
          var intResult = intStr.toString().replace(/\D/g, '');
          result1 = parseInt(intResult);
          
          if (result1>result2){
            console.log('Overall is '+result1);
            result3 = result1 - result2;
            console.log(result3+' are new')
            result2 = result1;
          
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