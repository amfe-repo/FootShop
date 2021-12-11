$(document).ready(function()
{
    $(".container .content .content_container section form input").click(function(e)
    {   
        
        $("."+e.target.id).css
        (
            {"transform":"translateY(-50px)", "font-size":"12px"}
        );
    });

    $(".container .content .content_container section form input").focusout(function(e)
    {   
        if(e.target.value == "")
        {
            $("."+e.target.id).css(
                {"transform":"translateY(0.2px)", "font-size":"1em"}
                );
        }
    });

    $("#btn_enviar").mouseenter(function()
    {   
        $("#btn_enviar").css({"transform":"scale(1.3,1.3)", "transition":"0.3s"});
    });

    $("#btn_enviar").mouseleave(function()
    {   
        $("#btn_enviar").css({"transform":"scale(1,1)", "transition":"0.3s"});
    });

});