import { Person } from "./Person.js";
export class Customer extends Person {
  constructor(
    code,
    name,
    address,
    email,
    type,
    tenCongTy,
    giaTriHoaDon,
    danhGia
  ) {
    super(code, name, address, email, type);
    this.tenCongTy = tenCongTy;
    this.giaTriHoaDon = parseFloat(giaTriHoaDon);
    this.danhGia = danhGia;
  }
  render() {
    return `<td>${this.type}</td>
    <td>Ten Cty : ${this.tenCongTy} , Gia Tri Hoa Don : ${this.formatTien(
      this.giaTriHoaDon
    )} , Danh Gia: ${this.danhGia}</td>`;
  }
  formatTien(moneyHD) {
    let VND = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return VND.format(moneyHD);
  }
}
