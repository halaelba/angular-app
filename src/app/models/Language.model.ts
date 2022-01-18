import { LanguageEnum } from '../enums/Language.enum';

export class Language {
  id: string;
  name: string;

  constructor(id: string) {
    this.id = id;
    this.name = LanguageEnum[id as keyof typeof LanguageEnum];
  }
}
