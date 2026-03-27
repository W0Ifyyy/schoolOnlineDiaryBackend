import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./Student";
import { Subject } from "./Subject";
import { Teacher } from "./Teacher";

export enum GradeCategory {
    Test = "test",
    Homework = "homework",
    Activity = "activity",
    Exam = "exam"
}

@Entity('grade')
export class Grade {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Student, { eager: true })
    student: Student;

    @Column()
    studentId: number;

    @ManyToOne(() => Subject, { eager: true })
    subject: Subject;

    @Column()
    subjectId: number;

    @ManyToOne(() => Teacher, { eager: true })
    teacher: Teacher;

    @Column()
    teacherId: number;

    @Column({ type: 'decimal', precision: 4, scale: 2 })
    value: number;

    @Column({ default: 1 })
    weight: number;

    @Column({ type: 'enum', enum: GradeCategory })
    category: GradeCategory;

    @Column({ nullable: true })
    description: string;

    @CreateDateColumn()
    gradedAt: Date;
}
