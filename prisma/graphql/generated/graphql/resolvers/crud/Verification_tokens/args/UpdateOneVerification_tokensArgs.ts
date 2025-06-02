import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Verification_tokensUpdateInput } from "../../../inputs/Verification_tokensUpdateInput";
import { Verification_tokensWhereUniqueInput } from "../../../inputs/Verification_tokensWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneVerification_tokensArgs {
  @TypeGraphQL.Field(_type => Verification_tokensUpdateInput, {
    nullable: false
  })
  data!: Verification_tokensUpdateInput;

  @TypeGraphQL.Field(_type => Verification_tokensWhereUniqueInput, {
    nullable: false
  })
  where!: Verification_tokensWhereUniqueInput;
}
