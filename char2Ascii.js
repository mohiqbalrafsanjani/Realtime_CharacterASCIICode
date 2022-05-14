var resultChar = 0;
const resultAsciiChar = [];


function copy() {
    let copyText = document.querySelector("#resultASCII");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#copy").addEventListener("click", copy);
  

function timeCount(){
    
    var input = document.getElementById("Textarea").value;
    var char = input.replace(/\s/g, '');
    var countChar = char.length;

    setTimeout(function(){
        if(countChar > 0){
            resultChar = countChar;
            resultAsciiChar.length = 0;
              for(let i = 0; i < countChar; i ++ ){
                resultAsciiChar[i] = char.charCodeAt(i);
              }
        }else{
            resultChar = 0;
            resultAsciiChar.length = 0;
        }
        
    }, 60) // 60 milisec
}

function charCount(){

    timeCount()
    document.getElementById("resultCC").innerHTML = resultChar + " Character Counted";
    document.getElementById("resultASCII").innerHTML = resultAsciiChar;
}

setInterval(charCount, 100); // 1 sec