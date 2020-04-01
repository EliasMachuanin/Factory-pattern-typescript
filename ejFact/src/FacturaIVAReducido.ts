import Factura from "../src/Factura";

export class FacturaIvaReducido extends Factura{

    public getImporteIva(){
        return this.importe*1.07;
    }

}export default FacturaIvaReducido