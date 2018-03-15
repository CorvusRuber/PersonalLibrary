import { Data } from "@angular/router";

export interface ICommonItem {
  titolo?: string,
  autore?: string,
  anno?: { value: number, text: string },
  editore?: string,
  descrizione?: string,
  cover?: string,
  nome?: string,
  cognome?: string,
  nato?: { value: Date, text: string },
  morto?: { value: Date, text: string },
  img?: string,
  isbn?: string
}
