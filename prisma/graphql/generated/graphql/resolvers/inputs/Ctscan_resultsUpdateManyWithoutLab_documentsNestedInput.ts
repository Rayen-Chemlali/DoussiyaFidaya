import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Ctscan_resultsCreateManyLab_documentsInputEnvelope } from "../inputs/Ctscan_resultsCreateManyLab_documentsInputEnvelope";
import { Ctscan_resultsCreateOrConnectWithoutLab_documentsInput } from "../inputs/Ctscan_resultsCreateOrConnectWithoutLab_documentsInput";
import { Ctscan_resultsCreateWithoutLab_documentsInput } from "../inputs/Ctscan_resultsCreateWithoutLab_documentsInput";
import { Ctscan_resultsScalarWhereInput } from "../inputs/Ctscan_resultsScalarWhereInput";
import { Ctscan_resultsUpdateManyWithWhereWithoutLab_documentsInput } from "../inputs/Ctscan_resultsUpdateManyWithWhereWithoutLab_documentsInput";
import { Ctscan_resultsUpdateWithWhereUniqueWithoutLab_documentsInput } from "../inputs/Ctscan_resultsUpdateWithWhereUniqueWithoutLab_documentsInput";
import { Ctscan_resultsUpsertWithWhereUniqueWithoutLab_documentsInput } from "../inputs/Ctscan_resultsUpsertWithWhereUniqueWithoutLab_documentsInput";
import { Ctscan_resultsWhereUniqueInput } from "../inputs/Ctscan_resultsWhereUniqueInput";

@TypeGraphQL.InputType("Ctscan_resultsUpdateManyWithoutLab_documentsNestedInput", {})
export class Ctscan_resultsUpdateManyWithoutLab_documentsNestedInput {
  @TypeGraphQL.Field(_type => [Ctscan_resultsCreateWithoutLab_documentsInput], {
    nullable: true
  })
  create?: Ctscan_resultsCreateWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Ctscan_resultsCreateOrConnectWithoutLab_documentsInput], {
    nullable: true
  })
  connectOrCreate?: Ctscan_resultsCreateOrConnectWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Ctscan_resultsUpsertWithWhereUniqueWithoutLab_documentsInput], {
    nullable: true
  })
  upsert?: Ctscan_resultsUpsertWithWhereUniqueWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => Ctscan_resultsCreateManyLab_documentsInputEnvelope, {
    nullable: true
  })
  createMany?: Ctscan_resultsCreateManyLab_documentsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Ctscan_resultsWhereUniqueInput], {
    nullable: true
  })
  set?: Ctscan_resultsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Ctscan_resultsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Ctscan_resultsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Ctscan_resultsWhereUniqueInput], {
    nullable: true
  })
  delete?: Ctscan_resultsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Ctscan_resultsWhereUniqueInput], {
    nullable: true
  })
  connect?: Ctscan_resultsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Ctscan_resultsUpdateWithWhereUniqueWithoutLab_documentsInput], {
    nullable: true
  })
  update?: Ctscan_resultsUpdateWithWhereUniqueWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Ctscan_resultsUpdateManyWithWhereWithoutLab_documentsInput], {
    nullable: true
  })
  updateMany?: Ctscan_resultsUpdateManyWithWhereWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Ctscan_resultsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Ctscan_resultsScalarWhereInput[] | undefined;
}
