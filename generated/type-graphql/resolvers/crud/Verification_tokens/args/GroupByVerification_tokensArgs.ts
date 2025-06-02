import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Verification_tokensOrderByWithAggregationInput } from "../../../inputs/Verification_tokensOrderByWithAggregationInput";
import { Verification_tokensScalarWhereWithAggregatesInput } from "../../../inputs/Verification_tokensScalarWhereWithAggregatesInput";
import { Verification_tokensWhereInput } from "../../../inputs/Verification_tokensWhereInput";
import { Verification_tokensScalarFieldEnum } from "../../../../enums/Verification_tokensScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVerification_tokensArgs {
  @TypeGraphQL.Field(_type => Verification_tokensWhereInput, {
    nullable: true
  })
  where?: Verification_tokensWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Verification_tokensOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Verification_tokensOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Verification_tokensScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "token" | "numberofTries" | "createdAt" | "expireAt">;

  @TypeGraphQL.Field(_type => Verification_tokensScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Verification_tokensScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
