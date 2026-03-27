import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Class } from "./Class";
import { Parent } from "./Parent";


@Entity('student')
export class Student{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User, { eager: true })
    @JoinColumn()
    user: User;

    @Column()
    userId: number;

    @ManyToOne(() => Class, {eager: true})
    class: Class;

    @Column()
    classId: number;

    @ManyToMany(() => Parent, {eager: true})
    @JoinTable()
    parents: Parent[]

    @Column({nullable: true, type: 'date'})
    dateOfBirth: Date;

}