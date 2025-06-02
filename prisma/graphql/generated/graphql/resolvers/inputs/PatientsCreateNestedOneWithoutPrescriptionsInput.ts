import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateOrConnectWithoutPrescriptionsInput } from "../inputs/PatientsCreateOrConnectWithoutPrescriptionsInput";
import { PatientsCreateWithoutPrescriptionsInput } from "../inputs/PatientsCreateWithoutPrescriptionsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsCreateNestedOneWithoutPrescriptionsInput", {})
export class PatientsCreateNestedOneWithoutPrescriptionsInput {
  @TypeGraphQL.Field(_type => PatientsCreateWithoutPrescriptionsInput, {
    nullable: true
  })
  create?: PatientsCreateWithoutPrescriptionsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateOrConnectWithoutPrescriptionsInput, {
    nullable: true
  })
  connectOrCreate?: PatientsCreateOrConnectWithoutPrescriptionsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientsWhereUniqueInput | undefined;
}
