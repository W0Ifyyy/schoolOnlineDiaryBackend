import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./Student";
import { Teacher } from "./Teacher";

export enum NoteType {
    Positive = "positive",
    Negative = "negative",
    Neutral = "neutral"
}

@Entity('note')
export class Note {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Student, { eager: true })
    student: Student;

    @Column()
    studentId: number;

    @ManyToOne(() => Teacher, { eager: true })
    teacher: Teacher;

    @Column()
    teacherId: number;

    @Column({ type: 'enum', enum: NoteType })
    type: NoteType;

    @Column({ type: 'text' })
    content: string;

    @CreateDateColumn()
    createdAt: Date;
}
