

export class User {
  constructor(
    public first_name: string = '',
    public last_name: string = '',
    public email: string = '',
    public password: string = '',
    public street: string = '',
    public apt: number = null,
    public city: string = '',
    public state: string = '',
    public lucky: string  = '',
  ) {}
}
const user = new User();
user.
