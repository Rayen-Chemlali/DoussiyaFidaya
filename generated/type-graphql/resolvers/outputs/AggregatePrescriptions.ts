import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCountAggregate } from "../outputs/PrescriptionsCountAggregate";
import { PrescriptionsMaxAggregate } from "../outputs/PrescriptionsMaxAggregate";
import { PrescriptionsMinAggregate } from "../outputs/PrescriptionsMinAggregate";

@TypeGraphQL.ObjectType("AggregatePrescriptions", {})
export class AggregatePrescriptions {
  @TypeGraphQL.Field(_type => PrescriptionsCountAggregate, {
    nullable: true
  })
  _count!: PrescriptionsCountAggregate | null;

  @TypeGraphQL.Field(_type => PrescriptionsMinAggregate, {
    nullable: true
  })
  _min!: PrescriptionsMinAggregate | null;

  @TypeGraphQL.Field(_type => PrescriptionsMaxAggregate, {
    nullable: true
  })
  _max!: PrescriptionsMaxAggregate | null;
}
