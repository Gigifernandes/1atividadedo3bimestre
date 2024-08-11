function validar(){
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    if(login === "gigi" && senha === "123"){
        alert("Usuário validado!");
        location.href = "4exerciciohome.html";
    }else{
        alert("Erro! Login ou senha incorretos");
    }
}