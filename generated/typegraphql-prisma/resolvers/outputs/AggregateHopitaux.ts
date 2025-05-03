import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HopitauxCountAggregate } from "../outputs/HopitauxCountAggregate";
import { HopitauxMaxAggregate } from "../outputs/HopitauxMaxAggregate";
import { HopitauxMinAggregate } from "../outputs/HopitauxMinAggregate";

@TypeGraphQL.ObjectType("AggregateHopitaux", {})
export class AggregateHopitaux {
  @TypeGraphQL.Field(_type => HopitauxCountAggregate, {
    nullable: true
  })
  _count!: HopitauxCountAggregate | null;

  @TypeGraphQL.Field(_type => HopitauxMinAggregate, {
    nullable: true
  })
  _min!: HopitauxMinAggregate | null;

  @TypeGraphQL.Field(_type => HopitauxMaxAggregate, {
    nullable: true
  })
  _max!: HopitauxMaxAggregate | null;
}
