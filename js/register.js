window.onload
{
    let objmain = 
    {
        fields: [],
        passFields: [],
        emailFields: []
    }

    const init_fields = function(obj)
    {
        obj.fields = document.querySelectorAll(".container .content .content_container section form input");
        obj.passFields = document.querySelectorAll(".container .content .content_container section form #vefy_pass, .container .content .content_container section form #pass");
        obj.emailFields = document.querySelectorAll(".container .content .content_container section form #vefy_email, .container .content .content_container section form #email");
        
    }

    const validate_fields = function(obj)
    {
        let validate = "";

        obj.fields.forEach( (element, index) => {
            if (element.value == "") validate += "El campo ["+ (index+1) +"] esta vacio \n"; 
        }); 

        if (validate.length == 0) 
        {
            if (obj.passFields[0].value != obj.passFields[1].value) validate += "Las contraseñas no coinciden \n";
            if (obj.emailFields[0].value != obj.emailFields[1].value) validate += "El email no coincide\n";
        }

        return validate;
    }

    const init_validate = function(objmain)
    {
        let msg = validate_fields(objmain);

        if(msg == "") alert("Los campos han sido validados");
        else alert(msg);
    }


    init_fields(objmain);

    const btn = document.getElementById("btn_enviar");
    btn.addEventListener('click', function(){ init_validate(objmain) });
}