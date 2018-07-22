window.onload = function() {
    var testdiv = document.getElementById("testdiv");
    var para = this.document.createElement("p");
    testdiv.appendChild(para);
    var txt = document.createTextNode("Hello world");
    para.appendChild(txt);
}