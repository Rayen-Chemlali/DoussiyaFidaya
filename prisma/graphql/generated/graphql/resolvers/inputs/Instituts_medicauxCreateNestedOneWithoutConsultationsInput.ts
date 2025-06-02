import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxCreateOrConnectWithoutConsultationsInput } from "../inputs/Instituts_medicauxCreateOrConnectWithoutConsultationsInput";
import { Instituts_medicauxCreateWithoutConsultationsInput } from "../inputs/Instituts_medicauxCreateWithoutConsultationsInput";
import { Instituts_medicauxWhereUniqueInput } from "../inputs/Instituts_medicauxWhereUniqueInput";

@TypeGraphQL.InputType("Instituts_medicauxCreateNestedOneWithoutConsultationsInput", {})
export class Instituts_medicauxCreateNestedOneWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => Instituts_medicauxCreateWithoutConsultationsInput, {
    nullable: true
  })
  create?: Instituts_medicauxCreateWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxCreateOrConnectWithoutConsultationsInput, {
    nullable: true
  })
  connectOrCreate?: Instituts_medicauxCreateOrConnectWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxWhereUniqueInput, {
    nullable: true
  })
  connect?: Instituts_medicauxWhereUniqueInput | undefined;
}
