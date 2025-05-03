import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Doctor_institutsCreateManyInput", {})
export class Doctor_institutsCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  doctor_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  institut_medical_id!: string;
}
