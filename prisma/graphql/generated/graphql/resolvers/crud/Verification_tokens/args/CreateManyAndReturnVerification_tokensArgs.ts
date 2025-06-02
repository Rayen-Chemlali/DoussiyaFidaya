import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Verification_tokensCreateManyInput } from "../../../inputs/Verification_tokensCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnVerification_tokensArgs {
  @TypeGraphQL.Field(_type => [Verification_tokensCreateManyInput], {
    nullable: false
  })
  data!: Verification_tokensCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
