$(document).ready(function(){
    $.fn.inputrot = function(){
        $(this).css("border","2px solid red");
        $(this).css("background","#FFD9D9");
        $(this).css("box-shadow","none");
    };

    $.fn.checktext = function(){
        var text = $(this).val();
        //mind. 4 Zeichen, nur Buchstaben möglich aber nur Zahlen nicht, keine Sonderzeichen
        var regex = new RegExp(/^([a-zA-Z0-9]*[a-zA-Z]+[a-zA-Z0-9]*){4,}$/);
        return regex.test(text);
    };

    $.fn.alertinvalid = function(){
        $("#username").inputrot();
        $("#password").inputrot();
        $("#alertpopup").dialog("open");
    };

    $("#alertpopup").dialog({
        width: 400,
        height: 150,
        modal: true,
        autoOpen: false,
        draggable: false,
        resizable: false,
        buttons: {
            Okay: function() {
                $( this ).dialog( "close" );
            }
        }
    });


    $("#submit").click(function(){
        if ($("#password").checktext() == true && $("username").checktext() == true) {
            var username = $("#username").val();
            var password = $("#password").val();

            //hier später Ergebnis von Datenbankabfrage und direkte Weiterleitung auf die Seite (ohne Alert)
            if (username == "Username" && password == "Password") {
                alert("Log In successful");
            }
            else{
                $("#username").inputrot();
                $("#password").inputrot();
                $("#alertpopup").dialog("open");
            }
        }
        else{
            $("#username").inputrot();
            $("#password").inputrot();
            $("#alertpopup").dialog("open");
        }

    });
});