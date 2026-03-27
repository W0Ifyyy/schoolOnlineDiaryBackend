import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Subject')
export class Subject{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    description: string;
}