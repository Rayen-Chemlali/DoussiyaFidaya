import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxCreateWithoutConsultationsInput } from "../inputs/Instituts_medicauxCreateWithoutConsultationsInput";
import { Instituts_medicauxUpdateWithoutConsultationsInput } from "../inputs/Instituts_medicauxUpdateWithoutConsultationsInput";
import { Instituts_medicauxWhereInput } from "../inputs/Instituts_medicauxWhereInput";

@TypeGraphQL.InputType("Instituts_medicauxUpsertWithoutConsultationsInput", {})
export class Instituts_medicauxUpsertWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => Instituts_medicauxUpdateWithoutConsultationsInput, {
    nullable: false
  })
  update!: Instituts_medicauxUpdateWithoutConsultationsInput;

  @TypeGraphQL.Field(_type => Instituts_medicauxCreateWithoutConsultationsInput, {
    nullable: false
  })
  create!: Instituts_medicauxCreateWithoutConsultationsInput;

  @TypeGraphQL.Field(_type => Instituts_medicauxWhereInput, {
    nullable: true
  })
  where?: Instituts_medicauxWhereInput | undefined;
}
