import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Ctscan_resultsCountAggregate } from "../outputs/Ctscan_resultsCountAggregate";
import { Ctscan_resultsMaxAggregate } from "../outputs/Ctscan_resultsMaxAggregate";
import { Ctscan_resultsMinAggregate } from "../outputs/Ctscan_resultsMinAggregate";

@TypeGraphQL.ObjectType("AggregateCtscan_results", {})
export class AggregateCtscan_results {
  @TypeGraphQL.Field(_type => Ctscan_resultsCountAggregate, {
    nullable: true
  })
  _count!: Ctscan_resultsCountAggregate | null;

  @TypeGraphQL.Field(_type => Ctscan_resultsMinAggregate, {
    nullable: true
  })
  _min!: Ctscan_resultsMinAggregate | null;

  @TypeGraphQL.Field(_type => Ctscan_resultsMaxAggregate, {
    nullable: true
  })
  _max!: Ctscan_resultsMaxAggregate | null;
}
