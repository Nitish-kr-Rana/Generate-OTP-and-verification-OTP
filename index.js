function generateOTP(){
    let generateOTP =  Math.floor(100000 + Math.random()*9000);
    console.log(generateOTP);
    window.localStorage.setItem("otp",generateOTP);
}

function validateOtp(){
    let validOtp = document.querySelector("#validOtp").value;

    let otp = window.localStorage.getItem("otp");
    if(validOtp == otp){
        alert("Successfuly");
    }else{
        alert('Not valided OTP');
    }
}

