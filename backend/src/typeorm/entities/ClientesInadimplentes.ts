import { Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export default class ClientesInadimplentes {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    nome: string;

    @Column()
    desde: Date;

    @Column()
    valor: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

}