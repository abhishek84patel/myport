let chekbox = document.getElementsByTagName("input")[0];
let body = document.body;
console.log(chekbox);
chekbox.addEventListener("click" ,darkMode);
function darkMode(){
  if(chekbox.checked){
    body.style.backgroundColor="white"
    body.style.color="black"
  }
  else{
    body.style.backgroundColor="#161a20"
  }
}
