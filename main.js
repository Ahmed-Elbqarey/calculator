function insert(input) {
  let result = document.getElementById("content").innerHTML;
  document.getElementById("content").innerHTML = result + input;
}
function del (){
  document.getElementById("content").innerHTML = "";    
}
function back (){
  let result = document.getElementById("content").innerHTML;
  document.getElementById("content").innerHTML = result.substring(0,result.length -1)

}
function calc (){
  let result = document.getElementById("content").innerHTML;
if(result){
  document.getElementById("content").innerHTML = eval(result);
  
}else{
  document.getElementById("content").innerHTML = "not found";
}
}