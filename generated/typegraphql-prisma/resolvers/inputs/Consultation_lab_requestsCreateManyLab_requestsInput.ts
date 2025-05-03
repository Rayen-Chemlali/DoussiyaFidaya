import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Consultation_lab_requestsCreateManyLab_requestsInput", {})
export class Consultation_lab_requestsCreateManyLab_requestsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  consultation_id!: string;
}
