import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Status } from './status';
import { Devices } from './device_table';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // const status = [
    //   {id: 1, Name: 'iphone1', Time: '1', Location: 'Beijing', Temperature: '30', Memory: '20GB', Speed: '20' },
    //   {id: 2, Name: 'iphone2', Time: '1', Location: 'Boston', Temperature: '10', Memory: '20GB', Speed: '20' },
    //   {id: 3, Name: 'iphone3', Time: '1', Location: 'NewYork', Temperature: '20', Memory: '20GB', Speed: '20' },
    //   {id: 4, Name: 'iphone4', Time: '1', Location: 'Tianjin', Temperature: '30', Memory: '20GB', Speed: '20' },
    //   {id: 5, Name: 'iphone5', Time: '1', Location: 'Cali', Temperature: '25', Memory: '20GB', Speed: '20' },
    //   {id: 6, Name: 'iphone6', Time: '1', Location: 'LA', Temperature: '24', Memory: '20GB', Speed: '20' },
    //   {id: 7, Name: 'iphone7', Time: '1', Location: 'SF', Temperature: '23', Memory: '20GB', Speed: '20' },
    //   {id: 8, Name: 'iphone8', Time: '1', Location: 'shanghai', Temperature: '22', Memory: '20GB', Speed: '20' },
    //   {id: 9, Name: 'iphonexs', Time: '1', Location: 'Wuhan', Temperature: '21', Memory: '20GB', Speed: '20' },
    //   {id: 10, Name: 'iphonexr', Time: '1', Location: 'Beijing', Temperature: '19', Memory: '20GB', Speed: '20' },
    // ];
      const devices = [
        {id: 11, name: 'Mr. Nice', type: '1', location: '2'},
        {id: 12, name: 'Narco', type: '1', location: '2'},
        {id: 13, name: 'Bombasto', type: '1', location: '2'},
        {id: 14, name: 'Celeritas', type: '1', location: '2'},
        {id: 15, name: 'Magneta', type: '1', location: '2'},
        {id: 16, name: 'RubberMan', type: '1', location: '2'},
        {id: 17, name: 'Dynama', type: '1', location: '2'},
        {id: 18, name: 'Dr IQ', type: '1', location: '2'},
        {id: 19, name: 'Magma', type: '1', location: '2'},
        {id: 20, name: 'Tornado', type: '1', location: '2'}
      ];
      return {devices};
    }
  // }


  // genId(statusArr: Status[]): number {
  //   return statusArr.length > 0 ? Math.max(...statusArr.map(status => status.id)) + 1 : 11;
  // }

  // genId(devicesArr: Devices[]): number {
  //   return devicesArr.length > 0 ? Math.max(...devicesArr.map( devices => devices.id)) + 1 : 11;
  // }
}
