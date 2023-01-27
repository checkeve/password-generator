const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let p1 = document.getElementById("password1-btn") 
let p2 = document.getElementById("password2-btn") 


function generatePassword() {
    let password1= ""
        for (i=0; i < 15; i++){
        randNum = Math.floor(Math.random()*characters.length)
        let randLetter = characters[randNum]
        password1+= randLetter
        p1.textContent = password1
    }
    let password2= ""
    for (i=0; i < 15; i++){
    randNum = Math.floor(Math.random()*characters.length)
    let randLetter = characters[randNum]
    password2+= randLetter
    p2.textContent = password2
    }
}



