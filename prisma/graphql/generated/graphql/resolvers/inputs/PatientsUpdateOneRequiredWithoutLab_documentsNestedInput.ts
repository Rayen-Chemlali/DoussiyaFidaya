import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateOrConnectWithoutLab_documentsInput } from "../inputs/PatientsCreateOrConnectWithoutLab_documentsInput";
import { PatientsCreateWithoutLab_documentsInput } from "../inputs/PatientsCreateWithoutLab_documentsInput";
import { PatientsUpdateToOneWithWhereWithoutLab_documentsInput } from "../inputs/PatientsUpdateToOneWithWhereWithoutLab_documentsInput";
import { PatientsUpsertWithoutLab_documentsInput } from "../inputs/PatientsUpsertWithoutLab_documentsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsUpdateOneRequiredWithoutLab_documentsNestedInput", {})
export class PatientsUpdateOneRequiredWithoutLab_documentsNestedInput {
  @TypeGraphQL.Field(_type => PatientsCreateWithoutLab_documentsInput, {
    nullable: true
  })
  create?: PatientsCreateWithoutLab_documentsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateOrConnectWithoutLab_documentsInput, {
    nullable: true
  })
  connectOrCreate?: PatientsCreateOrConnectWithoutLab_documentsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpsertWithoutLab_documentsInput, {
    nullable: true
  })
  upsert?: PatientsUpsertWithoutLab_documentsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateToOneWithWhereWithoutLab_documentsInput, {
    nullable: true
  })
  update?: PatientsUpdateToOneWithWhereWithoutLab_documentsInput | undefined;
}
