import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateWithoutLab_documentsInput } from "../inputs/PatientsCreateWithoutLab_documentsInput";
import { PatientsUpdateWithoutLab_documentsInput } from "../inputs/PatientsUpdateWithoutLab_documentsInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpsertWithoutLab_documentsInput", {})
export class PatientsUpsertWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => PatientsUpdateWithoutLab_documentsInput, {
    nullable: false
  })
  update!: PatientsUpdateWithoutLab_documentsInput;

  @TypeGraphQL.Field(_type => PatientsCreateWithoutLab_documentsInput, {
    nullable: false
  })
  create!: PatientsCreateWithoutLab_documentsInput;

  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;
}
