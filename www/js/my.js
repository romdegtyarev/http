function openTabContent(id) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent");
    tabLinks = document.getElementsByClassName("tabLink");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
        tabLinks[i].style.backgroundColor = "";
    }
    /* Show the specific tab content */
    document.getElementById(id).style.display = "block";
}

function openCollapsibleContent(idCollapsible, idCollapsibleContent, json) {
    var collapsible = document.getElementById(idCollapsible);
    var content = document.getElementById(idCollapsibleContent);
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = "100%";
        getData(idCollapsibleContent, json);
    }
}

function getData(idCollapsibleContent, json) {
    var xmlHttp = new XMLHttpRequest();
    var url = json;
    xmlHttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var jsonArray = JSON.parse(this.responseText);
            arrayParse(jsonArray, idCollapsibleContent);
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function arrayParse(jsonArray, idCollapsibleContent) {
    var out = "<ul>";
    var i;
    var position;
    for (i = 0; i < jsonArray.entry.length; i++) {
        position = i + 1;
        out += '<li>' + position + '. ' + jsonArray.entry[i].name + '</li>';
    }
    out += "</ul>";
    /*
    console.log("Len: ", json_array.entry.length, " Arr: ", out);
    */
    document.getElementById(idCollapsibleContent).innerHTML = out;
}

