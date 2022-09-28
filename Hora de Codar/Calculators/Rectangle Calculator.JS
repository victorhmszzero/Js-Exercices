// | Criar uma programa de acordo com a expressão: |
// | Retangulo: A = base * altura                  |
// Autor - Victor Hugo MS - victorhmszzero  
// Version - 1.0 

var A = Number;
var base = Number;
var altura = Number;
var title_retangle = "Área do Retângulo";
var text_positivenumber = "Informe um numero positivo";
var text_questionStayHere = "Isto não é um numero positivo.\nInserir outro numero?";

function retangle(){
    retBase();
}

function retBase() {
    var text_calcule = "A = base * altura";
    var text_prompt = title_retangle+"\n" + text_calcule +"\n" + "Informe o valor da base do retângulo:"
    var text_stayHere = "Isto não é um numero positivo.\nContinuar calculando a área do retângulo?";

    base = parseInt(prompt(text_prompt));
    if (isNaN(base) || base === ""){
        var stay_here = confirm(text_stayHere);
        switch(stay_here){
            case true: retBase(); break;
            case false: Select_Ex(); break;
        }
    } else if (base > 0){ 
        retAltura();
    } else{
        alert(text_positivenumber)
        retBase();
    }
}

function retAltura(){
    var text_calcule = "A = " + base + " * altura";
    var text_prompt = title_retangle+"\n" + text_calcule+"\n"+ "Informe o valor da altura do retângulo:"

    altura = parseInt(prompt(text_prompt));
    if (isNaN(altura) || altura === ""){
        var stay_here = confirm(text_questionStayHere);
        switch(stay_here){
            case true: retAltura(); break;
            case false: retBase(); break;
        }
    } else if (altura > 0){ 
        retResult();
    } else{
        alert(text_positivenumber)
        retAltura();
    }
}

function retResult(){
    var expression = A = base * altura + "cm";
    var text_calcule = "A = " + base + " * "+ altura ;
    var text_result = title_retangle+"\n" +  text_calcule+"\n" + "A área do retângulo é igual a " + expression;
    
    alert(text_result);
    Select_Ex();
}