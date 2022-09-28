// | Criar uma programa de acordo com a expressão: |
// | Triângulo: A = (base * altura) / 2            |
// Autor - Victor Hugo MS - victorhmszzero  
// Version - 1.0 

var A = Number;
var base = Number;
var altura = Number;
var title_triangle = "Área do Triângulo";
var text_positivenumber = "Informe um numero positivo";
var text_questionStayHere = "Isto não é um numero positivo.\nInserir outro numero?";

function triangle(){
    triBase();
}

function triBase() {
    var text_calcule = "A = (base * altura) / 2";
    var text_prompt = title_triangle+"\n" + text_calcule+"\n" + "Informe o valor da base:";
    var text_stayHere = "Isto não é um numero positivo \nContinuar calculando a área do triângulo?";

    base = parseInt(prompt(text_prompt));
    if (isNaN(base) || base === ""){
        var stay_here = confirm(text_stayHere);
        switch(stay_here){
            case true: triBase(); break;
            case false: Select_Ex(); break;
        }
    } else if (base > 0){ 
        triAltura();
    } else{
        alert(text_positivenumber)
        triBase();
    }
}

function triAltura() {
    var text_calcule = "A = (" + base + " * altura) / 2";
    var text_prompt = title_triangle+"\n" + text_calcule+"\n" + "Informe o valor da altura:";

    altura = parseInt(prompt(text_prompt));
    if (isNaN(altura) || altura === ""){
        var stay_here = confirm(text_questionStayHere);
        switch(stay_here){
            case true: triAltura(); break;
            case false: triBase(); break;
        }
    } else if (altura > 0){ 
        triResult();
    } else{
        alert(text_positivenumber)
        triAltura();
    }
}

function triResult(){
    var expression = A = (base * altura)/2 + "cm"
    var text_calcule = "A = (" + base + " * " + altura + ") / 2";
    var text_result = title_triangle+"\n" + text_calcule+"\n" + "A área do triângulo é igual a " + expression;
    
    alert(text_result)
    Select_Ex();
}