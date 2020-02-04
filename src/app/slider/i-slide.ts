export enum SLIDE_TYPES {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO'
}

export interface ISlide {
  type: SLIDE_TYPES;
  time: number;
  src: string;
}
