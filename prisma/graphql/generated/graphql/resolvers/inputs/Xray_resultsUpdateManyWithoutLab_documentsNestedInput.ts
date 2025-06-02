import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Xray_resultsCreateManyLab_documentsInputEnvelope } from "../inputs/Xray_resultsCreateManyLab_documentsInputEnvelope";
import { Xray_resultsCreateOrConnectWithoutLab_documentsInput } from "../inputs/Xray_resultsCreateOrConnectWithoutLab_documentsInput";
import { Xray_resultsCreateWithoutLab_documentsInput } from "../inputs/Xray_resultsCreateWithoutLab_documentsInput";
import { Xray_resultsScalarWhereInput } from "../inputs/Xray_resultsScalarWhereInput";
import { Xray_resultsUpdateManyWithWhereWithoutLab_documentsInput } from "../inputs/Xray_resultsUpdateManyWithWhereWithoutLab_documentsInput";
import { Xray_resultsUpdateWithWhereUniqueWithoutLab_documentsInput } from "../inputs/Xray_resultsUpdateWithWhereUniqueWithoutLab_documentsInput";
import { Xray_resultsUpsertWithWhereUniqueWithoutLab_documentsInput } from "../inputs/Xray_resultsUpsertWithWhereUniqueWithoutLab_documentsInput";
import { Xray_resultsWhereUniqueInput } from "../inputs/Xray_resultsWhereUniqueInput";

@TypeGraphQL.InputType("Xray_resultsUpdateManyWithoutLab_documentsNestedInput", {})
export class Xray_resultsUpdateManyWithoutLab_documentsNestedInput {
  @TypeGraphQL.Field(_type => [Xray_resultsCreateWithoutLab_documentsInput], {
    nullable: true
  })
  create?: Xray_resultsCreateWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Xray_resultsCreateOrConnectWithoutLab_documentsInput], {
    nullable: true
  })
  connectOrCreate?: Xray_resultsCreateOrConnectWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Xray_resultsUpsertWithWhereUniqueWithoutLab_documentsInput], {
    nullable: true
  })
  upsert?: Xray_resultsUpsertWithWhereUniqueWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => Xray_resultsCreateManyLab_documentsInputEnvelope, {
    nullable: true
  })
  createMany?: Xray_resultsCreateManyLab_documentsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Xray_resultsWhereUniqueInput], {
    nullable: true
  })
  set?: Xray_resultsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Xray_resultsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Xray_resultsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Xray_resultsWhereUniqueInput], {
    nullable: true
  })
  delete?: Xray_resultsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Xray_resultsWhereUniqueInput], {
    nullable: true
  })
  connect?: Xray_resultsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Xray_resultsUpdateWithWhereUniqueWithoutLab_documentsInput], {
    nullable: true
  })
  update?: Xray_resultsUpdateWithWhereUniqueWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Xray_resultsUpdateManyWithWhereWithoutLab_documentsInput], {
    nullable: true
  })
  updateMany?: Xray_resultsUpdateManyWithWhereWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Xray_resultsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Xray_resultsScalarWhereInput[] | undefined;
}
