import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Consultations } from "../models/Consultations";
import { Doctors } from "../models/Doctors";
import { Medications } from "../models/Medications";
import { Patients } from "../models/Patients";
import { prescriptions_status_enum } from "../enums/prescriptions_status_enum";
import { PrescriptionsCount } from "../resolvers/outputs/PrescriptionsCount";

@TypeGraphQL.ObjectType("Prescriptions", {})
export class Prescriptions {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  instructions?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_signed!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  section?: string | null;

  @TypeGraphQL.Field(_type => prescriptions_status_enum, {
    nullable: false
  })
  status!: "Pending" | "Approved" | "Rejected";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  doctor_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;

  consultations?: Consultations | null;

  medications?: Medications[];

  doctors?: Doctors | null;

  patients?: Patients;

  @TypeGraphQL.Field(_type => PrescriptionsCount, {
    nullable: true
  })
  _count?: PrescriptionsCount | null;
}
