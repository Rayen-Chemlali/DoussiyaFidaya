import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Consultation_lab_requests } from "../models/Consultation_lab_requests";
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
  priority?: "low" | "medium" | "high" | null;

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

  consultation_lab_requests?: Consultation_lab_requests[];

  lab_documents?: Lab_documents[];

  doctors?: Doctors | null;

  patients?: Patients;

  @TypeGraphQL.Field(_type => Lab_requestsCount, {
    nullable: true
  })
  _count?: Lab_requestsCount | null;
}
