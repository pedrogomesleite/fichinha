

export interface Jogador {
  nome: string;
  vida: number;
  raca: string;
  passado: string;
  nivel: number;
  classeArmadura: number;
  atributos: Atributo[];
  pericias: Pericia[];
}

export interface Atributo {
  nome: string;
  modificador: number; // +2 de força
  descricao: string;
}

export class Pericia {
  atributo: Atributo;
  nome: string;
  nivel: number; // valorExibido = Pericia.nivel + Pericia.atributo.modificador
  descricao: string;
  modificador: number = 0;

  constructor(
    atributo: Atributo,
    nome: string,
    nivel: number,
    descricao: string) {
    this.atributo = atributo;
    this.nome = nome;
    this.nivel = nivel;
    this.descricao = descricao;
    this.modificador = atributo.modificador + nivel;

  }
}

let agilidade: Atributo = {
  descricao: "agilidade de mais slk",
  modificador: 0,
  nome: "agilidade",
}

let forca: Atributo = {
  descricao: "tadala na mente",
  modificador: 0,
  nome: "força",
}

export let acrobacia: Pericia = {
  modificador: 0,
  atributo: agilidade,
  descricao: "Pular dos prédio, mortal sei lá",
  nivel: 1,
  nome: "acrobacia"
}
export let atletismo: Pericia = {
  modificador: 0,
  atributo: forca,
  descricao: "corre carai",
  nivel: 1,
  nome: "atletismo",

}



