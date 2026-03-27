import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Class } from "./Class";
import { Subject } from "./Subject";
import { Teacher } from "./Teacher";

export enum DayOfWeek {
    Monday = "monday",
    Tuesday = "tuesday",
    Wednesday = "wednesday",
    Thursday = "thursday",
    Friday = "friday"
}

@Entity('lesson')
export class Lesson {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Class, { eager: true })
    class: Class;

    @Column()
    classId: number;

    @ManyToOne(() => Subject, { eager: true })
    subject: Subject;

    @Column()
    subjectId: number;

    @ManyToOne(() => Teacher, { eager: true })
    teacher: Teacher;

    @Column()
    teacherId: number;

    @Column({ type: 'enum', enum: DayOfWeek })
    dayOfWeek: DayOfWeek;

    @Column({ type: 'time' })
    startTime: string;

    @Column({ type: 'time' })
    endTime: string;
}
