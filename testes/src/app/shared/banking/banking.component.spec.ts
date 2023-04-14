import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { ListComponent } from '../investiments/components/list/list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent, ListComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) getPoupanca(): shoud have poupanca = 50', () =>{
    expect(component.getPoupanca).toEqual(50);
  });

  it('(U) getCarteira(): shoud have carteira = 10', () =>{
    expect(component.getCarteira).toEqual(10);
  });

  it('(U) setSacar(): shoud transfer poupanca from carteira', () => {
   component.setSacar('10');
   fixture.detectChanges();

   expect(component.getPoupanca).toEqual(40);
   expect(component.getCarteira).toEqual(20);
  });

  it('(U) setSacar(): shoud transfer poupancas dont have a string(isNaN) or value > poupanca', () => {
   expect(component.setSacar('string')).not.toBeTruthy();
   expect(component.setSacar('100')).not.toBeTruthy();
   expect(component.getPoupanca).toEqual(50);
   expect(component.getCarteira).toEqual(10);
  });

  it('(U)  setDepositar(): shoud transfer carteira from poupanca', () => {
    component.setDepositar('10');
    fixture.detectChanges();

    expect(component.getPoupanca).toEqual(60);
    expect(component.getCarteira).toEqual(0);
  });

  it('(U) setDepositar(): shoud transfer carteira dont have a string(isNaN) or value > carteira', () => {
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.setDepositar('100')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(50);
    expect(component.getCarteira).toEqual(10);
   });

  it('(I) setDepositar(): shoud transfer Carteira from poupanca', () => {
    let el = fixture.debugElement.nativeElement;
    el.querySelector('#input-depositar').value = "10"
    el.querySelector('#depositar').click();
    fixture.detectChanges();

    expect(el.querySelector('#get-Poupanca').textContent).toEqual('60');

    expect(component.getCarteira).toEqual(0);
  });

  it('(I) setsacar(): shoud transfer Poupanca from Carteira ', () => {
    let el = fixture.debugElement.nativeElement;
    el.querySelector('#input-sacar').value = "10"
    el.querySelector('#sacar').click();
    fixture.detectChanges();

    expect(el.querySelector('#get-sacar').textContent).toEqual('20');

    expect(component.getPoupanca).toEqual(40);
  });


});
