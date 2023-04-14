import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit {
  pessoa: string = 'Cleilson José'
  private poupanca: number = 50;
  private carteira: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  get getPoupanca(): number{
    return this.poupanca;
  }


  get getCarteira(): number{
    return this.carteira;
  }

  setSacar(value: string): number | undefined{
    const sacar = Number(value);
    if(isNaN(sacar) || sacar > this.poupanca){
      return;
    }

    this.poupanca -= sacar;
    return this.carteira += sacar;
  }

  setDepositar(value: string): number | undefined{
    const depositar = Number(value);
    if(isNaN(depositar) || depositar > this.carteira){
      return;
    }
    this.carteira -= depositar;
    return this.poupanca += depositar;
  }
}
