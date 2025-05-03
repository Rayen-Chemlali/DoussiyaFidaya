import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateOrConnectWithoutPrescriptionsInput } from "../inputs/ConsultationsCreateOrConnectWithoutPrescriptionsInput";
import { ConsultationsCreateWithoutPrescriptionsInput } from "../inputs/ConsultationsCreateWithoutPrescriptionsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsCreateNestedOneWithoutPrescriptionsInput", {})
export class ConsultationsCreateNestedOneWithoutPrescriptionsInput {
  @TypeGraphQL.Field(_type => ConsultationsCreateWithoutPrescriptionsInput, {
    nullable: true
  })
  create?: ConsultationsCreateWithoutPrescriptionsInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsCreateOrConnectWithoutPrescriptionsInput, {
    nullable: true
  })
  connectOrCreate?: ConsultationsCreateOrConnectWithoutPrescriptionsInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: true
  })
  connect?: ConsultationsWhereUniqueInput | undefined;
}
