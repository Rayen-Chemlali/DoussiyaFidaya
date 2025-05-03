import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsUpdateWithoutLab_documentsInput } from "../inputs/PatientsUpdateWithoutLab_documentsInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpdateToOneWithWhereWithoutLab_documentsInput", {})
export class PatientsUpdateToOneWithWhereWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateWithoutLab_documentsInput, {
    nullable: false
  })
  data!: PatientsUpdateWithoutLab_documentsInput;
}
