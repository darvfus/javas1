nombre1=prompt("¿Como te llamas?");
alert("Hola  Tu nombre es "+ nombre1)
 monto1= prompt("¿Cuanto dinero tienes?");
  alert("Tu monto es"+ monto1);
document.write("Hola bienvenido "+nombre1+ " Tu saldo es  "+ monto1);

monto1=parseInt(monto1);


if(monto1 >=10 && monto1 <15){
   alert(nombre1+" Puedes comprarte Paleta de agua   ");
   alert(nombre1+"  y te sobra"+ (monto1 - 10));
document.write(nombre1+" Puedes comprarte Paleta de agua ")
 
document.write(nombre1+"  y te sobra"+ (monto1 - 10));
}
else if(monto1 >=15 && monto1 <20){
    alert(nombre1+" Puedes comprarte Paleta de Leche   ");
    alert(nombre1+"  y te sobra"+ (monto1 - 15));
    adocument.write(nombre1+" Puedes comprarte Paleta de Leche   ");
    document.write(nombre1+"  y te sobra"+ (monto1 - 15));
 }
else if (monto1>=20 && monto1 <25){
     
    alert(nombre1+" Puedes comprarte un Helado Holanda");
    alert(nombre1+"  y te sobra"+ (monto1 - 20));
    document.write(nombre1+"Puedes comprarte un Helado Holanda");
    document.write(nombre1+"  y te sobra"+ (monto1 - 20));
}

else if (monto1>=25 && monto1 <30){
    alert(nombre1+" Puedes Comprar un Helado La miochoacana   ");
    alert(nombre1+"  y te sobra"+ (monto1 - 25));
    document.write(nombre1+" Puedes Comprar un Helado La miochoacana   ");
    document.write(nombre1+"  y te sobra"+ (monto1 - 25));

}
else if (monto1>=30 && monto1 <50){
    alert(nombre1+" Puedes Comprar un Helado de litro de agua  ");
    alert(nombre1+"  y te sobra"+ (monto1 - 50));
    document.writet(nombre1+" Puedes Comprar un Helado de litro de agua  ");
    document.write(nombre1+"  y te sobra"+ (monto1 - 30));

}
else if (monto1==50){
    alert(nombre1+" Puedes Comprar un Helado de litro de leche  o 3 litros de agua de coco");
    alert(nombre1+"  y te sobra"+ (monto1 - 50));
document.write(nombre1+" Puedes Comprar un Helado de litro de leche o 3 litros de agua de coco ");
document.write(nombre1+"  y te sobra"+ (monto1 - 50));
}

 else if (  monto1 >50){
    alert(nombre1+" Puedes comprarte lo que tu gustes ");
    
    document.write(nombre1+" Puedes comprarte lo que tu gustes ");
   


}
 
else{
    alert("Lo siento no cuentas con fondos suficientes regresa pronto")
    document.write("Lo siento no cuentas con fondos suficientes regresa pronto")
}