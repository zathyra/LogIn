$(document).ready(function(){
    $("#submit").click(function(){
        var username = $("#username").val();
        var password = $("#password").val();

        if(username == "Username" && password == "Password"){
            alert("Log In successful");
        }
        else{
            $(".logininput").css("border","2px solid red");
            $(".logininput").css("background","#FFD9D9");
            $(".logininput").css("box-shadow","none");
            alert("Invalid Username or Password.");
        }



    });

     //farbliche Hinterlegung bei aktivem Eingabefeld
});