import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Verification_tokensCreateWithoutUserInput } from "../inputs/Verification_tokensCreateWithoutUserInput";
import { Verification_tokensUpdateWithoutUserInput } from "../inputs/Verification_tokensUpdateWithoutUserInput";
import { Verification_tokensWhereInput } from "../inputs/Verification_tokensWhereInput";

@TypeGraphQL.InputType("Verification_tokensUpsertWithoutUserInput", {})
export class Verification_tokensUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => Verification_tokensUpdateWithoutUserInput, {
    nullable: false
  })
  update!: Verification_tokensUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => Verification_tokensCreateWithoutUserInput, {
    nullable: false
  })
  create!: Verification_tokensCreateWithoutUserInput;

  @TypeGraphQL.Field(_type => Verification_tokensWhereInput, {
    nullable: true
  })
  where?: Verification_tokensWhereInput | undefined;
}
