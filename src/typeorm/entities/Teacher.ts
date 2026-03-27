import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Subject } from "./Subject";


@Entity('teacher')
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User, { eager: true})
    @JoinColumn()
    user: User;

    @Column()
    userId: number;

    @ManyToMany(() => Subject, { eager: true })
    @JoinTable()
    subjects: Subject[]

}