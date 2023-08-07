let domId = (id) => document.getElementById(id);
export class Validation {
  kiemTraSelect = (idSelect, errorId, mess) => {
    const selectType = domId(idSelect);
    if (selectType.selectedIndex !== 0) {
      domId(errorId).innerHTML = "";
      domId(errorId).style.display = "none";
      return true;
    }
    domId(errorId).innerHTML = mess;
    domId(errorId).style.display = "block";
    return false;
  };
  kiemTraRong = (value, errorId, mess) => {
    if (value === "") {
      domId(errorId).innerHTML = mess;
      domId(errorId).style.display = "block";
      return false;
    }
    domId(errorId).innerHTML = "";
    domId(errorId).style.display = "none";
    return true;
  };
  kiemTraPattern = (value, errorId, mess, letter) => {
    if (value.match(letter)) {
      domId(errorId).innerHTML = "";
      domId(errorId).style.display = "none";
      return true;
    }
    domId(errorId).innerHTML = mess;
    domId(errorId).style.display = "block";
    return false;
  };
  kiemTraThongTinDaTonTai = (value, errorId, mess, personList) => {
    const person = personList.find((element) => {
      return element.code;
    });
    if (value === person.code) {
      domId(errorId).innerHTML = mess;
      domId(errorId).style.display = "block";
      return false;
    } else if (value !== person.code) {
      domId(errorId).innerHTML = "";
      domId(errorId).style.display = "none";
      return true;
    }
  };
}
