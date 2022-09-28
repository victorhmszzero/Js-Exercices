// | Criar uma programa de acordo com a expressão:     |
// | Trapézio: A = ((base maior + base menor) * h) / 2 |
// Autor - Victor Hugo MS - victorhmszzero  
// Version - 1.0 

var A = Number;
var h = Number;
var base_maior = Number;
var base_menor = Number;
var title_trapeze = "Área do Trapézio"
var text_positivenumber = "Informe um numero positivo";
var text_questionStayHere = "Isto não é um numero positivo.\nInserir outro numero?";

function trapeze(){
    traBaseMaior();
}

function traBaseMaior() {
    var text_calcule = "A = ((base maior + base menor) * h) / 2";
    var text_prompt = title_trapeze+"\n" + text_calcule+"\n" + "Informe o valor da base maior do trapézio:";
    var text_stayHere = "Isto não é um numero positivo.\nContinuar calculando a área do trapézio?";

    base_maior = parseInt(prompt(text_prompt));
    if (isNaN(base_maior) || base_maior === ""){
        var stay_here = confirm(text_stayHere);
        switch(stay_here){
            case true: traBaseMaior(); break;
            case false: Select_Ex(); break;
        }
    } else if (base_maior > 0){ 
        traBaseMenor();
    } else{
        alert(text_positivenumber)
        traBaseMaior();
    }
}

function traBaseMenor() {
    var text_calcule = "A = ((" + base_maior + " + base menor) * h) / 2";
    var text_prompt = title_trapeze+"\n" + text_calcule+"\n" + "Informe o valor da base menor do trapézio:";

    base_menor = parseInt(prompt(text_prompt));
    if (isNaN(base_menor) || base_menor === ""){
        var stay_here = confirm(text_questionStayHere);
        switch(stay_here){
            case true: traBaseMenor(); break;
            case false: traBaseMaior(); break;
        }
    } else if (base_menor > 0){ 
        traAltura();
    } else{
        alert(text_positivenumber)
        traBaseMenor();
    }
}

function traAltura() {
    var text_calcule = "A = ((" + base_maior + " + "+ base_maior + ") * h) / 2";
    var text_prompt = title_trapeze+"\n" + text_calcule+"\n" + "Informe o valor da altura do trapézio:";

    h = parseInt(prompt(text_prompt));
    if (isNaN(h) || h === ""){
        var stay_here = confirm(text_questionStayHere);
        switch(stay_here){
            case true: traAltura(); break;
            case false: traBaseMenor(); break;
        }
    } else if (h > 0){ 
        traResult();
    } else{
        alert(text_positivenumber)
        traAltura();
    }
}

function traResult(){
    var expression = A = ((base_maior + base_menor) * h)/2 + "cm";
    var text_calcule = "A = ((" + base_maior + " + "+ base_menor + ") * "+ h + ") / 2";
    var text_result = title_trapeze+"\n" +  text_calcule+"\n" + "A área do trapézio é igual a " + expression;
   
    alert(text_result);
    Select_Ex();
}