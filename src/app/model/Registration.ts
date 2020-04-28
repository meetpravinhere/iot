export class Registration {
  constructor(
    public fName: string,
    public lName: string,
    public email: string,
    public country: string,
    public password: string,
    public confirmPassword: string
  ) {}
}
