import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert} from 'typeorm';
@Entity()
export class Modulos{

    @PrimaryGeneratedColumn()
    id: number;
    @Column({name: 'nombre', type: "varchar", length: 100})
    nombre: string;
 

  
}