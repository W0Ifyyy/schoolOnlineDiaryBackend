import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./Student";
import { Lesson } from "./Lesson";

export enum AttendanceStatus {
    Present = "present",
    Absent = "absent",
    Late = "late",
    Excused = "excused"
}

@Entity('attendance')
export class Attendance {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Student, { eager: true })
    student: Student;

    @Column()
    studentId: number;

    @ManyToOne(() => Lesson, { eager: true })
    lesson: Lesson;

    @Column()
    lessonId: number;

    @Column({ type: 'date' })
    date: Date;

    @Column({ type: 'enum', enum: AttendanceStatus })
    status: AttendanceStatus;

    @Column({ nullable: true })
    excuse: string;
}
