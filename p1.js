function verificarLogin(){

    var clogin = document.getElementById('clogin').value;


    var pattern= /^[0-9a-z]{4,8}$/;

    if(clogin==""){
        document.getElementById('login_incorrecto').innerHTML ="";
        return true;
    }

    else if(clogin.length < 4 || clogin.length > 8){
        document.getElementById('login_incorrecto').innerHTML = "El login debe tener una longitud de entre 4 y 8 caracteres";
        return false;
    }

    else if(!pattern.test(clogin)){ 
        document.getElementById('login_incorrecto').innerHTML = "El login solo puede estar formado por n&uacutemeros o letras min&uacutesculas";
        return false;
    }

    else{

        document.getElementById('login_incorrecto').innerHTML ="";
        return true;
        
    }
}


function verificarDNI(){


    var cdni = document.getElementById('cdni').value;

    var iniciodni=/^[0-7]$/;
    var numerosdni=/^[0-9]{7}$/;
    var letradni=/^[A-Z]$/;
   

    if (cdni==""){
        document.getElementById('dni_incorrecto').innerHTML="";
        return true;
    }

    if(cdni.length!=9){

        document.getElementById('dni_incorrecto').innerHTML="El DNI debe tener una longitud de 9 caracteres, 8 n&uacutemeros y una letra may&uacutescula";
        return false;
    }

    else if(!iniciodni.test(cdni.charAt(0))){
        
        document.getElementById('dni_incorrecto').innerHTML="El DNI debe empezar por un d&iacutegito entre el 0 y el 7";
        return false;
    }

    
    else if(!letradni.test(cdni.charAt(8))){

        document.getElementById('dni_incorrecto').innerHTML="El DNI debe acabar por una letra mayuscula";
        return false;
    }

    else if(!numerosdni.test(cdni.substring(0,7))){

        document.getElementById('dni_incorrecto').innerHTML="El DNI debe comenzar por 8 n&uacutemeros";
        return false;
    }

    else{
        document.getElementById('dni_incorrecto').innerHTML="";
        return true;
    }
    
}


function verificarPassword(){


    var cpasswd = document.getElementById('cpasswd').value;
    var patternMay = /[A-Z]/; 
    var patternMin = /[a-z]/; 
    var patternNum = /[0-9]/; 
    var patternSimb = /[+,-,*,/]/;

    if(cpasswd==""){
        document.getElementById('passwd_incorrecto').innerHTML ="";
        return true;

    }
    
    else if(cpasswd.length<6 ||cpasswd.length>12){
        document.getElementById('passwd_incorrecto').innerHTML = "La contrase&ntildea debe tener una longitud de entre 6 y 12 caracteres";
        return false;
    }



    else if(!(patternMay.test(cpasswd) && patternMin.test(cpasswd))){

        document.getElementById('passwd_incorrecto').innerHTML = "La contrase&ntildea debe tener al menos una letra may&uauctescula y otra min&uacutescula";
       
        return false;
    }

    else if(!patternNum.test(cpasswd)){

        document.getElementById('passwd_incorrecto').innerHTML = "La contrase&ntildea debe tener al menos un n&uacutemero";
       
        return false;
    }

     else if(!patternSimb.test(cpasswd)){

        document.getElementById('passwd_incorrecto').innerHTML = "La contrase&ntildea debe tener al menos uno de estos s&iacutembolos(+,-,*,/)";
       
        return false;
    }

    else{

        document.getElementById('passwd_incorrecto').innerHTML ="";
        return true;
    }

}


function infoNavegador(){

    document.getElementById('cbrowser').value = "Nombre y versi&oacuten del navegador: "+navigator.userAgent;
}

 
function verificarNombre(){

    var cname = document.getElementById("cname").value;
    var pattern = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ]{3,}[ ][a-zA-ZÁÉÍÓÚáéíóúÑñ]{3,}$/;


    if(cname==""){

        return true;
    }
    else if(pattern.test(cname)){

        return true;
    }

    else {
        return false;
    }
}

function marcarTodosGeneros(){

    var checkboxDesmarcar = document.getElementById('desmarcartodo');

    document.querySelectorAll('#formulario input[type=checkbox]').forEach(function(checkElement){
        checkElement.checked = true;

        checkboxDesmarcar.checked = false;
    
    });
    
}

function desmarcarTodosGeneros(){

    
    document.querySelectorAll('#formulario input[type=checkbox]').forEach(function(checkElement){
        checkElement.checked = false;
        

    
    });
    
}

function funcionurl(){

    if(document.getElementById('url').checked){

        document.getElementById('formulario').enctype ="application/x-wwwform-urlencoded";
    }
}

function funcionmultipart(){

    if(document.getElementById('multipart').checked){

        document.getElementById('formulario').enctype ="multipart/form-data";
    }
}




function funcionget(){

    document.getElementById('multipart').disabled= true;

    if(document.getElementById('GET').checked){

        document.getElementById('formulario').method = "GET";

    }
}

function funcionpost(){

    document.getElementById('multipart').disabled= false;

    if(document.getElementById('POST').checked){

        document.getElementById('formulario').method = "POST";
        
    }
}

function enviar2()
{
    alert("Entro");
    return false;
}


function otroEnviar()
{
  

    var cname = document.getElementById('cname').value;
    var clogin = document.getElementById('clogin').value;
    var cdni = document.getElementById('cdni').value;
    var cpasswd = document.getElementById('cpasswd').value;

    if(verificarNombre() || cname==""){
        if(verificarLogin() || clogin==""){
            if(verificarPassword() || cpasswd==""){
                if(verificarDNI() || cdni==""){
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }else{
            return false;
        }
    }else{
         return false;
    }
}


function restaurar(){

    var formulario = document.getElementById('formulario');

    document.getElementById('login_incorrecto').innerHTML="";
    document.getElementById('dni_incorrecto').innerHTML="";
    document.getElementById('passwd_incorrecto').innerHTML="";

    formulario.onreset;
    alert("El formulario se ha reiniciado, por favor vuelva a introducir sus datos de registro.");
}
