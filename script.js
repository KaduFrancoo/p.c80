var mainList = [];

function commasf() {
    var commasVar = document.getElementById("commas").value;
    mainList.push(commasVar);
    document.getElementById("listwithcommas").innerHTML = mainList;
}
function unorganized() {
    var unorganizedVar = mainList.join("<br>");
    document.getElementById("listunorganized").innerHTML = unorganizedVar;
}
function organized() {
    var organizedVar = mainList.sort();
    var organizedVar2 = organizedVar.join("<br>");
    document.getElementById("listorganized").innerHTML = organizedVar2;
}
function search(){
    var s = document.getElementById("searchID").value;
    var found = 0
    for (j=0;j<mainList.length;j++){
        if (s == mainList[j]){
            found = found + 1
        }
    }
    document.getElementById("searchID2").innerHTML = "Nome encontrado " + found + "vez(es).";
}