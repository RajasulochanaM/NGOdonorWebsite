function login_Validation(){
    var db={'Rajasulochana':'Raji@162003','Sulochana':'Sulo@3010'}
    var username=document.getElementById("user").value 
    var password=document.getElementById("passwd").value
    var all_users=Object.keys(db)
    var flag=false
    for(var i=0;i<all_users.length;i++){
        if((all_users[i]==username)&&(db[all_users[i]]==password)){
            flag=true
        }
    }
    if(flag==true){
        window.location.href="./home.html"
    }else{
document.getElementById("signin_error").innerHTML="*Invalid Username or Incorrect Password"
document.getElementById("signin_error").style.color="red"
    }
}