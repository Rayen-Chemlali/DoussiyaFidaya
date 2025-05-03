import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Instituts_medicaux } from "../models/Instituts_medicaux";
import { Patients } from "../models/Patients";
import { authorizations_level_enum } from "../enums/authorizations_level_enum";

@TypeGraphQL.ObjectType("Authorizations", {})
export class Authorizations {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => authorizations_level_enum, {
    nullable: false
  })
  level!: "general" | "speciality" | "full_access";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  institut_medical_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;

  instituts_medicaux?: Instituts_medicaux | null;

  patients?: Patients;
}
