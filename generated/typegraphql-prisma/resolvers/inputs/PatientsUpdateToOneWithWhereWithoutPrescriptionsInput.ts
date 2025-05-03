import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsUpdateWithoutPrescriptionsInput } from "../inputs/PatientsUpdateWithoutPrescriptionsInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpdateToOneWithWhereWithoutPrescriptionsInput", {})
export class PatientsUpdateToOneWithWhereWithoutPrescriptionsInput {
  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateWithoutPrescriptionsInput, {
    nullable: false
  })
  data!: PatientsUpdateWithoutPrescriptionsInput;
}
