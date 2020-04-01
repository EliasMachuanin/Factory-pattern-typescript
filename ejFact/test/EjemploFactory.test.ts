import { expect } from "chai";
import FabricaFacturas  from "../src/FabricaFacturas";
import FacturaIva from "../src/FacturaIVA";
import FacturaIvaReducido from "../src/FacturaIVAReducido";

describe('Fabricador', function() {
    it('Instanciar una Factura Iva', function() {
      const c = FabricaFacturas.crearFactura("iva");
      expect(c instanceof FacturaIva).equal(true);
    });
  });

  describe('Fabricador', function() {
    it('Instanciar una Factura Iva Reducida', function() {
      const c = FabricaFacturas.crearFactura("ivano");
      expect(c instanceof FacturaIvaReducido).equal(true);
    });
  });

  describe('Calcular Importe', function() {
    it('Iva con importe 100', function() {
      const c = FabricaFacturas.crearFactura("iva");
      c.importe = 100
      expect(c.getImporteIva()).equal(121);
    });
  });

  describe('Calcular Importe', function() {
    it('Iva reducido con importe 100', function() {
      const c = FabricaFacturas.crearFactura("ivano");
      c.importe = 100
      expect(c.getImporteIva()).equal(107);
    });
  });

 