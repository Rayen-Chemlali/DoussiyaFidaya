import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { lab_documents_status_enum } from "../../enums/lab_documents_status_enum";

@TypeGraphQL.InputType("Lab_documentsCreateManyLaboratoriesInput", {})
export class Lab_documentsCreateManyLaboratoriesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completed_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  requested_at!: Date;

  @TypeGraphQL.Field(_type => lab_documents_status_enum, {
    nullable: false
  })
  status!: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  section?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lab_request_id?: string | undefined;
}
