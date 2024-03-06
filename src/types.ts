export interface Basket {
  semelle?: string;
  empeigne?: string;
  pointe?: string;
  oeillet?: string;
  bande?: string;
  languette?: string;
  lacet?: string;
  trimestre?: string;
}

export const colors = {
  "#000000": "Noir",
  "#FFFFFF": "Blanc",
  "#FF0000": "Rouge",
  "#00FF00": "Vert",
  "#0000FF": "Bleu",
  "#FFFF00": "Jaune",
  "#FF00FF": "Magenta",
  "#00FFFF": "Cyan",
  "#C0C0C0": "Gris clair",
  "#808080": "Gris",
  "#800000": "Marron",
  "#808000": "Olive",
};

export const materiaux = [

{
  value: "https://picsum.photos/205/300",
  label: "Cuir",
},
{
  value: "https://picsum.photos/200/300",
  label: "Tissu",
},
{
  value: "https://picsum.photos/203/300",
  label: "Synthétique",
}

]