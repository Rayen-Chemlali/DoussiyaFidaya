import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateOrConnectWithoutXray_resultsInput } from "../inputs/Lab_documentsCreateOrConnectWithoutXray_resultsInput";
import { Lab_documentsCreateWithoutXray_resultsInput } from "../inputs/Lab_documentsCreateWithoutXray_resultsInput";
import { Lab_documentsUpdateToOneWithWhereWithoutXray_resultsInput } from "../inputs/Lab_documentsUpdateToOneWithWhereWithoutXray_resultsInput";
import { Lab_documentsUpsertWithoutXray_resultsInput } from "../inputs/Lab_documentsUpsertWithoutXray_resultsInput";
import { Lab_documentsWhereUniqueInput } from "../inputs/Lab_documentsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_documentsUpdateOneRequiredWithoutXray_resultsNestedInput", {})
export class Lab_documentsUpdateOneRequiredWithoutXray_resultsNestedInput {
  @TypeGraphQL.Field(_type => Lab_documentsCreateWithoutXray_resultsInput, {
    nullable: true
  })
  create?: Lab_documentsCreateWithoutXray_resultsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsCreateOrConnectWithoutXray_resultsInput, {
    nullable: true
  })
  connectOrCreate?: Lab_documentsCreateOrConnectWithoutXray_resultsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsUpsertWithoutXray_resultsInput, {
    nullable: true
  })
  upsert?: Lab_documentsUpsertWithoutXray_resultsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsWhereUniqueInput, {
    nullable: true
  })
  connect?: Lab_documentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsUpdateToOneWithWhereWithoutXray_resultsInput, {
    nullable: true
  })
  update?: Lab_documentsUpdateToOneWithWhereWithoutXray_resultsInput | undefined;
}
