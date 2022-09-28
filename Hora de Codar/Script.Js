
// ----------------------------------------------------------------------------------
function Ex1(){ // Nome Do carro
    var nomeDoCarro = "Fusca";
    alert("var nomeDoCarro = " + nomeDoCarro);
    console.log(nomeDoCarro);
    Select_Ex();
}
// ----------------------------------------------------------------------------------
function Ex2(){
    var NomeDoUsuario = prompt("insira Seu Nome");
    if (isNaN(NomeDoUsuario)){
        alert("Olá " + NomeDoUsuario);
    } else if (NomeDoUsuario === null){ 
        var quit = confirm("Este valor não é um numero. Continuar inserindo o seu nome?");
        if (!quit){ Select_Ex();
        } else { Ex2();
        }
    } else if (!isNaN(NomeDoUsuario)){
        alert("Informe um nome com Letras")
        Ex2();
    }
    Select_Ex();
}
// ----------------------------------------------------------------------------------
var NomeDoUsuario
function Ex3_nome(){
    NomeDoUsuario = prompt("Insira seu nome");
    if (isNaN(NomeDoUsuario)){
        alert("Olá " + NomeDoUsuario);
    } else if (NomeDoUsuario === null){ 
        var quit = confirm("Este valor não é um numero. Continuar inserindo o seu nome?");
        if (!quit){ Select_Ex();
        } else { Ex3_nome();
        }
    } else{ 
        alert("Insera um nome com letras ");
        Ex3_nome();
    }
    Ex3_idade();
}
function Ex3_idade(){
    var idade = parseInt(prompt("Insira sua Idade"));
    if (idade === "" || isNaN(idade)){
        var quit = confirm("Este valor não é um numero. Continuar inserindo a sua idade?");
        if (!quit){ Ex3_nome();
        } else { Ex3_idade();
        }
    } else if (idade < 0 || idade > 200){
        alert("Por favor insira uma idade humanamente possivel");
        Ex3_idade();
    } else if (idade > 100){
        alert("Olá " + NomeDoUsuario + ", sua idade é " + idade + " anos. Meus parabêns!" );
        Select_Ex();
    } else{
        alert("Olá " + NomeDoUsuario + ", sua idade é " + idade + " anos" );
        Select_Ex();
    }
}
// ----------------------------------------------------------------------------------





