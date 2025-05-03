import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCountAggregate } from "../outputs/ConsultationsCountAggregate";
import { ConsultationsMaxAggregate } from "../outputs/ConsultationsMaxAggregate";
import { ConsultationsMinAggregate } from "../outputs/ConsultationsMinAggregate";

@TypeGraphQL.ObjectType("ConsultationsGroupBy", {})
export class ConsultationsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  section!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  notes!: string[] | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  measures!: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  doctor_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  institut_medical_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  prescription_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;

  @TypeGraphQL.Field(_type => ConsultationsCountAggregate, {
    nullable: true
  })
  _count!: ConsultationsCountAggregate | null;

  @TypeGraphQL.Field(_type => ConsultationsMinAggregate, {
    nullable: true
  })
  _min!: ConsultationsMinAggregate | null;

  @TypeGraphQL.Field(_type => ConsultationsMaxAggregate, {
    nullable: true
  })
  _max!: ConsultationsMaxAggregate | null;
}
