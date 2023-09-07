import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('Doit être prêt', () => {
    expect(service).toBeTruthy();
  });

  it('Doit créer un User dans le tableau', () => {
    const name = "Druant Jean"
    const adress = "Paris 11eme"
    const age = 36
    const email = "iiii@gmmail.com"

    service.addNewUser(name, age, adress, email)
    expect(service.userList.length).toBeGreaterThanOrEqual(1)
  })

  it('Doit supprimer un driver créer dans le tableau', () => {
    const name = "Constatin Philipe"
    const adress = "Paris 9eme"
    const age = 42
    const email = "aaaa@gmail.com"
    service.addNewUser(name, age, adress, email)
    service.removeUser(0)
    expect(service.userList.length).toBeLessThan(1);
  })

  it('Doit récupérer la liste des drivers', () => {

    service.getUser()
    expect(service.userList).toBeDefined()
  })


  it("Mise à jour effectué", () => {


    const name = "Druant Jean"
    const adress = "Paris 11eme"
    const age = 36
    const email = "iiii@gmmail.com"

    service.addNewUser(name, age, adress, email)
    
    let data = service.userList[0]
      console.log('data data',data)
        data.name = "updated name"

    service.updateUser(0, data);
    expect(service.userList.length).toBeGreaterThanOrEqual(1);
  })
});
