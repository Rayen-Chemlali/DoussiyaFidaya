import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Doctors } from "../models/Doctors";
import { Instituts_medicaux } from "../models/Instituts_medicaux";
import { Lab_requests } from "../models/Lab_requests";
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

  prescriptions?: Prescriptions | null;

  instituts_medicaux?: Instituts_medicaux | null;

  patients?: Patients;

  doctors?: Doctors | null;

  rdvs?: Rdvs | null;

  lab_requests?: Lab_requests[];

  @TypeGraphQL.Field(_type => ConsultationsCount, {
    nullable: true
  })
  _count?: ConsultationsCount | null;
}
