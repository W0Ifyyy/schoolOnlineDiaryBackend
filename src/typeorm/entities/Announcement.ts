import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Class } from "./Class";

@Entity('announcement')
export class Announcement {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, { eager: true })
    author: User;

    @Column()
    authorId: number;

    @ManyToOne(() => Class, { eager: true, nullable: true })
    class: Class;

    @Column({ nullable: true })
    classId: number;

    @Column()
    title: string;

    @Column({ type: 'text' })
    content: string;

    @CreateDateColumn()
    publishedAt: Date;
}
