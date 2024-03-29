import { Component } from '@angular/core';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrl: './form-produtos.component.css'
})
export class FormProdutosComponent {
  produto: any = {id:0, nome:"", preco:0};
  listProdutos: any[] =[];
  
  cadastrar() {
    this.listProdutos.push(this.produto);
    this.produto = {id:0, nome:"", preco:0};
  }
}
