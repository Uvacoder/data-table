import faker from "faker";
faker.locale = "pt_BR";

const dataUsers = [];
const DATA_LENGTH = 10;

for (let i = 0; i < DATA_LENGTH; i++) {
  const person = {
    id: i,
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber("(##) #####-####"),
  };
  dataUsers.push(person);
}

export default dataUsers;
