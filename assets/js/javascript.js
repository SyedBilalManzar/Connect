function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("display-none");
    element.classList.toggle("mystyle");
    var icon = document.getElementById("toggle-icon");
    icon.classList.toggle("fa-angle-double-down");
    icon.classList.toggle("fa-angle-double-up");
  }
  
  fi.addEventListener('mouseover',fun1);
  function fun1(){
    console.log(1111)
    
  }
  