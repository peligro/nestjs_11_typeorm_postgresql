import { HttpException, HttpStatus, Injectable } from '@nestjs/common'; 
import { Estado } from 'src/modulos/db_type_orm/modelos/estados.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstadoDto } from '../../dto/estado.dto';
@Injectable()
export class EstadosService {
    constructor(
        @InjectRepository(Estado)
        private repositorio: Repository<Estado>
    ){}

    async getDatos():Promise<Estado[]>
    {
        return await this.repositorio.find(
            {
                order:
                {
                    id:"desc"
                }
            });
    }
    async getDato(id: number): Promise<Estado>
    {
        let datos = await this.repositorio.findOne(
            {
                where:
                {
                    id:id
                }
            });
        if(!datos)
        {
            throw new HttpException(
                {
                    estado: HttpStatus.BAD_REQUEST,
                    mensaje: 'El registro no existe en el sistema'
                }, HttpStatus.BAD_REQUEST, {
                    cause: {name:"", message:""}
                });
        }else
        {
            return datos;
        }
    }

    async addDatos(dto: EstadoDto)
    {
        let existe = await this.repositorio.findOne(
            {
                where:
                {
                    nombre: dto.nombre
                }
            });
        if(existe)
        {
            throw new HttpException(`El registro ${dto.nombre} ya existe en el sistema`, HttpStatus.BAD_REQUEST);
        }else
        {
            try {
                let save = this.repositorio.create(dto);
                return this.repositorio.save(save);
            } catch (error) {
                throw new HttpException(`Ocurrió un error inesperado`, HttpStatus.BAD_REQUEST);
            }
            
        }
    }
}
