import { TURNO } from "../utils/enums";
import { Curso } from "./Curso";

export class Turma {
  readonly id: number;
  private _descricao: string;
  private _turno: TURNO;
  private _curso: Curso;

  public get descricao(): string {
    return this._descricao;
  }
  public set descricao(value: string) {
    this._descricao = value;
  }

  public get turno(): TURNO {
    return this._turno;
  }
  public set turno(value: TURNO) {
    this._turno = value;
  }

  public get curso(): Curso {
    return this._curso;
  }
  public set curso(value: Curso) {
    this._curso = value;
  }

  // CRIAR CONSTRUTORES PARA A CLASSE
}
