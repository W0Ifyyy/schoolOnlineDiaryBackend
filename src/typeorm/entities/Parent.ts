import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity('parent')
export class Parent{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User, { eager: true })
    @JoinColumn()
    user: User;

    @Column()
    userId: number;
}