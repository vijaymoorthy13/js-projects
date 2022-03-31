const colors =["green","red","chocolate","cyan","darkmagenta","darkorchid","darkred"];
const btn =document.getElementById('btn');
const color= document.querySelector(".color");
 
btn.addEventListener("click", function() {
    //random number between 0 and 3
    
    const randomNumber=getRandomNumber();
    console.log(randomNumber)//output 

    document.body.style.backgroundColor= colors[randomNumber]; 
    color.textContent=colors[randomNumber];
});  

function getRandomNumber(){
    return Math.floor (Math.random()*colors.length) ;
}