let nombre=prompt("como te llamas");
alert("Bienvenida a mi pagin@ " + nombre  + " Gracias por entrar a la pagina web de buffets");

function suma(){
    let n1=parseInt(document.getElementById("num1").value);
    let n2=parseInt(document.getElementById("num2").value);
    let n3=parseInt(document.getElementById("num3").value);
    let n4=parseInt(document.getElementById("num4").value);
    let n5=parseInt(document.getElementById("num5").value);
    let suma=(n1+n2+n3+n4+n5)
    document.getElementById("rpta").innerHTML=suma;
}