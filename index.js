console.log("JavaScript Loaded");
loadLanguages();
async function loadLanguages(){

    var langResponse = await fetch("./Languages/Languages.json");
    var languages = await langResponse.json();
    var select = document.getElementById("languageSelector");
    var option = document.createElement("option");
    option.value = "Default";
    option.id = "default";
    option.innerHTML = "Select a Language";
    select.appendChild(option);
    for(language in languages){
        var option = document.createElement("option");
        option.innerHTML = languages[language];
        option.value = language;
        select.appendChild(option);
    };
};
function populateSection(item){
    section.innerHTML = "";
    section.innerHTML += "<h1 id=\"sectionHeading\">" + item.name + "</h1>";
    section.innerHTML += "<p>Syntax</p>"
    section.innerHTML += "<code>" + String(item.code) + "</code>"; 
    if(item.examples.length > 1){
        section.innerHTML += "<h2>Examples</h2>"
    }
    else{
        section.innerHTML += "<h2>Example</h2>"
    }
    //section.innerHTML += "<code>" + String(item.examples) + "</code>";
    for(example in item.examples){
        section.innerHTML += "<p>" + item.examples[example].description + "</p>";
        section.innerHTML += "<code>" + item.examples[example].code + "</code>";
    }
};
async function changeLanguage(){
    var section = document.getElementById("section");
    section.innerHTML = "<h1 id=\"sectionHeading\">Select code snippet from the menu</h1>";
    document.getElementById("default").disabled = "disabled";
    response = await fetch(`./Languages/${document.getElementById("languageSelector").value}.json`);
    json = await response.json();
    var list = document.getElementById("list");
    list.innerHTML = "";
    for(item in json){
        var li = document.createElement('li');
        li.addEventListener("click", function(){
            for(item in json){
                if(json[item].name == this.innerHTML){
                    //console.log(json[item].code);
                    populateSection(json[item]);
                };
            };
        });
        li.innerHTML = json[item].name;
        list.appendChild(li);
    };
};