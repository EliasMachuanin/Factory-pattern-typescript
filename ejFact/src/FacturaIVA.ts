import Factura from "../src/Factura";

export class FacturaIva extends Factura{

    public getImporteIva() {
        return this.importe*1.21;
    }

}export default FacturaIva;