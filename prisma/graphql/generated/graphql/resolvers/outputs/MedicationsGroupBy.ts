import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MedicationsAvgAggregate } from "../outputs/MedicationsAvgAggregate";
import { MedicationsCountAggregate } from "../outputs/MedicationsCountAggregate";
import { MedicationsMaxAggregate } from "../outputs/MedicationsMaxAggregate";
import { MedicationsMinAggregate } from "../outputs/MedicationsMinAggregate";
import { MedicationsSumAggregate } from "../outputs/MedicationsSumAggregate";

@TypeGraphQL.ObjectType("MedicationsGroupBy", {})
export class MedicationsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dosage!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  duration!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  frequency!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  quantity!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  prescription_id!: string;

  @TypeGraphQL.Field(_type => MedicationsCountAggregate, {
    nullable: true
  })
  _count!: MedicationsCountAggregate | null;

  @TypeGraphQL.Field(_type => MedicationsAvgAggregate, {
    nullable: true
  })
  _avg!: MedicationsAvgAggregate | null;

  @TypeGraphQL.Field(_type => MedicationsSumAggregate, {
    nullable: true
  })
  _sum!: MedicationsSumAggregate | null;

  @TypeGraphQL.Field(_type => MedicationsMinAggregate, {
    nullable: true
  })
  _min!: MedicationsMinAggregate | null;

  @TypeGraphQL.Field(_type => MedicationsMaxAggregate, {
    nullable: true
  })
  _max!: MedicationsMaxAggregate | null;
}
