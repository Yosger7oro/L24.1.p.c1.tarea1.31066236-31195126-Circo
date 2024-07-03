/*Para un espectaculo de circo se tiene 3 tipos de entradas: niños (hasta 12 años),
adolecentes (hasta 18) y adulto ( mayores de 18, respectivamente), el precio de la 
entrada general es de 15$. Por cada espectador se tiene: nombre, edad y sexo. Además. 
Se sabe que si el espectador  es niño o adolecente obtiene un descuento del 10% se
requiere mostrar: A) precio Cancelado por cada espectador, B) promedio de las ventas 
hechas a espectadores adolecentes, C)  entre niños y adolescentes cuál asistió más al 
circo D) porcentaje que representa la cantidad de niños que asistieron al circo con 
respecto al total de espectadores procesados
El circo suministra la siguiente información demostrativa, para 4 espectadores: 
(nombre, edad, sexo) (Ana, 8, F) (Luis,15, M) (Valeria, 12, F) (Fabián, 21, M)

El espectador  debe cancelar 13.5$
El espectador  debe cancelar 13.5$
El espectador  debe cancelar 13.5$
El espectador  debe cancelar 15.0$

Promedio de las ventas hechas a espectadores adolescentes  13.5$
Entre niños y adolescente el espectador que asistió más al circo fue niños
Porcentaje que representa la cantidad de niños que asistieron al circo 50%
*/

import CL_Espectador from "./CL_Espectador.js";
import CL_Circo from "./CL_Circo.js";

let espec1=new CL_Espectador('Ana',8,'F');
let espec2=new CL_Espectador('Luis',15,'M');
let espec3=new CL_Espectador('Valeria',12,'F');
let espec4=new CL_Espectador('Fabián',21,'M');

let circo= new CL_Circo();

circo.procesarespectador(espec1);
circo.procesarespectador(espec2);
circo.procesarespectador(espec3);
circo.procesarespectador(espec4);

let salida=document.getElementById("Salida");

salida.innerHTML="Resultados"
salida.innerHTML+="<br> Monto del espectador 1= "+espec1.preciocancelado();
salida.innerHTML+="<br> Monto del espectador 2= "+espec2.preciocancelado();
salida.innerHTML+="<br> Monto del espectador 3= "+espec3.preciocancelado();
salida.innerHTML+="<br> Monto del espectador 4= "+espec4.preciocancelado();
salida.innerHTML+="<br> <br>";
salida.innerHTML+="<br> Promedio de las ventas hechas a espectadores adolescentes = "+circo.promventadolecentes();
salida.innerHTML+="<br> Entre niños y adolescente el espectador que asistió más al circo = "+circo.mayorasistencia();
salida.innerHTML+="<br> Porcentaje que representa la cantidad de niños que asistieron al circo = "+circo.porcespectadoresninos();

