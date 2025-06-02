import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Verification_tokensUpdateWithoutUserInput } from "../inputs/Verification_tokensUpdateWithoutUserInput";
import { Verification_tokensWhereInput } from "../inputs/Verification_tokensWhereInput";

@TypeGraphQL.InputType("Verification_tokensUpdateToOneWithWhereWithoutUserInput", {})
export class Verification_tokensUpdateToOneWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => Verification_tokensWhereInput, {
    nullable: true
  })
  where?: Verification_tokensWhereInput | undefined;

  @TypeGraphQL.Field(_type => Verification_tokensUpdateWithoutUserInput, {
    nullable: false
  })
  data!: Verification_tokensUpdateWithoutUserInput;
}
