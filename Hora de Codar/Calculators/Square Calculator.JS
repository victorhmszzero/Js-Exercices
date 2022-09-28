// | Criar uma programa de acordo com a expressão: |
// | Quadrado: A = lado * lado = lado^2            |
// Autor - Victor Hugo MS - victorhmszzero  
// Version - 1.0 

var A = Number;
var lado = Number;
var title_square = "Área do Quadrado"
var text_positivenumber = "Informe um numero positivo";

function square(){
    squaLado();
}

function squaLado() {
    var text_calcule = "A = lado * lado";
    var text_prompt = title_square+"\n" + text_calcule+"\n" + "Informe o valor do lado do quadrado:";
    var text_stayHere = "Isto não é um numero positivo.\nContinuar calculando a área do quadrado?";

    lado = parseInt(prompt(text_prompt));
    if (isNaN(lado) || lado === ""){
        var stay_here = confirm(text_stayHere);
        switch(stay_here){
            case true: squaLado(); break;
            case false: Select_Ex(); break;
        }
    } else if (lado > 0){ 
        squaResult();
    } else{
        alert(text_positivenumber)
        squaLado();
    }
}

function squaResult(){
    var expression = A = lado * lado + "cm";
    var text_calcule = "A = " + lado + " * "+ lado;
    var text_result = title_square+"\n" +  text_calcule+"\n" + "A área do quadrado é igual a " + expression;
   
    alert(text_result);
    Select_Ex();
}