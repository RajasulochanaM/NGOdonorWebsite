function trustplace(){
    var choice=document.getElementById("placelist").value;
    if(choice == 'Abiramam'){
        window.location.href="./abiramam.html";
    }else if(choice == 'Adirampattinam'){
        window.location.href="./Adirampattinam.html";
    }else if(choice == 'Chennai'){
        window.location.href="./chennai.html";
    }else {
        window.location.href="./Home.html";
    }
}