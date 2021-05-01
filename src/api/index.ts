import faker from "faker";
faker.locale = "pt_BR";

interface IPerson {
  name: string;
  phone: string;
}

const data: IPerson[] = [];
const DATA_LENGTH = 10;

for (let i = 0; i < DATA_LENGTH; i++) {
  const person = {
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber("(##) #####-####"),
  };
  data.push(person);
}
console.log(data);

export default data;
