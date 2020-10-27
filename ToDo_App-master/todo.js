/*var a = document.createElement("h1");
var b = document.createTextNode("Todo App V2.0.0")
a.appendChild(b)
document.querySelector("h1").appendChild(a)
}*/

var addbtn = document.getElementById("add").addEventListener("click", funAdd)
var removebtn = document.getElementById("remove").addEventListener("click", removefun)
var ul = document.querySelector("ul")
var li;

function funAdd() {
    //li
    var inpu = document.getElementById("input").value;
    var elem = document.createElement("li");
    elem.setAttribute("id", "mycheck")
    var label = document.createElement("label");
    var inputBox = document.createElement("input");
    inputBox.type = "checkbox";
    inputBox.setAttribute("id", "check")

    if (input == "")
        return false;
    else {
        var text = document.createTextNode(inpu);
        ul.appendChild(label);
        elem.appendChild(inputBox);
        label.appendChild(text);
        elem.appendChild(label)
        ul.appendChild(elem);
        input.value = '';
    }
}

function removefun() {
    li = ul.children
    for (let i = 0; i < li.length; i++) {
        while (li[i] && li[i].children[0].checked)
            ul.removeChild(li[i])
    }
}