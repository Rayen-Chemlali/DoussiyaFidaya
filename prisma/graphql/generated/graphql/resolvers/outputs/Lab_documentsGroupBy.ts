import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCountAggregate } from "../outputs/Lab_documentsCountAggregate";
import { Lab_documentsMaxAggregate } from "../outputs/Lab_documentsMaxAggregate";
import { Lab_documentsMinAggregate } from "../outputs/Lab_documentsMinAggregate";
import { lab_documents_status_enum } from "../../enums/lab_documents_status_enum";

@TypeGraphQL.ObjectType("Lab_documentsGroupBy", {})
export class Lab_documentsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completed_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes!: string | null;

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
  section!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  laboratory_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lab_request_id!: string | null;

  @TypeGraphQL.Field(_type => Lab_documentsCountAggregate, {
    nullable: true
  })
  _count!: Lab_documentsCountAggregate | null;

  @TypeGraphQL.Field(_type => Lab_documentsMinAggregate, {
    nullable: true
  })
  _min!: Lab_documentsMinAggregate | null;

  @TypeGraphQL.Field(_type => Lab_documentsMaxAggregate, {
    nullable: true
  })
  _max!: Lab_documentsMaxAggregate | null;
}
