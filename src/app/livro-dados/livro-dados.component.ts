import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html'
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro();
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    // Seleciona a primeira editora por padrão, para o <select> nunca começar sem valor
    if (this.editoras.length > 0) {
      this.livro.codEditora = this.editoras[0].codEditora;
    }
  }

  incluir = () => {
    // Um autor por linha: separa, remove espaços e descarta linhas em branco
    this.livro.autores = this.autoresForm
      .split('\n')
      .map((autor) => autor.trim())
      .filter((autor) => autor.length > 0);
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  };
}
