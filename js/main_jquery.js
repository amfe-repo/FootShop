$(document).ready(function()
{

    let boolState = false;

    $(".btn_menu").click(function()
    {   
        $("header .navbar").fadeToggle();

        if(!boolState)
            $("header").css({"justify-content":"center"});
        else
            $("header").css({"justify-content":"space-between"});
    });

});