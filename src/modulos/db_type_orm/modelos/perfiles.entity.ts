import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class Perfiles{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'nombre', type: "varchar", length: 100})
    nombre: string;

    @Column({ type: 'text', nullable: true })
    descripcion: string; 
 

  
}