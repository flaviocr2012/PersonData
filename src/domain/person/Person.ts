import { IPerson } from "./IPerson";

export class Person implements IPerson {
  cpfCnpj: string;
  birthDate: string;

constructor( props?:{
  cpfCnpj: string;
  birthDate: string;
})  {

this.cpfCnpj = this.cpfCnpj;
this.birthDate = this.birthDate;  
}
 
}


