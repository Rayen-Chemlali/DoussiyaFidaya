import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaboratoriesCreateWithoutLab_documentsInput } from "../inputs/LaboratoriesCreateWithoutLab_documentsInput";
import { LaboratoriesWhereUniqueInput } from "../inputs/LaboratoriesWhereUniqueInput";

@TypeGraphQL.InputType("LaboratoriesCreateOrConnectWithoutLab_documentsInput", {})
export class LaboratoriesCreateOrConnectWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => LaboratoriesWhereUniqueInput, {
    nullable: false
  })
  where!: LaboratoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => LaboratoriesCreateWithoutLab_documentsInput, {
    nullable: false
  })
  create!: LaboratoriesCreateWithoutLab_documentsInput;
}
