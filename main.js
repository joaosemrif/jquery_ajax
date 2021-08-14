function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url= "https://viacep.com.br/ws/"+ cep +"/json/"
      
    $.ajax({
        url: url,
        type: "get",
        success:function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            $("#titulo_cep").html("Cep: "+ response.cep);
            $(".cep").show();
            $(".barra-progresso").hide();
        }
    })
}

$(function() {
    $(".cep").hide();
    $(".barra-progresso").hide();
})