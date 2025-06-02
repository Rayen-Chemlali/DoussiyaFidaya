import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Consultation_lab_requestsCreateManyInput", {})
export class Consultation_lab_requestsCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  consultation_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lab_request_id!: string;
}
