import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Verification_tokensCreateOrConnectWithoutUserInput } from "../inputs/Verification_tokensCreateOrConnectWithoutUserInput";
import { Verification_tokensCreateWithoutUserInput } from "../inputs/Verification_tokensCreateWithoutUserInput";
import { Verification_tokensUpdateToOneWithWhereWithoutUserInput } from "../inputs/Verification_tokensUpdateToOneWithWhereWithoutUserInput";
import { Verification_tokensUpsertWithoutUserInput } from "../inputs/Verification_tokensUpsertWithoutUserInput";
import { Verification_tokensWhereInput } from "../inputs/Verification_tokensWhereInput";
import { Verification_tokensWhereUniqueInput } from "../inputs/Verification_tokensWhereUniqueInput";

@TypeGraphQL.InputType("Verification_tokensUpdateOneWithoutUserNestedInput", {})
export class Verification_tokensUpdateOneWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => Verification_tokensCreateWithoutUserInput, {
    nullable: true
  })
  create?: Verification_tokensCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => Verification_tokensCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: Verification_tokensCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => Verification_tokensUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: Verification_tokensUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => Verification_tokensWhereInput, {
    nullable: true
  })
  disconnect?: Verification_tokensWhereInput | undefined;

  @TypeGraphQL.Field(_type => Verification_tokensWhereInput, {
    nullable: true
  })
  delete?: Verification_tokensWhereInput | undefined;

  @TypeGraphQL.Field(_type => Verification_tokensWhereUniqueInput, {
    nullable: true
  })
  connect?: Verification_tokensWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Verification_tokensUpdateToOneWithWhereWithoutUserInput, {
    nullable: true
  })
  update?: Verification_tokensUpdateToOneWithWhereWithoutUserInput | undefined;
}
