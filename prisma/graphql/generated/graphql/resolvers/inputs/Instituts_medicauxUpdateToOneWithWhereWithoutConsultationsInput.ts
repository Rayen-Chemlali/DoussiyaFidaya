import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxUpdateWithoutConsultationsInput } from "../inputs/Instituts_medicauxUpdateWithoutConsultationsInput";
import { Instituts_medicauxWhereInput } from "../inputs/Instituts_medicauxWhereInput";

@TypeGraphQL.InputType("Instituts_medicauxUpdateToOneWithWhereWithoutConsultationsInput", {})
export class Instituts_medicauxUpdateToOneWithWhereWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => Instituts_medicauxWhereInput, {
    nullable: true
  })
  where?: Instituts_medicauxWhereInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxUpdateWithoutConsultationsInput, {
    nullable: false
  })
  data!: Instituts_medicauxUpdateWithoutConsultationsInput;
}
