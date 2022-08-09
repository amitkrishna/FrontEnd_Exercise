export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}// As a type 
// interface defenition
// prefix with an I 

// * Two ways to use an Interface :
/*
As A type:
export interface IProduct {
  productId: number;
  productName: string;
}

products: IProduct [] = [];


As a  feature set:
export interfce DoTiming{
  count: number;
  start(index: number): void;
  stop(): void;
}
export class myComponent implements DoTimings{
  count: number = 0;
  start(index: number): void{
    ...
  }
  stop(): void {
    ...
  }
}


Declaring an Interface as a Data Type:

export interface IProduct{
  productId: number;
  productName: string;
  productCode: string;
  releaseDataa: Date;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}


*/
