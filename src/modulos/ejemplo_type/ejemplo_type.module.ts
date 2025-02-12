import { Module } from '@nestjs/common';
import { CrudController } from './controller/crud/crud.controller';
import { EstadosService } from './servicios/estados/estados.service';
import { Estado } from '../db_type_orm/modelos/estados.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Estado])],
  controllers: [CrudController],
  providers: [EstadosService],
  exports: [EstadosService], // Exporta el servicio para que otros módulos lo usen
})
export class EjemploTypeModule {}
