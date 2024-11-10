import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { Produto } from '../interfaces/produto.interface';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
    constructor(private produtoService: ProdutosService) {}

    @Get()
    findAll(): Produto[] {
        return this.produtoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Produto {
        return this.produtoService.findOne(id);
    }

    @Post()
    create(@Body() produto: Produto): Produto {
        return this.produtoService.create(produto);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() produto: Produto): Produto {
        return this.produtoService.update(id, produto);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number): void {
        this.produtoService.delete(id);
    }
}
