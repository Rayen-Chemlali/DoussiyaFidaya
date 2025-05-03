import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateWithoutPrescriptionsInput } from "../inputs/PatientsCreateWithoutPrescriptionsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsCreateOrConnectWithoutPrescriptionsInput", {})
export class PatientsCreateOrConnectWithoutPrescriptionsInput {
  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: false
  })
  where!: PatientsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientsCreateWithoutPrescriptionsInput, {
    nullable: false
  })
  create!: PatientsCreateWithoutPrescriptionsInput;
}
