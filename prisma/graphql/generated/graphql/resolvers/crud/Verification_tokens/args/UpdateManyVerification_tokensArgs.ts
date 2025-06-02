import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Verification_tokensUpdateManyMutationInput } from "../../../inputs/Verification_tokensUpdateManyMutationInput";
import { Verification_tokensWhereInput } from "../../../inputs/Verification_tokensWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVerification_tokensArgs {
  @TypeGraphQL.Field(_type => Verification_tokensUpdateManyMutationInput, {
    nullable: false
  })
  data!: Verification_tokensUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Verification_tokensWhereInput, {
    nullable: true
  })
  where?: Verification_tokensWhereInput | undefined;
}
