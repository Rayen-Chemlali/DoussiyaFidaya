import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Analysis_resultsCreateManyLab_documentsInputEnvelope } from "../inputs/Analysis_resultsCreateManyLab_documentsInputEnvelope";
import { Analysis_resultsCreateOrConnectWithoutLab_documentsInput } from "../inputs/Analysis_resultsCreateOrConnectWithoutLab_documentsInput";
import { Analysis_resultsCreateWithoutLab_documentsInput } from "../inputs/Analysis_resultsCreateWithoutLab_documentsInput";
import { Analysis_resultsScalarWhereInput } from "../inputs/Analysis_resultsScalarWhereInput";
import { Analysis_resultsUpdateManyWithWhereWithoutLab_documentsInput } from "../inputs/Analysis_resultsUpdateManyWithWhereWithoutLab_documentsInput";
import { Analysis_resultsUpdateWithWhereUniqueWithoutLab_documentsInput } from "../inputs/Analysis_resultsUpdateWithWhereUniqueWithoutLab_documentsInput";
import { Analysis_resultsUpsertWithWhereUniqueWithoutLab_documentsInput } from "../inputs/Analysis_resultsUpsertWithWhereUniqueWithoutLab_documentsInput";
import { Analysis_resultsWhereUniqueInput } from "../inputs/Analysis_resultsWhereUniqueInput";

@TypeGraphQL.InputType("Analysis_resultsUpdateManyWithoutLab_documentsNestedInput", {})
export class Analysis_resultsUpdateManyWithoutLab_documentsNestedInput {
  @TypeGraphQL.Field(_type => [Analysis_resultsCreateWithoutLab_documentsInput], {
    nullable: true
  })
  create?: Analysis_resultsCreateWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Analysis_resultsCreateOrConnectWithoutLab_documentsInput], {
    nullable: true
  })
  connectOrCreate?: Analysis_resultsCreateOrConnectWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Analysis_resultsUpsertWithWhereUniqueWithoutLab_documentsInput], {
    nullable: true
  })
  upsert?: Analysis_resultsUpsertWithWhereUniqueWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => Analysis_resultsCreateManyLab_documentsInputEnvelope, {
    nullable: true
  })
  createMany?: Analysis_resultsCreateManyLab_documentsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Analysis_resultsWhereUniqueInput], {
    nullable: true
  })
  set?: Analysis_resultsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Analysis_resultsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Analysis_resultsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Analysis_resultsWhereUniqueInput], {
    nullable: true
  })
  delete?: Analysis_resultsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Analysis_resultsWhereUniqueInput], {
    nullable: true
  })
  connect?: Analysis_resultsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Analysis_resultsUpdateWithWhereUniqueWithoutLab_documentsInput], {
    nullable: true
  })
  update?: Analysis_resultsUpdateWithWhereUniqueWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Analysis_resultsUpdateManyWithWhereWithoutLab_documentsInput], {
    nullable: true
  })
  updateMany?: Analysis_resultsUpdateManyWithWhereWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Analysis_resultsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Analysis_resultsScalarWhereInput[] | undefined;
}
