export class Devices {
  id: string;
  name: string;
  deviceType: string;
  location: string;
  _id: string;
  user: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
