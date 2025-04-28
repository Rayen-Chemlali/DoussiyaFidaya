import { Entity, Column, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { InstitutMedical } from './institut-medical.entity';
import { User } from './user.entity';

@Entity('doctors')
export class Doctor extends InstitutMedical {
  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column({ type: 'text', array: true, nullable: true })
  education: string[];

  @Column({ type: 'text', array: true, nullable: true })
  experience: string[];

  @Column({ type: 'text', nullable: false })
  first_name: string;

  @Column({ type: 'text', array: true, nullable: true })
  languages: string[];

  @Column({ type: 'text', nullable: false })
  last_name: string;

  @Column({ type: 'text', nullable: true })
  profile_image: string;

  @Column({ type: 'text', nullable: false })
  specialty: string;

  @OneToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToMany(() => InstitutMedical)
  @JoinTable({
    name: 'doctor_instituts',
    joinColumn: { name: 'doctor_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'institut_medical_id', referencedColumnName: 'id' },
  })
  instituts: InstitutMedical[];
}