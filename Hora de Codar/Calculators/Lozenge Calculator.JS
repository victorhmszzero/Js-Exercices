// | Criar uma programa de acordo com a expressão:      |
// | Losango: A = (diagonal maior * diagonal menor) / 2 |
// Autor - Victor Hugo MS - victorhmszzero  
// Version - 1.0 

var A = Number;
var dmaior = Number;
var dmenor = Number;
var title_lozenge = "Área do Losango";
var text_positivenumber = "Informe um numero positivo";
var text_questionStayHere = "Isto não é um numero positivo.\nInserir outro numero?";

function lozenge(){
    lozDiagonalMaior();
}

function lozDiagonalMaior() {
    var text_calcule = "A = (diagonal maior * diagonal menor) / 2";
    var text_prompt = title_lozenge+"\n" + text_calcule+"\n" + "Informe o valor da diagonal maior:";
    var text_stayHere = "Isto não é um numero positivo \nContinuar calculando a área do losango?";

    dmaior = parseInt(prompt(text_prompt));
    if (isNaN(dmaior) || dmaior === ""){
        var stay_here = confirm(text_stayHere);
        switch(stay_here){
            case true: lozDiagonalMaior(); break;
            case false: Select_Ex(); break;
        }
    } else if (dmaior > 0){ 
        lozDiagonalMenor();
    } else{
        alert(text_positivenumber)
        lozDiagonalMaior();
    }
}

function lozDiagonalMenor() {
    var text_calcule = "A = (" + dmaior + " * diagonal menor) / 2";
    var text_prompt = title_lozenge+"\n" + text_calcule+"\n" + "Informe o valor da diagonal menor:";

    dmenor = parseInt(prompt(text_prompt));
    if (isNaN(dmenor) || dmenor === ""){
        var stay_here = confirm(text_questionStayHere);
        switch(stay_here){
            case true: lozDiagonalMenor(); break;
            case false: lozDiagonalMaior(); break;
        }
    } else if (dmenor > 0){ 
        lozResult();
    } else{
        alert(text_positivenumber)
        lozDiagonalMenor();
    }
}

function lozResult(){
    var expression = A = (dmaior * dmenor)/2 + "cm"
    var text_calcule = "A = (" + dmaior + " * " + dmenor + ") / 2";
    var text_result = title_lozenge+"\n" + text_calcule+"\n" + "A área do losango é igual a " + expression;
    
    alert(text_result)
    Select_Ex();
}