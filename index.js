console.log("JavaScript Loaded");


var response;
var json;
function test(){
    console.log(json);
}

function populateSection(item){
    var section = document.getElementById("section");
    section.innerHTML = "";
    section.innerHTML += "<h1>" + item.name + "</h1>";
    section.innerHTML += "<code>" + String(item.code) + "</code>"; 
}

async function changeLanguage(){
    document.getElementById("default").disabled = "disabled";
    response = await fetch(`./${document.getElementById("languageSelector").value}.json`);
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
