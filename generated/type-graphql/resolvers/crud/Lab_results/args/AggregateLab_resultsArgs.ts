import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_resultsOrderByWithRelationInput } from "../../../inputs/Lab_resultsOrderByWithRelationInput";
import { Lab_resultsWhereInput } from "../../../inputs/Lab_resultsWhereInput";
import { Lab_resultsWhereUniqueInput } from "../../../inputs/Lab_resultsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateLab_resultsArgs {
  @TypeGraphQL.Field(_type => Lab_resultsWhereInput, {
    nullable: true
  })
  where?: Lab_resultsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Lab_resultsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Lab_resultsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Lab_resultsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Lab_resultsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
