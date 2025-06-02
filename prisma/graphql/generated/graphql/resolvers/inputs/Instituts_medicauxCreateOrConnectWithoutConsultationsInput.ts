import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxCreateWithoutConsultationsInput } from "../inputs/Instituts_medicauxCreateWithoutConsultationsInput";
import { Instituts_medicauxWhereUniqueInput } from "../inputs/Instituts_medicauxWhereUniqueInput";

@TypeGraphQL.InputType("Instituts_medicauxCreateOrConnectWithoutConsultationsInput", {})
export class Instituts_medicauxCreateOrConnectWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => Instituts_medicauxWhereUniqueInput, {
    nullable: false
  })
  where!: Instituts_medicauxWhereUniqueInput;

  @TypeGraphQL.Field(_type => Instituts_medicauxCreateWithoutConsultationsInput, {
    nullable: false
  })
  create!: Instituts_medicauxCreateWithoutConsultationsInput;
}
