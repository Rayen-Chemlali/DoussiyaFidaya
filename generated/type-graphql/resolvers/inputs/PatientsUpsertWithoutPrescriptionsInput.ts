import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateWithoutPrescriptionsInput } from "../inputs/PatientsCreateWithoutPrescriptionsInput";
import { PatientsUpdateWithoutPrescriptionsInput } from "../inputs/PatientsUpdateWithoutPrescriptionsInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpsertWithoutPrescriptionsInput", {})
export class PatientsUpsertWithoutPrescriptionsInput {
  @TypeGraphQL.Field(_type => PatientsUpdateWithoutPrescriptionsInput, {
    nullable: false
  })
  update!: PatientsUpdateWithoutPrescriptionsInput;

  @TypeGraphQL.Field(_type => PatientsCreateWithoutPrescriptionsInput, {
    nullable: false
  })
  create!: PatientsCreateWithoutPrescriptionsInput;

  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;
}
