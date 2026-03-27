import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Teacher } from "./Teacher";

@Entity('class')
export class Class{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    year: number;

    @ManyToOne(() => Teacher, { eager: true})
    formTutor: Teacher

    @Column()
    formTutorId: number;
}