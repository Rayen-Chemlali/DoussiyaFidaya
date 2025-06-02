import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Verification_tokensWhereInput } from "../../../inputs/Verification_tokensWhereInput";

@TypeGraphQL.ArgsType()
export class UsersValidation_tokenArgs {
  @TypeGraphQL.Field(_type => Verification_tokensWhereInput, {
    nullable: true
  })
  where?: Verification_tokensWhereInput | undefined;
}
