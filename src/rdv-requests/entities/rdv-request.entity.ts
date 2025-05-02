import { Field, GraphQLISODateTime, ObjectType } from "@nestjs/graphql";
import { GraphQLTime, GraphQLUUID } from "graphql-scalars";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Patient } from "../../patients/entities/patient.entity";
import { Doctor } from "../../doctors/entities/doctor.entity";
import { Rdv } from "../../rdvs/entities/rdv.entity";

enum RdvStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
}

@Entity('rdv-requests')
@ObjectType()
export class RdvRequest {
  @Field(() => GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => GraphQLISODateTime)
  @Column({ type: 'timestamp with time zone', nullable: false })
  date: Date;

  @Field(() => GraphQLTime)
  @Column({ type: 'time', nullable: false })
  time: string;

    @Field()
    @Column({ type: 'text', nullable: false })
    Motif: string;

    @Field()
    @Column({ type: 'text', nullable: false })
    Status: RdvStatus;
 

  @Field(() => Patient)
  @ManyToOne(() => Patient, { nullable: false })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @Field(() => Doctor)
  @ManyToOne(() => Doctor, { nullable: true })
  @JoinColumn({ name: 'doctor_id' })
  doctor: Doctor;

    @Field(() => Rdv)
    @OneToOne(() => Rdv, { nullable: true })
    @JoinColumn({ name: 'rdv_id' })
    rdv: Rdv;

}