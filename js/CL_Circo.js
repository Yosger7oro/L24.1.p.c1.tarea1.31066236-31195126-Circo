export default class CL_Circo{
    constructor(){
        this.acumventadolecente= 0;
        this.contadolecentes= 0;
        this.contninos= 0;
        this.contadult= 0;
        this.contespectador= 0;
    }
    
    procesarespectador(cir){
        this.contespectador++;
       if(cir.edad<=12)
        this.contninos++;
        else
        if (cir.edad<=18){
        this.contadolecentes++;
        this.acumventadolecente+=cir.preciocancelado();}
        else    
        this.contadult++;
        
        
    }
        
    
    promventadolecentes(){
        return this.acumventadolecente/this.contadolecentes;
    }
    
    mayorasistencia(){
        if(this.contadolecentes > this.contninos)
            return "adolescente";
            else if(this.contninos > this.contadolecentes)
            return "niños";
            else
            return "Iguales: Niños y adolescentes";
        }
        
    porcespectadoresninos(){
        return (this.contninos*100) / this.contespectador;
    }
    
    devolvercontninos(){
        return this.contninos;
    }
    
}