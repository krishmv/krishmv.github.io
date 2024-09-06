
const bodyClass= document.body.classList;
const themeDark = "dark-theme";
const themeLight = "light-theme";

var localTheme;

if (localStorage.getItem("Theme") == null){
  localTheme = themeDark;
  localStorage.setItem("Theme", themeDark);
}

else localTheme = localStorage.getItem("Theme");
bodyClass.add(localTheme);

function switchTheme(){   
    keepBarOpen();  
    if(localTheme == themeDark) setTheme(themeLight);
    else setTheme(themeDark); 
  }

function setTheme(theme){
    bodyClass.remove(localTheme);
    localTheme = theme;
    localStorage.setItem("Theme", theme);
    bodyClass.add(theme);
}

