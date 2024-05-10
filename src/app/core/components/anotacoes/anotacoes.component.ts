import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anotacoes',
  templateUrl: './anotacoes.component.html',
  styleUrls: ['./anotacoes.component.scss']
})
export class AnotacoesComponent implements OnInit {

  protected anotacao: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
