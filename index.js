console.log("JavaScript Loaded");

function loadLanguageData(url){    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}



function changeLanguage(){
    loadLanguageData(`/${document.getElementById("languageSelector").value}.js`)
}