import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Analysis_resultsCreateManyLab_documentsInputEnvelope } from "../inputs/Analysis_resultsCreateManyLab_documentsInputEnvelope";
import { Analysis_resultsCreateOrConnectWithoutLab_documentsInput } from "../inputs/Analysis_resultsCreateOrConnectWithoutLab_documentsInput";
import { Analysis_resultsCreateWithoutLab_documentsInput } from "../inputs/Analysis_resultsCreateWithoutLab_documentsInput";
import { Analysis_resultsWhereUniqueInput } from "../inputs/Analysis_resultsWhereUniqueInput";

@TypeGraphQL.InputType("Analysis_resultsCreateNestedManyWithoutLab_documentsInput", {})
export class Analysis_resultsCreateNestedManyWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => [Analysis_resultsCreateWithoutLab_documentsInput], {
    nullable: true
  })
  create?: Analysis_resultsCreateWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Analysis_resultsCreateOrConnectWithoutLab_documentsInput], {
    nullable: true
  })
  connectOrCreate?: Analysis_resultsCreateOrConnectWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => Analysis_resultsCreateManyLab_documentsInputEnvelope, {
    nullable: true
  })
  createMany?: Analysis_resultsCreateManyLab_documentsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Analysis_resultsWhereUniqueInput], {
    nullable: true
  })
  connect?: Analysis_resultsWhereUniqueInput[] | undefined;
}
