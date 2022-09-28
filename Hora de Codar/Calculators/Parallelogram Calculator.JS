// | Criar uma programa de acordo com a expressão: |
// | Paralelogramo: A = base * altura              |
// Autor - Victor Hugo MS - victorhmszzero  
// Version - 1.0 

var A = Number;
var base = Number;
var altura = Number;
var title_parallelogram = "Área do Paralelogramo"
var text_positivenumber = "Informe um numero positivo";
var text_questionStayHere = "Isto não é um numero positivo.\nInserir outro numero?";

function parallelogram(){
    parBase();
}

function parBase() {
    var text_calcule = "A = base * altura";
    var text_prompt = title_parallelogram+"\n" + text_calcule+"\n" + "Informe o valor do base do paralelogramo:";
    var text_stayHere = "Isto não é um numero positivo.\nContinuar calculando a área do paralelogramo?";

    base = parseInt(prompt(text_prompt));
    if (isNaN(base) || base === ""){
        var stay_here = confirm(text_stayHere);
        switch(stay_here){
            case true: parBase(); break;
            case false: Select_Ex(); break;
        }
    } else if (base > 0){ 
        parAltura();
    } else{
        alert(text_positivenumber)
        parBase();
    }
}

function parAltura() {
    var text_calcule = "A = " + base + " * altura";
    var text_prompt = title_parallelogram+"\n" + text_calcule+"\n" + "Informe o valor do altura do paralelogramo:";
    
    altura = parseInt(prompt(text_prompt));
    if (isNaN(altura) || altura === ""){
        var stay_here = confirm(text_questionStayHere);
        switch(stay_here){
            case true: parAltura(); break;
            case false: parBase(); break;
        }
    } else if (altura > 0){ 
        parResult();
    } else{
        alert(text_positivenumber)
        parAltura();
    }
}

function parResult(){
    var expression = A = base * altura + "cm";
    var text_calcule = "A = " + base + " * "+ altura;
    var text_result = title_parallelogram+"\n" +  text_calcule+"\n" + "A área do paralelogramo é igual a " + expression;
   
    alert(text_result);
    Select_Ex();
}