import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_resultsCreateManyLab_documentsInputEnvelope } from "../inputs/Lab_resultsCreateManyLab_documentsInputEnvelope";
import { Lab_resultsCreateOrConnectWithoutLab_documentsInput } from "../inputs/Lab_resultsCreateOrConnectWithoutLab_documentsInput";
import { Lab_resultsCreateWithoutLab_documentsInput } from "../inputs/Lab_resultsCreateWithoutLab_documentsInput";
import { Lab_resultsScalarWhereInput } from "../inputs/Lab_resultsScalarWhereInput";
import { Lab_resultsUpdateManyWithWhereWithoutLab_documentsInput } from "../inputs/Lab_resultsUpdateManyWithWhereWithoutLab_documentsInput";
import { Lab_resultsUpdateWithWhereUniqueWithoutLab_documentsInput } from "../inputs/Lab_resultsUpdateWithWhereUniqueWithoutLab_documentsInput";
import { Lab_resultsUpsertWithWhereUniqueWithoutLab_documentsInput } from "../inputs/Lab_resultsUpsertWithWhereUniqueWithoutLab_documentsInput";
import { Lab_resultsWhereUniqueInput } from "../inputs/Lab_resultsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_resultsUpdateManyWithoutLab_documentsNestedInput", {})
export class Lab_resultsUpdateManyWithoutLab_documentsNestedInput {
  @TypeGraphQL.Field(_type => [Lab_resultsCreateWithoutLab_documentsInput], {
    nullable: true
  })
  create?: Lab_resultsCreateWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_resultsCreateOrConnectWithoutLab_documentsInput], {
    nullable: true
  })
  connectOrCreate?: Lab_resultsCreateOrConnectWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_resultsUpsertWithWhereUniqueWithoutLab_documentsInput], {
    nullable: true
  })
  upsert?: Lab_resultsUpsertWithWhereUniqueWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => Lab_resultsCreateManyLab_documentsInputEnvelope, {
    nullable: true
  })
  createMany?: Lab_resultsCreateManyLab_documentsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Lab_resultsWhereUniqueInput], {
    nullable: true
  })
  set?: Lab_resultsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_resultsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Lab_resultsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_resultsWhereUniqueInput], {
    nullable: true
  })
  delete?: Lab_resultsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_resultsWhereUniqueInput], {
    nullable: true
  })
  connect?: Lab_resultsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_resultsUpdateWithWhereUniqueWithoutLab_documentsInput], {
    nullable: true
  })
  update?: Lab_resultsUpdateWithWhereUniqueWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_resultsUpdateManyWithWhereWithoutLab_documentsInput], {
    nullable: true
  })
  updateMany?: Lab_resultsUpdateManyWithWhereWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_resultsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Lab_resultsScalarWhereInput[] | undefined;
}
