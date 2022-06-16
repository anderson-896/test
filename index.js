function showMessage(){
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById("sobrenome").value;
    var mensagem = "Olá, tudo bem? " + nome + " " + sobrenome;
    document.getElementById('display').textContent = mensagem;
}