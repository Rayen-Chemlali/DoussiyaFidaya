import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaboratoriesCreateWithoutLab_documentsInput } from "../inputs/LaboratoriesCreateWithoutLab_documentsInput";
import { LaboratoriesUpdateWithoutLab_documentsInput } from "../inputs/LaboratoriesUpdateWithoutLab_documentsInput";
import { LaboratoriesWhereInput } from "../inputs/LaboratoriesWhereInput";

@TypeGraphQL.InputType("LaboratoriesUpsertWithoutLab_documentsInput", {})
export class LaboratoriesUpsertWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => LaboratoriesUpdateWithoutLab_documentsInput, {
    nullable: false
  })
  update!: LaboratoriesUpdateWithoutLab_documentsInput;

  @TypeGraphQL.Field(_type => LaboratoriesCreateWithoutLab_documentsInput, {
    nullable: false
  })
  create!: LaboratoriesCreateWithoutLab_documentsInput;

  @TypeGraphQL.Field(_type => LaboratoriesWhereInput, {
    nullable: true
  })
  where?: LaboratoriesWhereInput | undefined;
}
