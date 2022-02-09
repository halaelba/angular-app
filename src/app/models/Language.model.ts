import { LanguageEnum } from '../enums/Language.enum';

export default class Language {
  private _id: string;
  private _name: string;

  constructor(id: string) {
    this._id = id;
    this._name = LanguageEnum[id as keyof typeof LanguageEnum];
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }
}
