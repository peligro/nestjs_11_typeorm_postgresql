import {Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne} from 'typeorm';
import { Perfiles } from './perfiles.entity';
@Entity()
export class Usuarios{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'username', type: "varchar", length: 100})
    username: string;

    @Column({name: 'correo', type: "varchar", length: 100})
    correo: string;

    @ManyToOne((type)=>Perfiles, perfiles =>perfiles.id, {cascade: true, eager: true, nullable: false})
    @JoinColumn({name: 'perfiles_id'})
    perfiles_id: Perfiles
 
 

  
}