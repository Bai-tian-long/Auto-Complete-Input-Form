var i = 0;
var options = document.getElementsByClassName("options");
var optionsarr = [];
var target = document.getElementById("target");


//Sets all the options invisible
vanish();

target.addEventListener("input", search);
target.addEventListener("keyup", switchFocus);
document.addEventListener("click", vanish);

for(i = 0; i < options.length; i++)
{
  options[i].addEventListener("keyup", shiftFocus);
  options[i].addEventListener("keyup", enter);
}


function vanish()
{
  for (i =0; i < options.length; i++ )
  {
    options[i].style.display = "none";
  }

}

function sub()
{
  target.value = this.innerHTML;
}

function search()
{
  var content = target.value;
  
  var check = false;
  var i = 0;
  for (i =0; i < options.length; i++ )
  {
    options[i].addEventListener("click", sub);
    

    if (options[i].innerHTML.includes(content))
    {
      options[i].style.display = "block";
      check = true;
    }
    else
    {
      options[i].style.display = "none";
    }
    
  }
  
  if (check == false){
    document.getElementById("l-option").innerHTML="Query not found in list";
    document.getElementById("l-option").style.display="block";
  }

}

function switchFocus()
{
  let j = 0;
  let a = 0;
 if (event.keyCode == 40)
 {
   for (a = 0; a < options.length; a++)
   {
      if (options[a].style.display != "none")
      {
      options[a].focus();
      options[a].style.backgroundColor = "rgba(75,75,75,0.2)"
      break;
      }
      
    }
 }
}

function shiftFocus()
{
  optionsarr = []
  if (event.keyCode == 40)
  {
    let b = 0;
    for (b = 0; b < options.length; b++)
    {
      if(options[b].style.display == "block")
      {
        optionsarr.push(options[b]);
      }
    }

    let cIndex = optionsarr.indexOf(this);
    if (cIndex + 1 == optionsarr.length)
    {
      optionsarr[0].focus()
      for (b = 0; b < optionsarr.length; b++)
      {
        optionsarr[b].style.backgroundColor = "white"
      }
      optionsarr[0].style.backgroundColor = "rgba(75,75,75,0.2)"
    }
    else
    {
      optionsarr[cIndex + 1].focus();
      for (b = 0; b < optionsarr.length; b++)
      {
        optionsarr[b].style.backgroundColor = "white"
      }
      optionsarr[cIndex + 1].style.backgroundColor = "rgba(75,75,75,0.2)"
    }


  }
  
   optionsarr = []
  if (event.keyCode == 38)
  {
    let b = 0;
    for (b = 0; b < options.length; b++)
    {
      if(options[b].style.display == "block")
      {
        optionsarr.push(options[b]);
      }
    }

    let cIndex = optionsarr.indexOf(this);
    if (cIndex - 1 < 0)
    {
      let end = optionsarr.length - 1
      optionsarr[end].focus()
      for (b = 0; b < optionsarr.length; b++)
      {
        optionsarr[b].style.backgroundColor = "white"
      }
      optionsarr[end].style.backgroundColor = "rgba(75,75,75,0.2)"
    }
    else
    {
      optionsarr[cIndex - 1].focus();
      for (b = 0; b < optionsarr.length; b++)
      {
        optionsarr[b].style.backgroundColor = "white"
      }
      optionsarr[cIndex - 1].style.backgroundColor = "rgba(75,75,75,0.2)"
    }


  }
  
   event.stopPropagation();
}

function enter()
{
  if (event.keyCode == 13)
  {
    target.value = this.innerHTML;
    vanish();
  }
}


