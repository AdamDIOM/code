console.log("JavaScript Loaded");


var response;
var json;

function test(){
    console.log(json);
}

function populateSection(item){
    section.innerHTML = "";
    section.innerHTML += "<h1>" + item.name + "</h1>";
    section.innerHTML += "<code>" + String(item.code) + "</code>"; 
}

async function changeLanguage(){
    var section = document.getElementById("section");
    section.innerHTML = "<h1>Select code snippet from the menu</h1>";
    document.getElementById("default").disabled = "disabled";
    response = await fetch(`./Languages/${document.getElementById("languageSelector").value}.json`);
    json = await response.json();
    //console.log(json["input"].name);
    var list = document.getElementById("list");
    list.innerHTML = "";
    for(item in json){
        //console.log(item)
        //console.log(json[item].name);
        var li = document.createElement('li');
        li.addEventListener("click", function(){
            for(item in json){
                if(json[item].name == this.innerHTML){
                    //console.log(json[item].code);
                    populateSection(json[item]);
                } 
                
            }
        })
        li.innerHTML = json[item].name;
        list.appendChild(li);
    }
};
