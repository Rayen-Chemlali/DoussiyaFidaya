import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Ctscan_resultsCreateManyLab_documentsInputEnvelope } from "../inputs/Ctscan_resultsCreateManyLab_documentsInputEnvelope";
import { Ctscan_resultsCreateOrConnectWithoutLab_documentsInput } from "../inputs/Ctscan_resultsCreateOrConnectWithoutLab_documentsInput";
import { Ctscan_resultsCreateWithoutLab_documentsInput } from "../inputs/Ctscan_resultsCreateWithoutLab_documentsInput";
import { Ctscan_resultsWhereUniqueInput } from "../inputs/Ctscan_resultsWhereUniqueInput";

@TypeGraphQL.InputType("Ctscan_resultsCreateNestedManyWithoutLab_documentsInput", {})
export class Ctscan_resultsCreateNestedManyWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => [Ctscan_resultsCreateWithoutLab_documentsInput], {
    nullable: true
  })
  create?: Ctscan_resultsCreateWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Ctscan_resultsCreateOrConnectWithoutLab_documentsInput], {
    nullable: true
  })
  connectOrCreate?: Ctscan_resultsCreateOrConnectWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => Ctscan_resultsCreateManyLab_documentsInputEnvelope, {
    nullable: true
  })
  createMany?: Ctscan_resultsCreateManyLab_documentsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Ctscan_resultsWhereUniqueInput], {
    nullable: true
  })
  connect?: Ctscan_resultsWhereUniqueInput[] | undefined;
}
