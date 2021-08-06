import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RoomsDb implements InMemoryDbService {
  constructor() { }

  createDb() {
    let  rooms =  [
      {id: 1, name: 'Lux Room', price: '200', description: 'Comfortable room with private pool, garden'},
      {id: 2, name: 'Mini Room', price: '120', description: 'Comfortable room with private pool'},
      {id: 3, name: 'Stande Room', price: '70', description: 'Comfortable room'},
      {id: 4, name: 'Single Room', price: '60', description: 'Small room'},
      {id: 5, name: 'Elite Room', price: '220', description: 'Comfortable 3-room apartment with  private pool, garden'}
    ];

    return {rooms};

  }
}
