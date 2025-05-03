import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("RdvsCreateManyPatientsInput", {})
export class RdvsCreateManyPatientsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  time!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  doctor_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  consultation_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rdv_request_id?: string | undefined;
}
