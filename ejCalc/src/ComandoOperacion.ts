import Calculador from "./Calculadora"

export abstract class ComandoOperacion{

    public nombreC : string

    constructor(a : string){
        this.nombreC = a
    }

    public abstract implementar(c : Calculador, a : number, b : number)

}

export class ComandoSumar extends ComandoOperacion{


    public implementar(c : Calculador, a : number, b : number){
        return c.sumar(a,b)
    }
}

export class ComandoRestar extends ComandoOperacion{


    public implementar(c : Calculador, a : number, b : number){
        return c.resta(a,b)
    }
}


export class ComandoProducto extends ComandoOperacion{

    public implementar(c : Calculador, a : number, b : number){
        return c.producto(a,b)
    }
}


export class ComandoDividir extends ComandoOperacion{

    public implementar(c : Calculador, a : number, b : number){
        return c.division(a,b)
    }
}


export abstract class Factory{
    public abstract crear(tipo : string)
}


export class FabricaComandosOperacion extends Factory{

    public crear(tipo : string){
        let nuevoC
        switch(tipo){
            case "suma":
                nuevoC = new ComandoSumar(tipo)
                break;

            case "resta":
                nuevoC = new ComandoRestar(tipo)
                break;

            case "producto":
                nuevoC = new ComandoProducto(tipo)
                break;

            case "division":
                nuevoC = new ComandoDividir(tipo)
                break;    
        }
        return nuevoC
    }
}
