var otp=Math.floor(Math.random()*999999)
        alert(otp)
        function otp_verification(){
            var user_otp=document.getElementById("OTP").value 
            if(otp==user_otp){
                window.location.href="./index.html"
            }
            else{
            document.getElementById("otp_error").innerHTML="Incorrect OTP"
            document.getElementById("otp_error").style.color="red"
            document.getElementById("otp_error").style.fontSize="20px"
            }

        }
        function resend_otp(){
            window.location.href="./verify.html"
        }

