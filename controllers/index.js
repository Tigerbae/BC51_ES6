//phan import:
import { Student } from "../models/Student.js";
import { Employee } from "../models/Employee.js";
import { Customer } from "../models/Customer.js";
import { ListPerson } from "../controllers/ListPerson.js";
import { Validation } from "../models/Validation.js";
const listPerson = new ListPerson();
const validation = new Validation();
const domId = (id) => document.getElementById(id);
//phan UI truoc khi them person:
domId(`btnOpenAdd`).onclick = () => {
  lamMoiError();
  lamMoiInput();
  domId(`exampleModalLabel`).innerHTML = "Add Person";
  domId(`btnAdd`).innerHTML = "Add";
  domId(`type`).onchange = () => {
    const type = domId(`type`).value;
    if (type === "Student") {
      domId(`typeStudent`).style.display = "block";
      domId(`typeEmployee`).style.display = "none";
      domId(`typeCustomer`).style.display = "none";
    }

    if (type === "Employee") {
      domId(`typeStudent`).style.display = "none";
      domId(`typeEmployee`).style.display = "block";
      domId(`typeCustomer`).style.display = "none";
    }
    if (type === "Customer") {
      domId(`typeStudent`).style.display = "none";
      domId(`typeEmployee`).style.display = "none";
      domId(`typeCustomer`).style.display = "block";
    }
    if (type === "Chon Doi Tuong") {
      domId(`typeStudent`).style.display = "none";
      domId(`typeEmployee`).style.display = "none";
      domId(`typeCustomer`).style.display = "none";
    }
  };
  domId(`btnUpdate`).style.display = "none";
  domId(`btnAdd`).style.display = "block";
  themPerson();
};
//phan lay value:
const layThongTinStudent = () => {
  const code = domId(`code`).value;
  const name = domId(`name`).value;
  const address = domId(`address`).value;
  const email = domId(`email`).value;
  const type = domId(`type`).value;
  const toan = domId(`toan`).value;
  const ly = domId(`ly`).value;
  const hoa = domId(`hoa`).value;
  const student = new Student(code, name, address, email, type, toan, ly, hoa);
  return student;
};
const layThongTinEmployee = () => {
  const code = domId(`code`).value;
  const name = domId(`name`).value;
  const address = domId(`address`).value;
  const email = domId(`email`).value;
  const type = domId(`type`).value;
  const soNgayLamViec = domId(`soNgayLamViec`).value;
  const luongTheoNgay = domId(`luongTheoNgay`).value;
  const employee = new Employee(
    code,
    name,
    address,
    email,
    type,
    soNgayLamViec,
    luongTheoNgay
  );
  return employee;
};
const layThongTinCustomer = () => {
  const code = domId(`code`).value;
  const name = domId(`name`).value;
  const address = domId(`address`).value;
  const email = domId(`email`).value;
  const type = domId(`type`).value;
  const tenCongTy = domId(`tenCongTy`).value;
  const giaTriHoaDon = domId(`giaTriHoaDon`).value;
  const danhGia = domId(`danhGia`).value;
  const customer = new Customer(
    code,
    name,
    address,
    email,
    type,
    tenCongTy,
    giaTriHoaDon,
    danhGia
  );
  return customer;
};
//phan validation:
const themValidation = () => {
  let code = domId(`code`).value;
  let name = domId(`name`).value;
  let address = domId(`address`).value;
  let email = domId(`email`).value;
  let toan = domId(`toan`).value;
  let ly = domId(`ly`).value;
  let hoa = domId(`hoa`).value;
  let soNgayLamViec = domId(`soNgayLamViec`).value;
  let luongTheoNgay = domId(`luongTheoNgay`).value;
  let tenCongTy = domId(`tenCongTy`).value;
  let giaTriHoaDon = domId(`giaTriHoaDon`).value;
  let danhGia = domId(`danhGia`).value;
  let isValid = true;
  isValid &= validation.kiemTraSelect(
    "type",
    "errorType",
    "(*)Vui Lòng Chọn Đối Tượng"
  );
  isValid &=
    validation.kiemTraRong(code, "errorCode", "(*)Vui Lòng Nhập Code") &&
    validation.kiemTraThongTinDaTonTai(
      code,
      "errorCode",
      "(*)Code Đã Tồn Tại",
      listPerson.personList
    );
  isValid &=
    validation.kiemTraRong(name, "errorName", "(*)Vui Lòng Nhập Tên") &&
    validation.kiemTraPattern(
      name,
      "errorName",
      "(*)Vui Lòng Điền Chữ",
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
    );
  isValid &= validation.kiemTraRong(
    address,
    "errorAddress",
    "(*)Vui Lòng Nhập Địa Chỉ"
  );
  isValid &=
    validation.kiemTraRong(email, "errorEmail", "(*)Vui Lòng Nhập Email") &&
    validation.kiemTraPattern(
      email,
      "errorEmail",
      "(*)Vui Lòng Nhập Đúng Định Dạng Email",
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
  isValid &=
    validation.kiemTraRong(toan, "errorToan", "(*)Vui Lòng Nhập Điểm") &&
    validation.kiemTraPattern(
      toan,
      "errorToan",
      "(*)Vui Lòng Nhập Số Dương",
      /^[0-9]+$/
    );
  isValid &=
    validation.kiemTraRong(ly, "errorLy", "(*)Vui Lòng Nhập Điểm") &&
    validation.kiemTraPattern(
      ly,
      "errorLy",
      "(*)Vui Lòng Nhập Số Dương",
      /^[0-9]+$/
    );
  isValid &=
    validation.kiemTraRong(hoa, "errorHoa", "(*)Vui Lòng Nhập Điểm") &&
    validation.kiemTraPattern(
      hoa,
      "errorHoa",
      "(*)Vui Lòng Nhập Số Dương",
      /^[0-9]+$/
    );
  isValid &=
    validation.kiemTraRong(
      soNgayLamViec,
      "errorSoNgayLamViec",
      "(*)Vui Lòng Nhập Số Ngày Làm Việc"
    ) &&
    validation.kiemTraPattern(
      soNgayLamViec,
      "errorSoNgayLamViec",
      "(*)Vui Lòng Nhập Số Dương",
      /^[0-9]+$/
    );
  isValid &=
    validation.kiemTraRong(
      luongTheoNgay,
      "errorLuongTheoNgay",
      "(*)Vui Lòng Nhập Lương Theo Ngày"
    ) &&
    validation.kiemTraPattern(
      luongTheoNgay,
      "errorLuongTheoNgay",
      "(*)Vui Lòng Nhập Số Dương",
      /^[0-9]+$/
    );
  isValid &= validation.kiemTraRong(
    tenCongTy,
    "errorTenCongTy",
    "(*)Vui Lòng Nhập Tên Công Ty"
  );
  isValid &=
    validation.kiemTraRong(
      giaTriHoaDon,
      "errorGiaTriHoaDon",
      "(*)Vui Lòng Nhập Giá Trị Hóa Đơn"
    ) &&
    validation.kiemTraPattern(
      giaTriHoaDon,
      "errorGiaTriHoaDon",
      "(*)Vui Lòng Nhập Số Dương",
      /^[0-9]+$/
    );
  isValid &= validation.kiemTraRong(
    danhGia,
    "errorDanhGia",
    "(*)Vui Lòng Nhập Thông Tin Đánh Giá"
  );
  return isValid;
};
//phan them:
const themPerson = () => {
  //validate:
  themValidation();
  const keyUpThemPerson = () => {
    themValidation();
    domId(`btnAdd`).onclick = () => {
      // them:
      const type = domId(`type`).value;
      const student = layThongTinStudent();
      const employee = layThongTinEmployee();
      const customer = layThongTinCustomer();
      if (type === "Student") {
        listPerson.add(student);
      }
      if (type === "Employee") {
        listPerson.add(employee);
      }
      if (type === "Customer") {
        listPerson.add(customer);
      }
      saveData();
      domId(`btnClose`).click();
    };
  };
  domId(`code`).addEventListener("keyup", keyUpThemPerson);
  domId(`name`).addEventListener("keyup", keyUpThemPerson);
  domId(`address`).addEventListener("keyup", keyUpThemPerson);
  domId(`email`).addEventListener("keyup", keyUpThemPerson);
  domId(`toan`).addEventListener("keyup", keyUpThemPerson);
  domId(`ly`).addEventListener("keyup", keyUpThemPerson);
  domId(`hoa`).addEventListener("keyup", keyUpThemPerson);
  domId(`soNgayLamViec`).addEventListener("keyup", keyUpThemPerson);
  domId(`luongTheoNgay`).addEventListener("keyup", keyUpThemPerson);
  domId(`tenCongTy`).addEventListener("keyup", keyUpThemPerson);
  domId(`giaTriHoaDon`).addEventListener("keyup", keyUpThemPerson);
  domId(`danhGia`).addEventListener("keyup", keyUpThemPerson);
};
//phan render UI:
const renderUI = (data = listPerson.personList) => {
  const content = data.reduce((total, element, index, array) => {
    const {
      code,
      name,
      address,
      email,
      type,
      toan,
      ly,
      hoa,
      soNgayLamViec,
      luongTheoNgay,
      tenCongTy,
      giaTriHoaDon,
      danhGia,
    } = element;
    total += `
  <tr>
  <td>${code}</td>
  <td>${name}</td>
  <td>${address}</td>
  <td>${email}</td>
  `;
    if (type === "Student") {
      const student = new Student(
        code,
        name,
        address,
        email,
        type,
        toan,
        ly,
        hoa
      );
      total += student.render();
    }
    if (type === "Employee") {
      const employee = new Employee(
        code,
        name,
        address,
        email,
        type,
        soNgayLamViec,
        luongTheoNgay
      );
      total += employee.render();
    }
    if (type === "Customer") {
      const customer = new Customer(
        code,
        name,
        address,
        email,
        type,
        tenCongTy,
        giaTriHoaDon,
        danhGia
      );
      total += customer.render();
    }
    total += `<td><button class="btn btn-warning" onclick="SuaPerson('${code}')">Sua</button><button class="btn btn-danger" onclick="XoaPerson('${code}')">Xoa</button></td>
  </tr>
  `;
    return total;
  }, "");
  domId(`tbodyPerson`).innerHTML = content;
};
//phan LocalStorage
const setLocalStorage = () => {
  const stringify = JSON.stringify(listPerson.personList);
  localStorage.setItem("Person_list", stringify);
};
const getLocalStorage = () => {
  const stringify = localStorage.getItem("Person_list");
  if (stringify) {
    listPerson.personList = JSON.parse(stringify);
  }
};
//phan rut gon & van hanh data:
const saveData = () => {
  renderUI();
  setLocalStorage();
};
window.onload = () => {
  getLocalStorage();
  renderUI();
};
//phan xoa:
window.XoaPerson = (code) => {
  listPerson.delete(code);
  saveData();
};
//cap nhat:
const capNhatPerson = () => {
  domId(`btnUpdate`).onclick = () => {
    const type = domId(`type`).value;
    const student = layThongTinStudent();
    const employee = layThongTinEmployee();
    const customer = layThongTinCustomer();
    if (type === "Student") {
      listPerson.update(student);
    } else if (type === "Employee") {
      listPerson.update(employee);
    } else if (type === "Customer") {
      listPerson.update(customer);
    }
    saveData();
    //tra UI ve ban dau:
    domId(`type`).disabled = false;
    domId(`code`).disabled = false;
    domId(`btnUpdate`).style.display = "none";
    domId(`btnAdd`).style.display = "block";
    domId(`btnClose`).click();
  };
};
//phan sua:
window.SuaPerson = (userCode) => {
  domId(`btnOpenAdd`).click();
  domId(`exampleModalLabel`).innerHTML = "Update Person";
  domId(`btnAdd`).style.display = "none";
  domId(`btnUpdate`).style.display = "block";
  const user = listPerson.findById(userCode);
  //show value cap nhat:
  if (user.type === "Student") {
    domId(`typeStudent`).style.display = "block";
    domId(`typeEmployee`).style.display = "none";
    domId(`typeCustomer`).style.display = "none";

    domId(`type`).disabled = true;
    domId(`code`).disabled = true;
    domId(`code`).value = user.code;
    domId(`name`).value = user.name;
    domId(`address`).value = user.address;
    domId(`email`).value = user.email;
    domId(`type`).value = user.type;
    domId(`toan`).value = user.toan;
    domId(`ly`).value = user.ly;
    domId(`hoa`).value = user.hoa;
    //validate:
    const keyUpThemPerson = () => {
      themValidation();
      //cap nhat
      capNhatPerson();
    };
    domId(`code`).addEventListener("keyup", keyUpThemPerson);
    domId(`name`).addEventListener("keyup", keyUpThemPerson);
    domId(`address`).addEventListener("keyup", keyUpThemPerson);
    domId(`email`).addEventListener("keyup", keyUpThemPerson);
    domId(`toan`).addEventListener("keyup", keyUpThemPerson);
    domId(`ly`).addEventListener("keyup", keyUpThemPerson);
    domId(`hoa`).addEventListener("keyup", keyUpThemPerson);
    domId(`soNgayLamViec`).addEventListener("keyup", keyUpThemPerson);
    domId(`luongTheoNgay`).addEventListener("keyup", keyUpThemPerson);
    domId(`tenCongTy`).addEventListener("keyup", keyUpThemPerson);
    domId(`giaTriHoaDon`).addEventListener("keyup", keyUpThemPerson);
    domId(`danhGia`).addEventListener("keyup", keyUpThemPerson);
  } else if (user.type === "Employee") {
    domId(`typeStudent`).style.display = "none";
    domId(`typeEmployee`).style.display = "block";
    domId(`typeCustomer`).style.display = "none";

    domId(`type`).disabled = true;
    domId(`code`).disabled = true;
    domId(`code`).value = user.code;
    domId(`name`).value = user.name;
    domId(`address`).value = user.address;
    domId(`email`).value = user.email;
    domId(`type`).value = user.type;
    domId(`soNgayLamViec`).value = user.soNgayLamViec;
    domId(`luongTheoNgay`).value = user.luongTheoNgay;
    //validate:
    const keyUpThemPerson = () => {
      themValidation();
      //cap nhat
      capNhatPerson();
    };
    domId(`code`).addEventListener("keyup", keyUpThemPerson);
    domId(`name`).addEventListener("keyup", keyUpThemPerson);
    domId(`address`).addEventListener("keyup", keyUpThemPerson);
    domId(`email`).addEventListener("keyup", keyUpThemPerson);
    domId(`toan`).addEventListener("keyup", keyUpThemPerson);
    domId(`ly`).addEventListener("keyup", keyUpThemPerson);
    domId(`hoa`).addEventListener("keyup", keyUpThemPerson);
    domId(`soNgayLamViec`).addEventListener("keyup", keyUpThemPerson);
    domId(`luongTheoNgay`).addEventListener("keyup", keyUpThemPerson);
    domId(`tenCongTy`).addEventListener("keyup", keyUpThemPerson);
    domId(`giaTriHoaDon`).addEventListener("keyup", keyUpThemPerson);
    domId(`danhGia`).addEventListener("keyup", keyUpThemPerson);
  } else if (user.type === "Customer") {
    domId(`typeStudent`).style.display = "none";
    domId(`typeEmployee`).style.display = "none";
    domId(`typeCustomer`).style.display = "block";

    domId(`type`).disabled = true;
    domId(`code`).disabled = true;
    domId(`code`).value = user.code;
    domId(`name`).value = user.name;
    domId(`address`).value = user.address;
    domId(`email`).value = user.email;
    domId(`type`).value = user.type;
    domId(`tenCongTy`).value = user.tenCongTy;
    domId(`giaTriHoaDon`).value = user.giaTriHoaDon;
    domId(`danhGia`).value = user.danhGia;
    //validate:
    const keyUpThemPerson = () => {
      themValidation();
      //cap nhat
      capNhatPerson();
    };
    domId(`code`).addEventListener("keyup", keyUpThemPerson);
    domId(`name`).addEventListener("keyup", keyUpThemPerson);
    domId(`address`).addEventListener("keyup", keyUpThemPerson);
    domId(`email`).addEventListener("keyup", keyUpThemPerson);
    domId(`toan`).addEventListener("keyup", keyUpThemPerson);
    domId(`ly`).addEventListener("keyup", keyUpThemPerson);
    domId(`hoa`).addEventListener("keyup", keyUpThemPerson);
    domId(`soNgayLamViec`).addEventListener("keyup", keyUpThemPerson);
    domId(`luongTheoNgay`).addEventListener("keyup", keyUpThemPerson);
    domId(`tenCongTy`).addEventListener("keyup", keyUpThemPerson);
    domId(`giaTriHoaDon`).addEventListener("keyup", keyUpThemPerson);
    domId(`danhGia`).addEventListener("keyup", keyUpThemPerson);
  }
};
//phan loc:
domId(`fillterType`).onchange = () => {
  const type = domId(`fillterType`).value;
  const data = listPerson.fillterByType(type);
  renderUI(data);
};
domId(`fillterName`).onchange = () => {
  const name = domId(`fillterName`).value;
  let listName = listPerson.fillterByName(name);
  if (name === "AdenZ") {
    renderUI(listName);
  } else if (name === "ZdenA") {
    renderUI(listName);
  }
};
//reset error/value:
const lamMoiInput = () => {
  domId(`code`).value = "";
  domId(`name`).value = "";
  domId(`address`).value = "";
  domId(`email`).value = "";
  domId(`type`).selectedIndex = 0;
  domId(`toan`).value = "";
  domId(`ly`).value = "";
  domId(`hoa`).value = "";
  domId(`soNgayLamViec`).value = "";
  domId(`luongTheoNgay`).value = "";
  domId(`tenCongTy`).value = "";
  domId(`giaTriHoaDon`).value = "";
  domId(`danhGia`).value = "";
};
const lamMoiError = () => {
  domId(`errorCode`).innerHTML = "";
  domId(`errorName`).innerHTML = "";
  domId(`errorAddress`).innerHTML = "";
  domId(`errorEmail`).innerHTML = "";
  domId(`errorType`).innerHTML = "";
  domId(`errorToan`).innerHTML = "";
  domId(`errorLy`).innerHTML = "";
  domId(`errorHoa`).innerHTML = "";
  domId(`errorSoNgayLamViec`).innerHTML = "";
  domId(`errorLuongTheoNgay`).innerHTML = "";
  domId(`errorTenCongTy`).innerHTML = "";
  domId(`errorGiaTriHoaDon`).innerHTML = "";
  domId(`errorDanhGia`).innerHTML = "";
};
