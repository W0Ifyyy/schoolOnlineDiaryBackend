import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

enum UserRoles{
    Admin = "admin",
    Teacher = "teacher",
    Student = "student",
    Parent = "parent"
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    role: UserRoles;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    phone: string;

    @Column()
    avatarUrl: string;

    @Column({ type: "timestamp" })
    createdAt: Date;

    @Column({ type: "timestamp" })
    updatedAt: Date;
    
}