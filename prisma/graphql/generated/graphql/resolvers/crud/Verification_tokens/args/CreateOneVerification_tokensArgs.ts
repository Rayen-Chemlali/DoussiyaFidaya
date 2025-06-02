import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Verification_tokensCreateInput } from "../../../inputs/Verification_tokensCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneVerification_tokensArgs {
  @TypeGraphQL.Field(_type => Verification_tokensCreateInput, {
    nullable: false
  })
  data!: Verification_tokensCreateInput;
}
