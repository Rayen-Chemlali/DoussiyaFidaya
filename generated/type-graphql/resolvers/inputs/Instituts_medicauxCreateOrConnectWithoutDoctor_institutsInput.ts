import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxCreateWithoutDoctor_institutsInput } from "../inputs/Instituts_medicauxCreateWithoutDoctor_institutsInput";
import { Instituts_medicauxWhereUniqueInput } from "../inputs/Instituts_medicauxWhereUniqueInput";

@TypeGraphQL.InputType("Instituts_medicauxCreateOrConnectWithoutDoctor_institutsInput", {})
export class Instituts_medicauxCreateOrConnectWithoutDoctor_institutsInput {
  @TypeGraphQL.Field(_type => Instituts_medicauxWhereUniqueInput, {
    nullable: false
  })
  where!: Instituts_medicauxWhereUniqueInput;

  @TypeGraphQL.Field(_type => Instituts_medicauxCreateWithoutDoctor_institutsInput, {
    nullable: false
  })
  create!: Instituts_medicauxCreateWithoutDoctor_institutsInput;
}
