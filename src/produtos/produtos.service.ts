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

    findAll(): Produto[] {
        return this.produtos;
    }

    findOne(id: number): Produto {
        return this.produtos.find(produto => produto.id === id);
    }

    update(id: number, produto: Produto): Produto {
        const index = this.produtos.findIndex(produto => produto.id === id);
        produto.id = id;
        this.produtos[index] = produto;
        return produto;
    }

    delete(id: number): void {
        this.produtos = this.produtos.filter(produto => produto.id !== id);
    }
}