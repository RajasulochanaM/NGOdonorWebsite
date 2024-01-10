function sign_up_validation(){
    //phone validation
    var phone_no = document.getElementById("phone").value
    var flag_phone =false
    if((6000000000<=phone_no)&&(phone_no<=9999999999))
    {
        flag_phone=true
    }
    //email validation
    var Email=document.getElementById("email").value
    var flag_email = false
    for(var i=0;i<Email.length;i++){
        if(Email[i]=='@'){
            flag_email=true
        }
    }
    //password validation
    var password =document.getElementById("Password").value
    var flag_password=false
    var upper=0
    var lower=0
    var num=0
    var special=0
    for(var i=0;i<password.length;i++){
        if(('A'<=password[i]) && (password[i]<='Z'))
        {
            upper++
        }else if(('a'<=password[i]) && (password[i]<='z'))
        {
            lower++
        }else if(('0'<=password[i]) && (password[i]<='9'))
        {
            num++
        }else {
            special++

        }
    }
    if((upper>=1)&&(lower>=1)&&(num>=1)&&(special>=1)&&(password.length>=8)&&(password.length<=12)){
        flag_password=true
    }
    var confirm=document.getElementById("confirm_password").value
    var flag_confirm=false
    {
        if(password==confirm){
            flag_confirm=true
        }
    }
    //final validation
    if((flag_phone==true)&&(flag_email==true)&&(flag_password==true)&&(flag_confirm==true))
    {
        window.location.href="./verify.html"
    }else{
        document.getElementById("error").innerHTML="*Invalid Details"
        document.getElementById("error").style.color="red"
    } 
     
}
function cancel(){
    window.location.href="./signup.html";
}