import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { lab_documents_status_enum } from "../../enums/lab_documents_status_enum";

@TypeGraphQL.ObjectType("Lab_documentsMaxAggregate", {})
export class Lab_documentsMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completed_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  requested_at!: Date | null;

  @TypeGraphQL.Field(_type => lab_documents_status_enum, {
    nullable: true
  })
  status!: "pending" | "in_progress" | "completed" | "cancelled" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  section!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  patient_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  laboratory_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lab_request_id!: string | null;
}
