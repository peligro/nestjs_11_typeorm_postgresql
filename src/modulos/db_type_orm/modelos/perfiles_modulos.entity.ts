import {Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne} from 'typeorm';
import { Perfiles } from './perfiles.entity';
import { Modulos } from './modulos.entity';
@Entity()
export class PerfilesModulos{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne((type)=>Perfiles, perfiles =>perfiles.id, {cascade: true, eager: true, nullable: false})
    @JoinColumn({name: 'perfiles_id'})
    perfiles_id: Perfiles


    @ManyToOne((type)=>Modulos, modulos =>modulos.id, {cascade: true, eager: true, nullable: false})
    @JoinColumn({name: 'modulos_id'})
    modulos_id: Modulos
 

  
}