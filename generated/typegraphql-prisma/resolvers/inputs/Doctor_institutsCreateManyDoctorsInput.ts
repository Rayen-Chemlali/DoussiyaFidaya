import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Doctor_institutsCreateManyDoctorsInput", {})
export class Doctor_institutsCreateManyDoctorsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  institut_medical_id!: string;
}
