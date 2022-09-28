// | Criar uma programa de acordo com a expressão: |
// | Círculo: A = π * r^2                          |
// Autor - Victor Hugo MS - victorhmszzero  
// Version - 1.0 

var A = Number;
var pi = 3.14;
var r = Number;
var title_circle = "Área do Círculo"
var text_positivenumber = "Informe um numero positivo";
var text_questionStayHere = "Isto não é um numero positivo.\nInserir outro numero?";

function circle(){
    cirRaio();
}

function cirRaio() {
    var text_calcule = "A = π * r^2";
    var text_prompt = title_circle+"\n" + text_calcule+"\n" + "Informe o valor do raio do círculo:";
    var text_stayHere = "Isto não é um numero positivo.\nContinuar calculando a área do círculo?";

    r = parseInt(prompt(text_prompt));
    if (isNaN(r) || r === ""){
        var stay_here = confirm(text_stayHere);
        switch(stay_here){
            case true: cirRaio(); break;
            case false: Select_Ex(); break;
        }
    } else if (r > 0){ 
        alert("Explicando: \nπ ="+pi+"\n" + "r ="+r + "*" + r);
        cirResult();
    } else{
        alert(text_positivenumber)
        cirRaio();
    }
}

function cirResult(){
    var expression = A = pi * (r*r) + "cm";
    var text_calcule = "A = " + pi + " * "+ (r*r);
    var text_result = title_circle+"\n" +  text_calcule+"\n" + "A área do círculo é igual a " + expression;
    alert(text_result);
    Select_Ex();
}