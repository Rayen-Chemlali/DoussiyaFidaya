import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateWithoutLab_documentsInput } from "../inputs/PatientsCreateWithoutLab_documentsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsCreateOrConnectWithoutLab_documentsInput", {})
export class PatientsCreateOrConnectWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: false
  })
  where!: PatientsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientsCreateWithoutLab_documentsInput, {
    nullable: false
  })
  create!: PatientsCreateWithoutLab_documentsInput;
}
