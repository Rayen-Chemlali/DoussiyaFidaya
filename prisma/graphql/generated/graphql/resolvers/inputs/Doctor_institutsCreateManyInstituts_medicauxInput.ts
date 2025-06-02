import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Doctor_institutsCreateManyInstituts_medicauxInput", {})
export class Doctor_institutsCreateManyInstituts_medicauxInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  doctor_id!: string;
}
