import FacturaIva from "../src/FacturaIVA";
import FacturaIvaReducido from "../src/FacturaIVAReducido";

export class FabricaFacturas {

    public static crearFactura(tipo : string) {
        if (tipo=="iva"){
            return new FacturaIva();
        }
        else{
            return new FacturaIvaReducido();
        }
    }

}export default FabricaFacturas;