export interface Ricetta {
    titolo: string,
    preparazione: string,
    quantitaPersone: string,
    ingredienti: string,
    image: string,
    categoria: {
      id: number,
      categoria: string,
    },
}