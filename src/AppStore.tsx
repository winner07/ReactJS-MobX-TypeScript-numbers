import {observable} from "mobx";

export class AppStore {
  @observable a: number[] = [];
  @observable b: number[] = [];
  @observable c: number[] = [];
  @observable d: number[] = [];
  requestsCount = 0;

  constructor(){
    this.getData();
  }

  getA(): Promise<number[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.requestsCount == 0 ? [1, 1, 1, 1] : [5, 5, 5, 5]);
      }, 50);
    });
  }

  getB(): Promise<number[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([2, 2, 2, 2]);
      }, 100);
    });
  }

  getC(): Promise<number[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([3, 3, 3, 3]);
      }, 150);
    });
  }

  getD(a: number[], b: number[]): number[] {
    return a.map((n, i) => n * b[i]);
  }

  getData(): void{
    Promise.all([this.getA(), this.getB(), this.getC()]).then((numbers) => {
      this.a = numbers[0];
      this.b = numbers[1];
      this.c = numbers[2];
      this.d = this.getD(this.a, this.b);
      this.requestsCount++;
    });
  }

  recalc(): void{
    this.getData();
  }
}
