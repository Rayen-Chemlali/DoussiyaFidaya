import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("Consultation_lab_requestsMaxAggregate", {})
export class Consultation_lab_requestsMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  consultation_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lab_request_id!: string | null;
}
