var otp2=Math.floor(Math.random()*999999)
alert(otp2)
        function otp_verification2(){
            var user_otp2=document.getElementById("OTP2").value 
            if(otp2==user_otp2){
                window.location.href="./psswdUpd.html"
            }
            else{
            document.getElementById("otp_error2").innerHTML="Incorrect OTP"
            document.getElementById("otp_error2").style.color="red"
            document.getElementById("otp_error2").style.fontSize="20px"
            }

        }
        function resend_otp2(){
            window.location.href="./verify2.html"
        }
