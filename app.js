function add(){
let text= document.querySelector("input").value;
if(text=="Israel" || text=="war" || text=="War" || text=="World War" || text=="WAr" || text=="WAR"){
  document.querySelector("p").innerText="Do Not Write About War.";
  document.querySelector("input").focus();
}
else if(text==""){
  document.querySelector("p").innerText="First Enter Text.";
  document.querySelector("input").focus();

}
else if(text!=""){
let creelem= document.createElement("ul");
creelem.innerHTML= `${text} <img class="edit" src="./pen.png"> <img class="del" src="./trash-5-64.png">`;
text= document.querySelector("input").value="";
document.querySelector(".adtext").appendChild(creelem);
document.querySelector("p").innerText="";
}
}
document.querySelector("button").addEventListener("click",add);
document.querySelector("input").addEventListener("keypress",function (e){
  if(e.key==="Enter"){
    document.querySelector("button").click();
  }
})
