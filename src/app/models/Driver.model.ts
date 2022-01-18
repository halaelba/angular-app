import { GenderEnum } from '../enums/Gender.enum';
import { Gender } from './Gender.model';
import { Language } from './Language.model';

const MAN_PIC = 'https://randomuser.me/api/portraits/men/';
const WOMAN_PIC = 'https://randomuser.me/api/portraits/women/';

export class Driver {
  name: string;
  cityOrigin: string;
  phone: string;
  gender: Gender;
  info: string;
  language: Language;
  image: string; // not in the api but assigned to a random picture

  constructor(name: any, cityOrigin: any, phone: any, gender: any, info: any, language: any) {
    this.name = name;
    this.cityOrigin = cityOrigin;
    this.phone = phone;
    this.gender = new Gender(gender);
    this.info = info;
    this.language = new Language(language);
    this.image = WOMAN_PIC + this.getRandomImage();
    if (this.gender.id === GenderEnum.male) {
      this.image = MAN_PIC + this.getRandomImage();
    }
  }

  getRandomImage() {
    return Math.round(Math.random() * 20) + '.jpg';
  }
}
