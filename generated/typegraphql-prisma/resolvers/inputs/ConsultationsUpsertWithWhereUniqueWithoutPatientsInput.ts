import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateWithoutPatientsInput } from "../inputs/ConsultationsCreateWithoutPatientsInput";
import { ConsultationsUpdateWithoutPatientsInput } from "../inputs/ConsultationsUpdateWithoutPatientsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsUpsertWithWhereUniqueWithoutPatientsInput", {})
export class ConsultationsUpsertWithWhereUniqueWithoutPatientsInput {
  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationsUpdateWithoutPatientsInput, {
    nullable: false
  })
  update!: ConsultationsUpdateWithoutPatientsInput;

  @TypeGraphQL.Field(_type => ConsultationsCreateWithoutPatientsInput, {
    nullable: false
  })
  create!: ConsultationsCreateWithoutPatientsInput;
}
