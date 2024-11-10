import { Injectable } from '@nestjs/common';
import { Produto } from '../interfaces/produto.interface';

@Injectable()
export class ProdutosService {
    private produtos: Produto[] = [];
    private id: number = 1;

    create(produto: Produto): Produto {
        produto.id = this.id++;
        this.produtos.push(produto);
        return produto;
    }
}
