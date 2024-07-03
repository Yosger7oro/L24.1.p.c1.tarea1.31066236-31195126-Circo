export default class CL_Espectador{

    constructor(no,ed,se){
        this.nombre=no;
        this.edad=ed;
        this.sexo=se;
    }
    set nombre(n){
        this._nombre=n;
    }
    
    get nombre(){
        return this._nombre;
    }

    set edad(e){
        this._edad=+e;
    }

    get edad(){
        return this._edad;
    }

    set sexo(s){
        this._sexo=s;
    }

    get sexo(){
        return this._sexo;
    }

    preciocancelado(){
        if (this.edad<=18)
            return 13.5;
        else
            return 15;
        }
    

}