function validarNome(){
var nome = document.getElementById("nome").value;

if(nome.length>0){
    return true;
}else{
    return false;
}
}

function validarIdade(){
var idade = document.getElementById("idade").value;
}

function validade(){

if(validarNome()){
 alert("sucesso!");
 return true;
}else{
alert("falha ao enviar dados")
return false;

}
}