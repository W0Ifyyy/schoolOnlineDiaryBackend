import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity('message')
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, { eager: true })
    sender: User;

    @Column()
    senderId: number;

    @ManyToOne(() => User, { eager: true })
    recipient: User;

    @Column()
    recipientId: number;

    @Column()
    subject: string;

    @Column({ type: 'text' })
    content: string;

    @Column({ default: false })
    isRead: boolean;

    @CreateDateColumn()
    sentAt: Date;
}
