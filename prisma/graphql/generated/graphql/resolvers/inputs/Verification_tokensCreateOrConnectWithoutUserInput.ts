import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Verification_tokensCreateWithoutUserInput } from "../inputs/Verification_tokensCreateWithoutUserInput";
import { Verification_tokensWhereUniqueInput } from "../inputs/Verification_tokensWhereUniqueInput";

@TypeGraphQL.InputType("Verification_tokensCreateOrConnectWithoutUserInput", {})
export class Verification_tokensCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => Verification_tokensWhereUniqueInput, {
    nullable: false
  })
  where!: Verification_tokensWhereUniqueInput;

  @TypeGraphQL.Field(_type => Verification_tokensCreateWithoutUserInput, {
    nullable: false
  })
  create!: Verification_tokensCreateWithoutUserInput;
}
