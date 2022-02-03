
export class PersonDTO {

  person: {
    name: string;
    cpfCnpj: string;
    birthDate: string;
    cellPhone: string;
  }
  address: {
    street: string;
    number: string;
    city: string;
    state: string;
    zipCode: string;
  }
}