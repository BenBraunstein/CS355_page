//Hide these things on page load
function hideThings(){
    $("#fulOrLess").hide();
    $("#classfulChoice").hide();
    $("#classlessIpv4").hide();
    $("#classAipv4").hide();
    $("#classBipv4").hide();
    $("#classCipv4").hide();
    $("#classDipv4").hide();
    $("#classEipv4").hide();
    $("#standardIpv6").hide();
    $("#zeroCompIpv6").hide();
    $("#ipv6Choice").hide();

}
//This runs when there is a change in IPv4 or IPv6 Dropdown
function typeChange(){
    if(document.getElementById('fourOrSixDrop').value == "ipv4") {
        $("#fulOrLess").show();
        $("#ipv6Choice").hide();
    }
    if(document.getElementById('fourOrSixDrop').value == "ipv6") {
        $("#ipv6Choice").show();
        $("#fulOrLess").hide();
    }
    if(document.getElementById('fourOrSixDrop').value == "def") {
        $("#ipv6Choice").hide();
        $("#fulOrLess").hide();
    }
}
//This runs when there is a change in Classful or Classless Dropdown
function classfulChange(){
    if (document.getElementById('fulOrLessDrop').value == "classful") {
        $("#classfulChoice").show();
        $("#classlessIpv4").hide();
    }
    if (document.getElementById('fulOrLessDrop').value == "classless"){
        $("#classlessIpv4").show();
        $("#classfulChoice").hide();
    }
    if (document.getElementById('fulOrLessDrop').value == "def"){
        $("#classlessIpv4").hide();
        $("#classfulChoice").hide();
    }

}
function zeroCompChange(){
    if (document.getElementById('zeroCompChoice').value == "standard") {
        $("#standardIpv6").show();
        $("#zeroCompIpv6").hide();
    }
    if (document.getElementById('zeroCompChoice').value == "zeroComp"){
        $("#zeroCompIpv6").show();
        $("#standardIpv6").hide();
    }
    if (document.getElementById('zeroCompChoice').value == "def"){
        $("#standardIpv6").hide();
        $("#zeroCompIpv6").hide();
    }
}


//This runs when there is a change in Classful IPv4 Dropdown
function classfulChoiceChange() {
    if (document.getElementById('classfulChoiceDrop').value == "classA"){
        $("#classAipv4").show();
        $("#classBipv4").hide();
        $("#classCipv4").hide();
        $("#classDipv4").hide();
        $("#classEipv4").hide();
    }
    if (document.getElementById('classfulChoiceDrop').value == "classB"){
        $("#classAipv4").hide();
        $("#classBipv4").show();
        $("#classCipv4").hide();
        $("#classDipv4").hide();
        $("#classEipv4").hide();
    }
    if (document.getElementById('classfulChoiceDrop').value == "classC"){
        $("#classAipv4").hide();
        $("#classBipv4").hide();
        $("#classCipv4").show();
        $("#classDipv4").hide();
        $("#classEipv4").hide();
    }
    if (document.getElementById('classfulChoiceDrop').value == "classD"){
        $("#classAipv4").hide();
        $("#classBipv4").hide();
        $("#classCipv4").hide();
        $("#classDipv4").show();
        $("#classEipv4").hide();
    }
    if (document.getElementById('classfulChoiceDrop').value == "classE"){
        $("#classAipv4").hide();
        $("#classBipv4").hide();
        $("#classCipv4").hide();
        $("#classDipv4").hide();
        $("#classEipv4").show();
    }
    if (document.getElementById('classfulChoiceDrop').value == "def"){
        $("#classAipv4").hide();
        $("#classBipv4").hide();
        $("#classCipv4").hide();
        $("#classDipv4").hide();
        $("#classEipv4").hide();
    }

}

//This runs when the make IP Addresses button is pushed
function makeAIPs(){
    let classType = 'classANum' ;
    let dotStart = "0.0.0.";
    let binStart = "000000000000000000000000"
    makeMyIpv4(dotStart, binStart, classType);

}

function makeBIPs(){
    let classType = 'classBNum' ;
    let dotStart = "128.0.0.";
    let binStart = "100000000000000000000000"
    makeMyIpv4(dotStart, binStart, classType);

}

function makeCIPs(){
    let classType = 'classCNum' ;
    let dotStart = "192.0.0.";
    let binStart = "110000000000000000000000"
    makeMyIpv4(dotStart, binStart, classType);

}

function makeDIPs(){
    let classType = 'classDNum' ;
    let dotStart = "224.0.0.";
    let binStart = "111000000000000000000000"
    makeMyIpv4(dotStart, binStart, classType);

}

function makeClasslessIpv4(){
    let classType = 'classlessIpv4Num' ;
    let dotStart = "0.0.0.";
    let binStart = "000000000000000000000000"
    makeMyIpv4(dotStart, binStart, classType);

}

function makeStandardIpv6(){
    let classType = 'standardIpv6Num' ;
    let dotStart = "0000:0000:0000:0000:0000:0000:0000:";
    let binStart = "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    makeMyIpv4(dotStart, binStart, classType);

}

function makeZeroCompIpv6(){

}

function makeMyIpv4(dotStart, binStart, classType) {
    let outputDiv = document.getElementById('outputIpAdresses');
    outputDiv.innerHTML = "";
    let numIp = document.getElementById(classType).value;
    let allIps = [];
    let allBIps = [];
    let max = 255;
    for (let i = 0; i < numIp; i++){
        allIps.push(dotStart + i);
        let x = i.toString(2).padStart(8, '0');
        allBIps.push(binStart + x);
        if (i >= max) {
            break;
        }
        let table = document.getElementById("outputIpAdresses");
        let row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = allBIps[i];
        cell2.innerHTML = allIps[i];
    }

    let table = document.getElementById("outputIpAdresses");
    let row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Binary Notation";
    cell2.innerHTML = "Dotted Decimal Notation";

}

function makeMyIpv6 () {

}

function pressedEnter() {
    document.getElementById('classANum').onkeydown = function(event) {
        if (event.keyCode == 13) {
            makeAIPs();
        }
    }
    document.getElementById('classBNum').onkeydown = function(event) {
        if (event.keyCode == 13) {
            makeBIPs();
        }
    }
    document.getElementById('classCNum').onkeydown = function(event) {
        if (event.keyCode == 13) {
            makeCIPs();
        }
    }
    document.getElementById('classDNum').onkeydown = function(event) {
        if (event.keyCode == 13) {
            makeDIPs();
        }
    }
    document.getElementById('classlessIpv4Num').onkeydown = function(event) {
        if (event.keyCode == 13) {
            makeClasslessIpv4();
        }
    }
    document.getElementById('standardIpv6Num').onkeydown = function(event) {
        if (event.keyCode == 13) {
            makeStandardIpv6();
        }
    }

}