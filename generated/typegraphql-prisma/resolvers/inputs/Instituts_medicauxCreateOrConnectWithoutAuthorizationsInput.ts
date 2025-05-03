import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxCreateWithoutAuthorizationsInput } from "../inputs/Instituts_medicauxCreateWithoutAuthorizationsInput";
import { Instituts_medicauxWhereUniqueInput } from "../inputs/Instituts_medicauxWhereUniqueInput";

@TypeGraphQL.InputType("Instituts_medicauxCreateOrConnectWithoutAuthorizationsInput", {})
export class Instituts_medicauxCreateOrConnectWithoutAuthorizationsInput {
  @TypeGraphQL.Field(_type => Instituts_medicauxWhereUniqueInput, {
    nullable: false
  })
  where!: Instituts_medicauxWhereUniqueInput;

  @TypeGraphQL.Field(_type => Instituts_medicauxCreateWithoutAuthorizationsInput, {
    nullable: false
  })
  create!: Instituts_medicauxCreateWithoutAuthorizationsInput;
}
