import { AREA } from "../utils/enums";

export class Curso {
  private _descricao: string;
  private _area: AREA;

  public get descricao(): string {
    return this._descricao;
  }
  public set descricao(value: string) {
    this._descricao = value;
  }

  public get area(): AREA {
    return this._area;
  }
  public set area(value: AREA) {
    this._area = value;
  }

  // CRIAR CONSTRUTORES PARA A CLASSE
}
