import faker from "faker";
import { v4 as uuidv4 } from "uuid";
faker.locale = "pt_BR";

const dataUsers = [];
const DATA_LENGTH = 10;

for (let i = 0; i < DATA_LENGTH; i++) {
  const person = {
    id: uuidv4(),
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber("(##) #####-####"),
  };
  dataUsers.push(person);
}

export default dataUsers;
