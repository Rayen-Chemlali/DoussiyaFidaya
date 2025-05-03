import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateOrConnectWithoutCtscan_resultsInput } from "../inputs/Lab_documentsCreateOrConnectWithoutCtscan_resultsInput";
import { Lab_documentsCreateWithoutCtscan_resultsInput } from "../inputs/Lab_documentsCreateWithoutCtscan_resultsInput";
import { Lab_documentsUpdateToOneWithWhereWithoutCtscan_resultsInput } from "../inputs/Lab_documentsUpdateToOneWithWhereWithoutCtscan_resultsInput";
import { Lab_documentsUpsertWithoutCtscan_resultsInput } from "../inputs/Lab_documentsUpsertWithoutCtscan_resultsInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsUpdateOneRequiredWithoutCtscan_resultsNestedInput", {})
export class Lab_documentsUpdateOneRequiredWithoutCtscan_resultsNestedInput {
  @TypeGraphQL.Field(_type => Lab_documentsCreateWithoutCtscan_resultsInput, {
    nullable: true
  })
  create?: Lab_documentsCreateWithoutCtscan_resultsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsCreateOrConnectWithoutCtscan_resultsInput, {
    nullable: true
  })
  connectOrCreate?: Lab_documentsCreateOrConnectWithoutCtscan_resultsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsUpsertWithoutCtscan_resultsInput, {
    nullable: true
  })
  upsert?: Lab_documentsUpsertWithoutCtscan_resultsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsWhereUniqueInput, {
    nullable: true
  })
  connect?: Lab_documentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsUpdateToOneWithWhereWithoutCtscan_resultsInput, {
    nullable: true
  })
  update?: Lab_documentsUpdateToOneWithWhereWithoutCtscan_resultsInput | undefined;
}
