import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Xray_resultsCreateManyLab_documentsInputEnvelope } from "../inputs/Xray_resultsCreateManyLab_documentsInputEnvelope";
import { Xray_resultsCreateOrConnectWithoutLab_documentsInput } from "../inputs/Xray_resultsCreateOrConnectWithoutLab_documentsInput";
import { Xray_resultsCreateWithoutLab_documentsInput } from "../inputs/Xray_resultsCreateWithoutLab_documentsInput";
import { Xray_resultsWhereUniqueInput } from "../inputs/Xray_resultsWhereUniqueInput";

@TypeGraphQL.InputType("Xray_resultsCreateNestedManyWithoutLab_documentsInput", {})
export class Xray_resultsCreateNestedManyWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => [Xray_resultsCreateWithoutLab_documentsInput], {
    nullable: true
  })
  create?: Xray_resultsCreateWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Xray_resultsCreateOrConnectWithoutLab_documentsInput], {
    nullable: true
  })
  connectOrCreate?: Xray_resultsCreateOrConnectWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => Xray_resultsCreateManyLab_documentsInputEnvelope, {
    nullable: true
  })
  createMany?: Xray_resultsCreateManyLab_documentsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Xray_resultsWhereUniqueInput], {
    nullable: true
  })
  connect?: Xray_resultsWhereUniqueInput[] | undefined;
}
