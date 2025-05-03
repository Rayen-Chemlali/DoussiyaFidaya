import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateWithoutPrescriptionsInput } from "../inputs/ConsultationsCreateWithoutPrescriptionsInput";
import { ConsultationsUpdateWithoutPrescriptionsInput } from "../inputs/ConsultationsUpdateWithoutPrescriptionsInput";
import { ConsultationsWhereInput } from "../inputs/ConsultationsWhereInput";

@TypeGraphQL.InputType("ConsultationsUpsertWithoutPrescriptionsInput", {})
export class ConsultationsUpsertWithoutPrescriptionsInput {
  @TypeGraphQL.Field(_type => ConsultationsUpdateWithoutPrescriptionsInput, {
    nullable: false
  })
  update!: ConsultationsUpdateWithoutPrescriptionsInput;

  @TypeGraphQL.Field(_type => ConsultationsCreateWithoutPrescriptionsInput, {
    nullable: false
  })
  create!: ConsultationsCreateWithoutPrescriptionsInput;

  @TypeGraphQL.Field(_type => ConsultationsWhereInput, {
    nullable: true
  })
  where?: ConsultationsWhereInput | undefined;
}
