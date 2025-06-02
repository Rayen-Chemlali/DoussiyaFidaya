import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsUpdateWithoutPrescriptionsInput } from "../inputs/ConsultationsUpdateWithoutPrescriptionsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsUpdateWithWhereUniqueWithoutPrescriptionsInput", {})
export class ConsultationsUpdateWithWhereUniqueWithoutPrescriptionsInput {
  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationsUpdateWithoutPrescriptionsInput, {
    nullable: false
  })
  data!: ConsultationsUpdateWithoutPrescriptionsInput;
}
