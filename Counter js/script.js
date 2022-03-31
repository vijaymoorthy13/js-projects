let count=0;
const value=document.getElementById("value");
const btns=document.querySelectorAll(".btn");


 
btns.forEach(function(btn){
   btn.addEventListener("click",function(event){
       const style= event.currentTarget.classList;  
       if(style.contains("increase")){
           count++;
       }else if(style.contains("decrease")){
           count--;
       }else{
           count=0;
       }
       if(count>0){
           value.style.color="green";
       }
       if(count<0){
           value.style.color="red";           
       }
       if(count===0){
           value.style.color="#222";
       }
       console.log(count);
       value.textContent=count;
   });
});

