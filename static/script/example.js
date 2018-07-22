window.onload = function() {
    var para = this.document.createElement("p");
    var txt1 = document.createTextNode("This is ");
    para.appendChild(txt1);
    var emphasis = document.createElement("em");
    var txt2 = document.createTextNode("my");
    emphasis.appendChild(txt2);
    para.appendChild(emphasis);
    var txt3 = this.document.createTextNode(" content.");
    para.appendChild(txt3);
    var testdiv = this.document.getElementById("testdiv");
    testdiv.appendChild(para);
}