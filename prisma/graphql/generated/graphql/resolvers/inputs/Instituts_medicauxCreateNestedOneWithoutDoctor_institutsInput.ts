import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxCreateOrConnectWithoutDoctor_institutsInput } from "../inputs/Instituts_medicauxCreateOrConnectWithoutDoctor_institutsInput";
import { Instituts_medicauxCreateWithoutDoctor_institutsInput } from "../inputs/Instituts_medicauxCreateWithoutDoctor_institutsInput";
import { Instituts_medicauxWhereUniqueInput } from "../inputs/Instituts_medicauxWhereUniqueInput";

@TypeGraphQL.InputType("Instituts_medicauxCreateNestedOneWithoutDoctor_institutsInput", {})
export class Instituts_medicauxCreateNestedOneWithoutDoctor_institutsInput {
  @TypeGraphQL.Field(_type => Instituts_medicauxCreateWithoutDoctor_institutsInput, {
    nullable: true
  })
  create?: Instituts_medicauxCreateWithoutDoctor_institutsInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxCreateOrConnectWithoutDoctor_institutsInput, {
    nullable: true
  })
  connectOrCreate?: Instituts_medicauxCreateOrConnectWithoutDoctor_institutsInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxWhereUniqueInput, {
    nullable: true
  })
  connect?: Instituts_medicauxWhereUniqueInput | undefined;
}
