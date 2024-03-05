export type orientation = "cote" | "derriere" | "dessus";
export type couleur = "bleu" | "vert" | "violet";
export const couleursNoms: { [key in couleur]: string } = {
  bleu: "Bleu",
  vert: "Vert",
  violet: "Violet",
  
};


export interface Chaussure {
  bandes?: couleur;
  cuir?: couleur;
  mousse?: couleur;
}
export interface ChaussureImage extends Chaussure {
  orientation?: orientation;
}
