export class Person {
  constructor(code, name, address, email, type) {
    this.code = code;
    this.name = name;
    this.address = address;
    this.email = email;
    this.type = type;
  }
  render() {
    throw new Error(`Method not implemented`);
  }
}
