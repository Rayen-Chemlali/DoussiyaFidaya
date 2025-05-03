import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateWithoutInstituts_medicauxInput } from "../inputs/ConsultationsCreateWithoutInstituts_medicauxInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsCreateOrConnectWithoutInstituts_medicauxInput", {})
export class ConsultationsCreateOrConnectWithoutInstituts_medicauxInput {
  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationsCreateWithoutInstituts_medicauxInput, {
    nullable: false
  })
  create!: ConsultationsCreateWithoutInstituts_medicauxInput;
}
