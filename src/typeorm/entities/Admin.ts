import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity('admin')
export class Admin{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User, { eager: true})
    @JoinColumn({ name: 'userId'})
    user: User;

    @Column()
    userId: number;
}