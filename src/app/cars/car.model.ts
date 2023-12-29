export class Car {
  public make: string;
  public model: string;
  public year: number;
  public color: string;
  public imgUrl: string;
  public price: number;

  constructor(make: string, model: string, year: number, color: string, imgUrl: string, price: number) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.imgUrl = imgUrl,
    this.price = price || 0
  }
}
