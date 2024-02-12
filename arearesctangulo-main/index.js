function calcular(){
    let base = parseInt(document.getElementById("formGroupExampleInput").value)
    let altura = parseInt(document.getElementById("formGroupExampleInput2").value)

    if(base === 0 ){
        alert("Ingresa una base")
    }else if(altura === 0){
        alert("Ingresa una altura")
    }else if(base && altura ===0){
        alert("Ingresa una base y una altura")
    }else{
        const area = base*altura;
        document.getElementById("formGroupExampleInput3").value = area;
    }

}

function limpiar(){
    document.getElementById("formGroupExampleInput").value = 0;
    document.getElementById("formGroupExampleInput2").value = 0;
    document.getElementById("formGroupExampleInput3").value = 0;
}