import { Entity, Column, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';

import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { InstitutMedical } from '../../institut-medicals/entities/institut-medical.entity';
import { User } from '../../users/entities/user.entity';

export enum Specialty {
  MEDECINE_GENERALE = 'generaliste',
  CARDIOLOGIE = 'cardiologue',
  DERMATOLOGIE = 'dermatologue',
  GYNECOLOGIE = 'gynecologue',
  PEDIATRIE = 'pediatre',
  ORTHOPEDIE = 'orthopediste',
  PSYCHIATRIE = 'psychiatre',
  OPHTALMOLOGIE = 'ophtalmologue',
  OTORHINOLARYNGOLOGIE = 'otorhinolaryngologue',
  NEUROLOGIE = 'neurologue',
  UROLOGIE = 'urologue',
  ENDOCRINOLOGIE = 'endocrinologue',
  GASTROENTEROLOGIE = 'gastroenterologue',
  RHEUMATOLOGIE = 'rheumatologue',
  ANESTHESIOLOGIE = 'anesthesiste',
  RADIOLOGIE = 'radiologue',
  ONCOLOGIE = 'oncologue',
  CHIRURGIE = 'chirurgien',
  NUTRITION = 'nutritionniste',
  PHYSIOTHERAPIE = 'physiotherapeute',
  PSYCHOLOGIE = 'psychologue',
  SEXOLOGIE = 'sexologue',
  GERIATRIE = 'geriatre',
  ALLERGOLOGIE = 'allergologue',
  HEMATOLOGIE = 'hematologue',
  NEPHROLOGIE = 'nephrologue',
  PNEUMOLOGIE = 'pneumologue',
  DENTISTERIE = 'dentiste',
  ORTHODONTIE = 'orthodontiste',
  AUTRE = 'autre',
}
registerEnumType(Specialty, {
  name: 'Specialty',
  description: 'Les specialites medicales disponibles',
})
@ObjectType({implements: InstitutMedical})
@Entity('doctors')
export class Doctor extends InstitutMedical {
  @Field()
  @Column({ type: 'text', nullable: true })
  bio: string;

  @Field(() => [String])
  @Column({ type: 'text', array: true, nullable: true })
  education: string[];

  @Field(() => [String])
  @Column({ type: 'text', array: true, nullable: true })
  experience: string[];

  @Field()
  @Column({ type: 'text', nullable: false })
  first_name: string;

  @Field(() => [String])
  @Column({ type: 'text', array: true, nullable: true })
  languages: string[];

  @Field()
  @Column({ type: 'text', nullable: false })
  last_name: string;

  @Field()
  @Column({ type: 'text', nullable: true })
  profile_image: string;

  @Field()
  @Column({ type: 'enum',enum:Specialty, nullable: false })
  specialty: Specialty;

  @Field(() => User)
  @OneToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Field(() => [InstitutMedical])
  @ManyToMany(() => InstitutMedical)
  @JoinTable({
    name: 'doctor_instituts',
    joinColumn: { name: 'doctor_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'institut_medical_id', referencedColumnName: 'id' },
  })
  instituts: InstitutMedical[];
}