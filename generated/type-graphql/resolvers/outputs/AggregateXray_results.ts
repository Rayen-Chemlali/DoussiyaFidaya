import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Xray_resultsCountAggregate } from "../outputs/Xray_resultsCountAggregate";
import { Xray_resultsMaxAggregate } from "../outputs/Xray_resultsMaxAggregate";
import { Xray_resultsMinAggregate } from "../outputs/Xray_resultsMinAggregate";

@TypeGraphQL.ObjectType("AggregateXray_results", {})
export class AggregateXray_results {
  @TypeGraphQL.Field(_type => Xray_resultsCountAggregate, {
    nullable: true
  })
  _count!: Xray_resultsCountAggregate | null;

  @TypeGraphQL.Field(_type => Xray_resultsMinAggregate, {
    nullable: true
  })
  _min!: Xray_resultsMinAggregate | null;

  @TypeGraphQL.Field(_type => Xray_resultsMaxAggregate, {
    nullable: true
  })
  _max!: Xray_resultsMaxAggregate | null;
}
