import { Person } from "./Person.js";
export class Student extends Person {
  constructor(code, name, address, email, type, toan, ly, hoa) {
    super(code, name, address, email, type);
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
  }
  render() {
    return `<td>${this.type}</td>
    <td>toan: ${this.toan} ly: ${this.ly} hoa: ${this.hoa}<p class="text-danger">diemTB: ${this.tinhDiemTB()}</p></td>`;
  }
  tinhDiemTB(){
    return ((parseFloat(this.toan)+parseFloat(this.ly)+parseFloat(this.hoa))/3).toFixed(1)
  }
}
