import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Use a Cabeça: Java',
      resumo: 'Use a Cabeça: Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java 5.0 e 6.0.',
      autores: ['Bert Bates', 'Kathy Sierra']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Java, Como Programar',
      resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel.',
      autores: ['Paul Deitel', 'Harvey Deitel']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Core Java for the Impatient',
      resumo: 'Readers familiar with Java get a thorough treatment of the language and its most important libraries.',
      autores: ['Cay Horstmann']
    }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    // Novo código = maior código existente + 1 (ou 1, se a lista estiver vazia)
    const codigos = this.livros.map((l) => l.codigo);
    const maiorCodigo = codigos.length > 0 ? Math.max(...codigos) : 0;
    livro.codigo = maiorCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex((l) => l.codigo === codigo);
    // findIndex devolve -1 quando não encontra; sem este teste o splice(-1, 1) removeria o último livro
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}
