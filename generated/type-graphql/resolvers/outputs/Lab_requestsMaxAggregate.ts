import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { lab_requests_priority_enum } from "../../enums/lab_requests_priority_enum";

@TypeGraphQL.ObjectType("Lab_requestsMaxAggregate", {})
export class Lab_requestsMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type!: string | null;

  @TypeGraphQL.Field(_type => lab_requests_priority_enum, {
    nullable: true
  })
  priority!: "LOW" | "MEDIUM" | "HIGH" | "URGENT" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  doctor_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  patient_id!: string | null;
}
