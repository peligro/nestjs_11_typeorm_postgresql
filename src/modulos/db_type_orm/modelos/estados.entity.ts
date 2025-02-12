import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class Estado{

    @PrimaryGeneratedColumn()
    id: number;
    @Column({name: 'nombre', type: "varchar", length: 100})
    nombre: string;
}