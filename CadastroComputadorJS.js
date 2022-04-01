window.onload= iniciar;
var formulario;
function iniciar (){
        let formulario=document.getElementsByTagName('form')[0];
        formulario.submit=cadastrar;
}

function enviar(event){
    cadastrar ();
    event.preventDefault();
}

function cadastrar(formulario){

    let formData= new formData(formulario);
    fetch ("http://lecontroverse.atwebpages.com/CadastrarComputador.php",
    {
        method:'POST',
        body:FormData
    })  .then (resposta => resposta.text())
        .then (texto => console.log(texto));
        return false;
}