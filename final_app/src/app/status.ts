export class Status {
  id: string;
  Name: string;
  Time: string;
  Temperature: string;
  Memory: string;
  Speed: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

