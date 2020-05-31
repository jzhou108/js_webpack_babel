console.log('index.js is called!');

function chgColor()
{
  var color = document.getElementById("btn1").style.color;
  
  if(color == "red")
  {
      document.getElementById("btn1").style.background="yellow";
      document.getElementById("btn1").style.color="blue";
  }
  else
  {
      document.getElementById("btn1").style.background="yellow";
      document.getElementById("btn1").style.color="red";
  }
}

window.chgColor=chgColor;