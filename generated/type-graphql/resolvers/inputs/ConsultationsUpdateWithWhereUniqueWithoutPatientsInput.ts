import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsUpdateWithoutPatientsInput } from "../inputs/ConsultationsUpdateWithoutPatientsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsUpdateWithWhereUniqueWithoutPatientsInput", {})
export class ConsultationsUpdateWithWhereUniqueWithoutPatientsInput {
  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationsUpdateWithoutPatientsInput, {
    nullable: false
  })
  data!: ConsultationsUpdateWithoutPatientsInput;
}
