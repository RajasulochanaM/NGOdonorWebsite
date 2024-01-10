function confirmdonation(){
    var fullname = document.getElementById("i2").value;
    if(fullname == fullname){
        window.location.href="./confirmdonation.html";
        document.getElementById("clientname").innerHTML= fullname;
    }
}