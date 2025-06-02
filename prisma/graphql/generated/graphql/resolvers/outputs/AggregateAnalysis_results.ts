import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Analysis_resultsCountAggregate } from "../outputs/Analysis_resultsCountAggregate";
import { Analysis_resultsMaxAggregate } from "../outputs/Analysis_resultsMaxAggregate";
import { Analysis_resultsMinAggregate } from "../outputs/Analysis_resultsMinAggregate";

@TypeGraphQL.ObjectType("AggregateAnalysis_results", {})
export class AggregateAnalysis_results {
  @TypeGraphQL.Field(_type => Analysis_resultsCountAggregate, {
    nullable: true
  })
  _count!: Analysis_resultsCountAggregate | null;

  @TypeGraphQL.Field(_type => Analysis_resultsMinAggregate, {
    nullable: true
  })
  _min!: Analysis_resultsMinAggregate | null;

  @TypeGraphQL.Field(_type => Analysis_resultsMaxAggregate, {
    nullable: true
  })
  _max!: Analysis_resultsMaxAggregate | null;
}
