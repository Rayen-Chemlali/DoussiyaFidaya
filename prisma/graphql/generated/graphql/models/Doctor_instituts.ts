import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Doctors } from "../models/Doctors";
import { Instituts_medicaux } from "../models/Instituts_medicaux";

@TypeGraphQL.ObjectType("Doctor_instituts", {})
export class Doctor_instituts {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  doctor_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  institut_medical_id!: string;

  doctors?: Doctors;

  instituts_medicaux?: Instituts_medicaux;
}
