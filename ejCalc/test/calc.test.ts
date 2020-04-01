import { expect } from "chai";
import { Calculador } from "../src/Calculadora";
import {FabricaComandosOperacion, ComandoSumar, ComandoDividir, ComandoProducto, ComandoRestar, Factory, ComandoOperacion} from "../src/ComandoOperacion";


describe('Herencia', function() {
  it('Factory', function() {
    const f = new FabricaComandosOperacion()
    expect(f instanceof Factory).equal(true);
  });
});

describe('Herencia', function() {
  it('ComandoSumar', function() {
    const f = new FabricaComandosOperacion()
    expect(f.crear("suma") instanceof ComandoOperacion).equal(true);
  });
});

describe('Herencia', function() {
  it('ComandoRestar', function() {
    const f = new FabricaComandosOperacion()
    expect(f.crear("resta") instanceof ComandoOperacion).equal(true);
  });
});

describe('Herencia', function() {
  it('ComandoProducto', function() {
    const f = new FabricaComandosOperacion()
    expect(f.crear("producto") instanceof ComandoOperacion).equal(true);
  });
});

describe('Herencia', function() {
  it('ComandoDividir', function() {
    const f = new FabricaComandosOperacion()
    expect(f.crear("division") instanceof ComandoOperacion).equal(true);
  });
});


describe('Crear', function() {
  it('ComandoSumar', function() {
    const f = new FabricaComandosOperacion()
    expect(f.crear("suma") instanceof ComandoSumar).equal(true);
  });
});

describe('Crear', function() {
  it('ComandoRestar', function() {
    const f = new FabricaComandosOperacion()
    expect(f.crear("resta") instanceof ComandoRestar).equal(true);
  });
});

describe('Crear', function() {
  it('ComandoProducto', function() {
    const f = new FabricaComandosOperacion()
    expect(f.crear("producto") instanceof ComandoProducto).equal(true);
  });
});

describe('Crear', function() {
  it('ComandoDividir', function() {
    const f = new FabricaComandosOperacion()
    expect(f.crear("division") instanceof ComandoDividir).equal(true);
  });
});


describe('calculate', function() {
    it('Sumar', function() {
      const c = new Calculador();
      const f = new FabricaComandosOperacion()
      const o = f.crear("suma")
      expect(o.implementar(c, 5, 2)).equal(7);
    });
  });

  describe('calculate', function() {
    it('Restar', function() {
      const c = new Calculador();
      const f = new FabricaComandosOperacion()
      const o = f.crear("resta")
      expect(o.implementar(c, 5, 2)).equal(3);
    });
  });

describe('calculate', function() {
    it('Multiplicador', function() {
      const c = new Calculador();
      const f = new FabricaComandosOperacion()
      const o = f.crear("producto")
      expect(o.implementar(c, 5, 2)).equal(10);
    });
  });

  describe('calculate', function() {
    it('Division', function() {
      const c = new Calculador();
      const f = new FabricaComandosOperacion()
      const o = f.crear("division")
      expect(o.implementar(c, 5, 2)).equal(2);
    });
  });


  describe('calculate', function() {
    it('Division por 1', function() {
      const c = new Calculador();
      const f = new FabricaComandosOperacion()
      const o = f.crear("division")
      expect(o.implementar(c, 5, 1)).equal(5);
    });
  });


  describe('calculate', function() {
    it('Division por 0', function() {
      const c = new Calculador();
      const f = new FabricaComandosOperacion()
      const o = f.crear("division")
      expect(o.implementar(c, 5, 0)).equal(Infinity);
    });
  });



  describe('calculate', function() {
    it('Division con b>a', function() {
      const c = new Calculador();
      const f = new FabricaComandosOperacion()
      const o = f.crear("division")
      expect(o.implementar(c, 1, 5)).equal(0);
    });
  });