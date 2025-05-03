import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateWithoutInstituts_medicauxInput } from "../inputs/ConsultationsCreateWithoutInstituts_medicauxInput";
import { ConsultationsUpdateWithoutInstituts_medicauxInput } from "../inputs/ConsultationsUpdateWithoutInstituts_medicauxInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsUpsertWithWhereUniqueWithoutInstituts_medicauxInput", {})
export class ConsultationsUpsertWithWhereUniqueWithoutInstituts_medicauxInput {
  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationsUpdateWithoutInstituts_medicauxInput, {
    nullable: false
  })
  update!: ConsultationsUpdateWithoutInstituts_medicauxInput;

  @TypeGraphQL.Field(_type => ConsultationsCreateWithoutInstituts_medicauxInput, {
    nullable: false
  })
  create!: ConsultationsCreateWithoutInstituts_medicauxInput;
}
