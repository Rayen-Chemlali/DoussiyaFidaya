import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateWithoutPrescriptionsInput } from "../inputs/ConsultationsCreateWithoutPrescriptionsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsCreateOrConnectWithoutPrescriptionsInput", {})
export class ConsultationsCreateOrConnectWithoutPrescriptionsInput {
  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationsCreateWithoutPrescriptionsInput, {
    nullable: false
  })
  create!: ConsultationsCreateWithoutPrescriptionsInput;
}
