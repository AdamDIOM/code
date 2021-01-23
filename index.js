console.log("JavaScript Loaded");


var response;
var json;
function test(){
    console.log(json);
}

async function changeLanguage(){
    response = await fetch(`${document.getElementById("languageSelector").value}.json`);
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
                if(json[item].name == this.innerHTML) console.log(json[item].code);
            }
        })
        li.innerHTML = json[item].name;
        list.appendChild(li);
    }
};
