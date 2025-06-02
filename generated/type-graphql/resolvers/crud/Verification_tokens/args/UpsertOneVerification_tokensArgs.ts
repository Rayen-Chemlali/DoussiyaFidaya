import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Verification_tokensCreateInput } from "../../../inputs/Verification_tokensCreateInput";
import { Verification_tokensUpdateInput } from "../../../inputs/Verification_tokensUpdateInput";
import { Verification_tokensWhereUniqueInput } from "../../../inputs/Verification_tokensWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneVerification_tokensArgs {
  @TypeGraphQL.Field(_type => Verification_tokensWhereUniqueInput, {
    nullable: false
  })
  where!: Verification_tokensWhereUniqueInput;

  @TypeGraphQL.Field(_type => Verification_tokensCreateInput, {
    nullable: false
  })
  create!: Verification_tokensCreateInput;

  @TypeGraphQL.Field(_type => Verification_tokensUpdateInput, {
    nullable: false
  })
  update!: Verification_tokensUpdateInput;
}
