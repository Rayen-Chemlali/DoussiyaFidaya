import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxCreateOrConnectWithoutAuthorizationsInput } from "../inputs/Instituts_medicauxCreateOrConnectWithoutAuthorizationsInput";
import { Instituts_medicauxCreateWithoutAuthorizationsInput } from "../inputs/Instituts_medicauxCreateWithoutAuthorizationsInput";
import { Instituts_medicauxWhereUniqueInput } from "../inputs/Instituts_medicauxWhereUniqueInput";

@TypeGraphQL.InputType("Instituts_medicauxCreateNestedOneWithoutAuthorizationsInput", {})
export class Instituts_medicauxCreateNestedOneWithoutAuthorizationsInput {
  @TypeGraphQL.Field(_type => Instituts_medicauxCreateWithoutAuthorizationsInput, {
    nullable: true
  })
  create?: Instituts_medicauxCreateWithoutAuthorizationsInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxCreateOrConnectWithoutAuthorizationsInput, {
    nullable: true
  })
  connectOrCreate?: Instituts_medicauxCreateOrConnectWithoutAuthorizationsInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxWhereUniqueInput, {
    nullable: true
  })
  connect?: Instituts_medicauxWhereUniqueInput | undefined;
}
