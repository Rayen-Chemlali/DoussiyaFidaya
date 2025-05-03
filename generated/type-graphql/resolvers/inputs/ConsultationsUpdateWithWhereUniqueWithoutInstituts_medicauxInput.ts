import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsUpdateWithoutInstituts_medicauxInput } from "../inputs/ConsultationsUpdateWithoutInstituts_medicauxInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsUpdateWithWhereUniqueWithoutInstituts_medicauxInput", {})
export class ConsultationsUpdateWithWhereUniqueWithoutInstituts_medicauxInput {
  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationsUpdateWithoutInstituts_medicauxInput, {
    nullable: false
  })
  data!: ConsultationsUpdateWithoutInstituts_medicauxInput;
}
