import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaboratoriesCreateOrConnectWithoutLab_documentsInput } from "../inputs/LaboratoriesCreateOrConnectWithoutLab_documentsInput";
import { LaboratoriesCreateWithoutLab_documentsInput } from "../inputs/LaboratoriesCreateWithoutLab_documentsInput";
import { LaboratoriesWhereUniqueInput } from "../inputs/LaboratoriesWhereUniqueInput";

@TypeGraphQL.InputType("LaboratoriesCreateNestedOneWithoutLab_documentsInput", {})
export class LaboratoriesCreateNestedOneWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => LaboratoriesCreateWithoutLab_documentsInput, {
    nullable: true
  })
  create?: LaboratoriesCreateWithoutLab_documentsInput | undefined;

  @TypeGraphQL.Field(_type => LaboratoriesCreateOrConnectWithoutLab_documentsInput, {
    nullable: true
  })
  connectOrCreate?: LaboratoriesCreateOrConnectWithoutLab_documentsInput | undefined;

  @TypeGraphQL.Field(_type => LaboratoriesWhereUniqueInput, {
    nullable: true
  })
  connect?: LaboratoriesWhereUniqueInput | undefined;
}
