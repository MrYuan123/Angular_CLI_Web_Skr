export class User
{
  // inputusername: string;
  // inputpassword: string;
    _id: string;
  username: string;
  password: string;
  email: string;

  constructor(values: Object = {}) {
        Object.assign(this, values);
  }
}
