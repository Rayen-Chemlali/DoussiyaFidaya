import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateOrConnectWithoutLab_attachmentsInput } from "../inputs/Lab_documentsCreateOrConnectWithoutLab_attachmentsInput";
import { Lab_documentsCreateWithoutLab_attachmentsInput } from "../inputs/Lab_documentsCreateWithoutLab_attachmentsInput";
import { Lab_documentsUpdateToOneWithWhereWithoutLab_attachmentsInput } from "../inputs/Lab_documentsUpdateToOneWithWhereWithoutLab_attachmentsInput";
import { Lab_documentsUpsertWithoutLab_attachmentsInput } from "../inputs/Lab_documentsUpsertWithoutLab_attachmentsInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsUpdateOneRequiredWithoutLab_attachmentsNestedInput", {})
export class Lab_documentsUpdateOneRequiredWithoutLab_attachmentsNestedInput {
  @TypeGraphQL.Field(_type => Lab_documentsCreateWithoutLab_attachmentsInput, {
    nullable: true
  })
  create?: Lab_documentsCreateWithoutLab_attachmentsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsCreateOrConnectWithoutLab_attachmentsInput, {
    nullable: true
  })
  connectOrCreate?: Lab_documentsCreateOrConnectWithoutLab_attachmentsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsUpsertWithoutLab_attachmentsInput, {
    nullable: true
  })
  upsert?: Lab_documentsUpsertWithoutLab_attachmentsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsWhereUniqueInput, {
    nullable: true
  })
  connect?: Lab_documentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsUpdateToOneWithWhereWithoutLab_attachmentsInput, {
    nullable: true
  })
  update?: Lab_documentsUpdateToOneWithWhereWithoutLab_attachmentsInput | undefined;
}
