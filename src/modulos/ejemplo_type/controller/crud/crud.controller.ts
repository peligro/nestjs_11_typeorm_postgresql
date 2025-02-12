import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EstadosService } from '../../servicios/estados/estados.service';
import { EstadoDto } from '../../dto/estado.dto';

@Controller('crud')
export class CrudController {


    constructor(private estadosService: EstadosService){}

    @Get()
    metodoGet():{}
    {
        return this.estadosService.getDatos();
    }   

    @Get(':id') 
    metodoGetPorId(@Param() params): {} { 
    return this.estadosService.getDato(params.id);
    }
    
    @Post()
    metodoPost(@Body() dto: EstadoDto)
    {
        return this.estadosService.addDatos(dto);
    }
}
