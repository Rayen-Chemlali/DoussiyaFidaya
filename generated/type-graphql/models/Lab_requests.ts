import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Consultations } from "../models/Consultations";
import { Doctors } from "../models/Doctors";
import { Lab_documents } from "../models/Lab_documents";
import { Patients } from "../models/Patients";
import { lab_requests_priority_enum } from "../enums/lab_requests_priority_enum";
import { Lab_requestsCount } from "../resolvers/outputs/Lab_requestsCount";

@TypeGraphQL.ObjectType("Lab_requests", {})
export class Lab_requests {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => lab_requests_priority_enum, {
    nullable: true
  })
  priority?: "LOW" | "MEDIUM" | "HIGH" | "URGENT" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  doctor_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;

  lab_documents?: Lab_documents[];

  doctors?: Doctors | null;

  patients?: Patients;

  consultations?: Consultations[];

  @TypeGraphQL.Field(_type => Lab_requestsCount, {
    nullable: true
  })
  _count?: Lab_requestsCount | null;
}
