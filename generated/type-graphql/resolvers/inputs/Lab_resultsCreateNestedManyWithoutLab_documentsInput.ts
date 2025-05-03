import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_resultsCreateManyLab_documentsInputEnvelope } from "../inputs/Lab_resultsCreateManyLab_documentsInputEnvelope";
import { Lab_resultsCreateOrConnectWithoutLab_documentsInput } from "../inputs/Lab_resultsCreateOrConnectWithoutLab_documentsInput";
import { Lab_resultsCreateWithoutLab_documentsInput } from "../inputs/Lab_resultsCreateWithoutLab_documentsInput";
import { Lab_resultsWhereUniqueInput } from "../inputs/Lab_resultsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_resultsCreateNestedManyWithoutLab_documentsInput", {})
export class Lab_resultsCreateNestedManyWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => [Lab_resultsCreateWithoutLab_documentsInput], {
    nullable: true
  })
  create?: Lab_resultsCreateWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_resultsCreateOrConnectWithoutLab_documentsInput], {
    nullable: true
  })
  connectOrCreate?: Lab_resultsCreateOrConnectWithoutLab_documentsInput[] | undefined;

  @TypeGraphQL.Field(_type => Lab_resultsCreateManyLab_documentsInputEnvelope, {
    nullable: true
  })
  createMany?: Lab_resultsCreateManyLab_documentsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Lab_resultsWhereUniqueInput], {
    nullable: true
  })
  connect?: Lab_resultsWhereUniqueInput[] | undefined;
}
