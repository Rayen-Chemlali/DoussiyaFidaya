import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateWithoutPrescriptionsInput } from "../inputs/ConsultationsCreateWithoutPrescriptionsInput";
import { ConsultationsUpdateWithoutPrescriptionsInput } from "../inputs/ConsultationsUpdateWithoutPrescriptionsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsUpsertWithWhereUniqueWithoutPrescriptionsInput", {})
export class ConsultationsUpsertWithWhereUniqueWithoutPrescriptionsInput {
  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationsUpdateWithoutPrescriptionsInput, {
    nullable: false
  })
  update!: ConsultationsUpdateWithoutPrescriptionsInput;

  @TypeGraphQL.Field(_type => ConsultationsCreateWithoutPrescriptionsInput, {
    nullable: false
  })
  create!: ConsultationsCreateWithoutPrescriptionsInput;
}
