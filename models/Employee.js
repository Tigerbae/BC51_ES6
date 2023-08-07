import { Person } from "./Person.js";
export class Employee extends Person {
  constructor(code, name, address, email, type, soNgayLamViec, luongTheoNgay) {
    super(code, name, address, email, type);
    this.soNgayLamViec = soNgayLamViec;
    this.luongTheoNgay = luongTheoNgay;
  }
  render() {
    return `<td>${this.type}</td>
    <td>so ngay lam : ${this.soNgayLamViec} luong : ${this.formatTien(
      this.luongTheoNgay
    )} <p class="text-danger">Tinh luong: ${this.tinhLuong()}</p></td>`;
  }
  formatTien(moneyLuong) {
    let VND = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return VND.format(moneyLuong);
  }
  tinhLuong() {
    return this.formatTien(parseFloat(this.soNgayLamViec) * parseFloat(this.luongTheoNgay));
  }
}
