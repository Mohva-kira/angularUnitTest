import { TestBed } from '@angular/core/testing';

import { DriverService } from './driver.service';

fdescribe('DriverService', () => {
  let service: DriverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverService);
  });

  it('Doit être prêt', () => {
    expect(service).toBeTruthy();
  });

  it('Doit créer un Driver dans le tableau', () => {
    const name = "Druant Jean"
    const adress = "Paris 11eme"
    const age = 36
    const email = "iiii@gmmail.com"

    service.addNewDriver(name, age, adress, email)
    expect(service.driverList.length).toBeGreaterThanOrEqual(1)
  })

  it('Doit supprimer un driver créer dans le tableau', () => {
    const name = "Constatin Philipe"
    const adress = "Paris 9eme"
    const age = 42
    const email = "aaaa@gmail.com"
    service.addNewDriver(name, age, adress, email)
    service.removeDriver(0)
    expect(service.driverList.length).toBeLessThan(1);
  })

  it('Doit récupérer la liste des drivers', () => {

    service.getDriver()
    expect(service.driverList).toBeDefined()
  })


  it("Mise à jour effectué", () => {


    const name = "Druant Jean"
    const adress = "Paris 11eme"
    const age = 36
    const email = "iiii@gmmail.com"

    service.addNewDriver(name, age, adress, email)

    let data = service.driverList[0]
      console.log('data data',data)
        data.name = "updated name"

    service.updateDriver(0, data);
    expect(service.driverList.length).toBeGreaterThanOrEqual(1);
  })
});
