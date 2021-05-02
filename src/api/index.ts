import { IUser } from "@/types";
import faker from "faker";
faker.locale = "pt_BR";

const data: IUser[] = [];
const DATA_LENGTH = 10;

for (let i = 0; i < DATA_LENGTH; i++) {
  const person = {
    id: i,
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber("(##) #####-####"),
  };
  data.push(person);
}

export default data;
