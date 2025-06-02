import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_resultsCountAggregate } from "../outputs/Lab_resultsCountAggregate";
import { Lab_resultsMaxAggregate } from "../outputs/Lab_resultsMaxAggregate";
import { Lab_resultsMinAggregate } from "../outputs/Lab_resultsMinAggregate";

@TypeGraphQL.ObjectType("AggregateLab_results", {})
export class AggregateLab_results {
  @TypeGraphQL.Field(_type => Lab_resultsCountAggregate, {
    nullable: true
  })
  _count!: Lab_resultsCountAggregate | null;

  @TypeGraphQL.Field(_type => Lab_resultsMinAggregate, {
    nullable: true
  })
  _min!: Lab_resultsMinAggregate | null;

  @TypeGraphQL.Field(_type => Lab_resultsMaxAggregate, {
    nullable: true
  })
  _max!: Lab_resultsMaxAggregate | null;
}
