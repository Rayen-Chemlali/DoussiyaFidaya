import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaboratoriesCreateOrConnectWithoutLab_documentsInput } from "../inputs/LaboratoriesCreateOrConnectWithoutLab_documentsInput";
import { LaboratoriesCreateWithoutLab_documentsInput } from "../inputs/LaboratoriesCreateWithoutLab_documentsInput";
import { LaboratoriesUpdateToOneWithWhereWithoutLab_documentsInput } from "../inputs/LaboratoriesUpdateToOneWithWhereWithoutLab_documentsInput";
import { LaboratoriesUpsertWithoutLab_documentsInput } from "../inputs/LaboratoriesUpsertWithoutLab_documentsInput";
import { LaboratoriesWhereInput } from "../inputs/LaboratoriesWhereInput";
import { LaboratoriesWhereUniqueInput } from "../inputs/LaboratoriesWhereUniqueInput";

@TypeGraphQL.InputType("LaboratoriesUpdateOneWithoutLab_documentsNestedInput", {})
export class LaboratoriesUpdateOneWithoutLab_documentsNestedInput {
  @TypeGraphQL.Field(_type => LaboratoriesCreateWithoutLab_documentsInput, {
    nullable: true
  })
  create?: LaboratoriesCreateWithoutLab_documentsInput | undefined;

  @TypeGraphQL.Field(_type => LaboratoriesCreateOrConnectWithoutLab_documentsInput, {
    nullable: true
  })
  connectOrCreate?: LaboratoriesCreateOrConnectWithoutLab_documentsInput | undefined;

  @TypeGraphQL.Field(_type => LaboratoriesUpsertWithoutLab_documentsInput, {
    nullable: true
  })
  upsert?: LaboratoriesUpsertWithoutLab_documentsInput | undefined;

  @TypeGraphQL.Field(_type => LaboratoriesWhereInput, {
    nullable: true
  })
  disconnect?: LaboratoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => LaboratoriesWhereInput, {
    nullable: true
  })
  delete?: LaboratoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => LaboratoriesWhereUniqueInput, {
    nullable: true
  })
  connect?: LaboratoriesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LaboratoriesUpdateToOneWithWhereWithoutLab_documentsInput, {
    nullable: true
  })
  update?: LaboratoriesUpdateToOneWithWhereWithoutLab_documentsInput | undefined;
}
