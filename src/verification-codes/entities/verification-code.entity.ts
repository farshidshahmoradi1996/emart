import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VerificationCode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;
}
