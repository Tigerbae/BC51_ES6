export class ListPerson {
  personList = [];
  add = (Person) => {
    this.personList = [...this.personList, Person];
  };
  delete = (code) => {
    const index = this.personList.findIndex((element) => {
      return element.code === code;
    });
    this.personList.splice(index, 1);
  };
  findById = (code) => {
    const existedPerson = this.personList.find((element) => {
      return element.code === code;
    });
    return existedPerson;
  };
  update = (Person) => {
    const index = this.personList.findIndex((element) => {
      return element.code === Person.code;
    });
    this.personList[index] = Person;
  };
  fillterByType = (type) => {
    const data = this.personList.filter((element) => {
      if (type === "all") {
        return true;
      }
      return element.type === type;
    });
    return data;
  };
  fillterByName = (name) => {
    if (name === "AdenZ") {
      let data = this.personList.sort((a, b) => {
        
        if (a.name.split('').pop() < b.name.split('').pop()) {
          return -1;
        } else if (a.name.split('').pop() > b.name.split('').pop()) {
          return 1;
        }
        return 0;
      });
      return data;
    } else if (name === "ZdenA") {
      let data = this.personList.sort((a, b) => {
        if (a.name.split('').pop() > b.name.split('').pop()) {
          return -1;
        } else if (a.name.split('').pop() < b.name.split('').pop()) {
          return 1;
        }
        return 0;
      });
      return data;
    }
  };
}
