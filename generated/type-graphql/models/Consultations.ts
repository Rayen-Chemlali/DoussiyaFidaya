import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Consultation_lab_requests } from "../models/Consultation_lab_requests";
import { Doctors } from "../models/Doctors";
import { Instituts_medicaux } from "../models/Instituts_medicaux";
import { Patients } from "../models/Patients";
import { Prescriptions } from "../models/Prescriptions";
import { Rdvs } from "../models/Rdvs";
import { ConsultationsCount } from "../resolvers/outputs/ConsultationsCount";

@TypeGraphQL.ObjectType("Consultations", {})
export class Consultations {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  section?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  notes!: string[];

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  measures?: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  doctor_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  institut_medical_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  prescription_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;

  consultation_lab_requests?: Consultation_lab_requests[];

  prescriptions?: Prescriptions | null;

  instituts_medicaux?: Instituts_medicaux | null;

  patients?: Patients;

  doctors?: Doctors | null;

  rdvs?: Rdvs | null;

  @TypeGraphQL.Field(_type => ConsultationsCount, {
    nullable: true
  })
  _count?: ConsultationsCount | null;
}
