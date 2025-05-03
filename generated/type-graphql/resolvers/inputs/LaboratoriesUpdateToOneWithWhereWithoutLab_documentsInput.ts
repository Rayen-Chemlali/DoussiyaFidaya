import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaboratoriesUpdateWithoutLab_documentsInput } from "../inputs/LaboratoriesUpdateWithoutLab_documentsInput";
import { LaboratoriesWhereInput } from "../inputs/LaboratoriesWhereInput";

@TypeGraphQL.InputType("LaboratoriesUpdateToOneWithWhereWithoutLab_documentsInput", {})
export class LaboratoriesUpdateToOneWithWhereWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => LaboratoriesWhereInput, {
    nullable: true
  })
  where?: LaboratoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => LaboratoriesUpdateWithoutLab_documentsInput, {
    nullable: false
  })
  data!: LaboratoriesUpdateWithoutLab_documentsInput;
}
