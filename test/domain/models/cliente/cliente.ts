export class IClientes {
  id?: string;
  name: string;
  dpi: string;
  constructor(id: string, name: string, dpi: string) {
    this.id = id;
    this.name = name;
    this.dpi = dpi;
  }
}

export class reqClient {
  chanel: string;
  td_digit: number;
  dpi: string;
  pin: string;
  constructor(chanel: string, td_digit: number, dpi: string, pin: string) {
    this.chanel = chanel;
    this.td_digit = td_digit;
    this.dpi = dpi;
    this.pin = pin;
  }
}

export interface resClient {
  email: string;
  phone: number;
  cobis_client: number;
  name: string;
  td_number: string;
}
/*export class resClient {
  email?: string;
  phone?: number;
  cobis_client?: number;
  name?: string;
  td_number?: string;
  constructor(
    email?: string,
    phone?: number,
    cobis_cliente?: number,
    name?: string,
    td_number?: string
  ) {
    this.email = email;
    this.phone = phone;
    this.cobis_client = cobis_cliente;
    this.name = name;
    this.td_number = td_number;
  }
}*/
