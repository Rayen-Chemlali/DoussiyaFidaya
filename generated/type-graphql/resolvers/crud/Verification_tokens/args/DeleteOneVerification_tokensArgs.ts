import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Verification_tokensWhereUniqueInput } from "../../../inputs/Verification_tokensWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneVerification_tokensArgs {
  @TypeGraphQL.Field(_type => Verification_tokensWhereUniqueInput, {
    nullable: false
  })
  where!: Verification_tokensWhereUniqueInput;
}
