import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { ConfigModule } from '@nestjs/config';
import { DbTypeOrmModule } from './modulos/db_type_orm/db_type_orm.module'; 
import { EjemploTypeModule } from './modulos/ejemplo_type/ejemplo_type.module';

@Module({
  imports: [ ConfigModule.forRoot(), DbTypeOrmModule, EjemploTypeModule,],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
