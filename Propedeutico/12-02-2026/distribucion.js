function distribuirPresupuesto() {
    ppto=parseInt(document.getElementById("cajaPpto").value);
    noMeses=parseInt(document.getElementById("cajaNoMeses").value);

    /*
    for(i=posicion en que comienza; i<variable con la que va detenerse; cuando va a incrementar la variable contadora){
        Las operaciones que se va a ejecutar en cada iteración
        }

    */
   text="";
   for(i=1<noMeses+1;i++){
    text=text+"Mes "+i+"Presupuesto Mensual: "+ppto/noMeses+" Presupuesto Acumulado: "+(ppto/noMeses)*i+"\n";
    }

    document.getElementById("textareaResultados").value=text;
}

btnDistriuir=document.getElementById("btndDIsctribuir");
btnDistriuir.addEventListener("click",distribuirPresupuesto);
