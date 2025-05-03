import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateOrConnectWithoutAnalysis_resultsInput } from "../inputs/Lab_documentsCreateOrConnectWithoutAnalysis_resultsInput";
import { Lab_documentsCreateWithoutAnalysis_resultsInput } from "../inputs/Lab_documentsCreateWithoutAnalysis_resultsInput";
import { Lab_documentsUpdateToOneWithWhereWithoutAnalysis_resultsInput } from "../inputs/Lab_documentsUpdateToOneWithWhereWithoutAnalysis_resultsInput";
import { Lab_documentsUpsertWithoutAnalysis_resultsInput } from "../inputs/Lab_documentsUpsertWithoutAnalysis_resultsInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsUpdateOneRequiredWithoutAnalysis_resultsNestedInput", {})
export class Lab_documentsUpdateOneRequiredWithoutAnalysis_resultsNestedInput {
  @TypeGraphQL.Field(_type => Lab_documentsCreateWithoutAnalysis_resultsInput, {
    nullable: true
  })
  create?: Lab_documentsCreateWithoutAnalysis_resultsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsCreateOrConnectWithoutAnalysis_resultsInput, {
    nullable: true
  })
  connectOrCreate?: Lab_documentsCreateOrConnectWithoutAnalysis_resultsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsUpsertWithoutAnalysis_resultsInput, {
    nullable: true
  })
  upsert?: Lab_documentsUpsertWithoutAnalysis_resultsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsWhereUniqueInput, {
    nullable: true
  })
  connect?: Lab_documentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsUpdateToOneWithWhereWithoutAnalysis_resultsInput, {
    nullable: true
  })
  update?: Lab_documentsUpdateToOneWithWhereWithoutAnalysis_resultsInput | undefined;
}
