import { GenderEnum } from '../enums/Gender.enum';

export class Gender {
  id: string;
  name: string;

  constructor(id: string) {
    this.id = id;
    this.name = GenderEnum[id as keyof typeof GenderEnum];
  }
}
