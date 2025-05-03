import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Analysis_resultsOrderByWithRelationInput } from "../../../inputs/Analysis_resultsOrderByWithRelationInput";
import { Analysis_resultsWhereInput } from "../../../inputs/Analysis_resultsWhereInput";
import { Analysis_resultsWhereUniqueInput } from "../../../inputs/Analysis_resultsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAnalysis_resultsArgs {
  @TypeGraphQL.Field(_type => Analysis_resultsWhereInput, {
    nullable: true
  })
  where?: Analysis_resultsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Analysis_resultsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Analysis_resultsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Analysis_resultsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Analysis_resultsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
