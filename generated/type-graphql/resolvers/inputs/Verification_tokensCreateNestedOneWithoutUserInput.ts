import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Verification_tokensCreateOrConnectWithoutUserInput } from "../inputs/Verification_tokensCreateOrConnectWithoutUserInput";
import { Verification_tokensCreateWithoutUserInput } from "../inputs/Verification_tokensCreateWithoutUserInput";
import { Verification_tokensWhereUniqueInput } from "../inputs/Verification_tokensWhereUniqueInput";

@TypeGraphQL.InputType("Verification_tokensCreateNestedOneWithoutUserInput", {})
export class Verification_tokensCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => Verification_tokensCreateWithoutUserInput, {
    nullable: true
  })
  create?: Verification_tokensCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => Verification_tokensCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: Verification_tokensCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => Verification_tokensWhereUniqueInput, {
    nullable: true
  })
  connect?: Verification_tokensWhereUniqueInput | undefined;
}
