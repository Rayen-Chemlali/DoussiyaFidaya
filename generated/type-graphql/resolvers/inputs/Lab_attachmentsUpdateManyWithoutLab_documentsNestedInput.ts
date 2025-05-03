import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_attachmentsCreateManyLab_documentsInputEnvelope } from "../inputs/Lab_attachmentsCreateManyLab_documentsInputEnvelope";
import { Lab_attachmentsCreateOrConnectWithoutLab_documentsInput } from "../inputs/Lab_attachmentsCreateOrConnectWithoutLab_documentsInput";
import { Lab_attachmentsCreateWithoutLab_documentsInput } from "../inputs/Lab_attachmentsCreateWithoutLab_documentsInput";
import { Lab_attachmentsScalarWhereInput } from "../inputs/Lab_attachmentsScalarWhereInput";
import { Lab_attachmentsUpdateManyWithWhereWithoutLab_documentsInput } from "../inputs/Lab_attachmentsUpdateManyWithWhereWithoutLab_documentsInput";
import { Lab_attachmentsUpdateWithWhereUniqueWithoutLab_documentsInput } from "../inputs/Lab_attachmentsUpdateWithWhereUniqueWithoutLab_documentsInput";
import { Lab_attachmentsUpsertWithWhereUniqueWithoutLab_documentsInput } from "../inputs/Lab_attachmentsUpsertWithWhereUniqueWithoutLab_documentsInput";
import { Lab_attachmentsWhereUniqueInput } from "../inputs/Lab_attachmentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_attachmentsUpdateManyWithoutLab_documentsNestedInput", {})
export class Lab_attachmentsUpdateManyWithoutLab_documentsNestedInput {
  @TypeGraphQL.Field(_type => [Lab_attachmentsCreateWithoutLab_documentsInput], {
    nullable: true
  })
  create?: Lab_attachmentsCreateWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_attachmentsCreateOrConnectWithoutLab_documentsInput], {
    nullable: true
  })
  connectOrCreate?: Lab_attachmentsCreateOrConnectWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_attachmentsUpsertWithWhereUniqueWithoutLab_documentsInput], {
    nullable: true
  })
  upsert?: Lab_attachmentsUpsertWithWhereUniqueWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => Lab_attachmentsCreateManyLab_documentsInputEnvelope, {
    nullable: true
  })
  createMany?: Lab_attachmentsCreateManyLab_documentsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Lab_attachmentsWhereUniqueInput], {
    nullable: true
  })
  set?: Lab_attachmentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_attachmentsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Lab_attachmentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_attachmentsWhereUniqueInput], {
    nullable: true
  })
  delete?: Lab_attachmentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_attachmentsWhereUniqueInput], {
    nullable: true
  })
  connect?: Lab_attachmentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_attachmentsUpdateWithWhereUniqueWithoutLab_documentsInput], {
    nullable: true
  })
  update?: Lab_attachmentsUpdateWithWhereUniqueWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_attachmentsUpdateManyWithWhereWithoutLab_documentsInput], {
    nullable: true
  })
  updateMany?: Lab_attachmentsUpdateManyWithWhereWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_attachmentsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Lab_attachmentsScalarWhereInput[] | undefined;
}
