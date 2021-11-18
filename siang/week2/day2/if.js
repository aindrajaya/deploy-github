let prefersDarkMode = false;
let prefersLight = false;
let prefersSun = false;

function darkClick(){
  prefersDarkMode = true;
  if(prefersDarkMode){
    console.log('dark mode set!');
    document.body.style.background = 'black';
  }
}

function clickAble(param){
  prefersDarkMode = true;
  if(param === 'dark'){
    prefersDarkMode = true;
    if(prefersDarkMode){
      console.log('dark mode set!');
      document.body.style.background = 'black';
    }
  } else if (param === 'sun'){
    prefersSun = true;
    if(prefersSun){
      console.log('dark mode set!');
      document.body.style.background = 'palegoldenrod';
    }
  } else if(param === 'light'){
    prefersLight = true;
    if(prefersLight){
      console.log('dark mode set!');
      document.body.style.background = 'ghostwhite';
    }
  } else {
    alert("You change the backgroudn to default");
    document.body.style.background = '#d7e1ec';
  }
}