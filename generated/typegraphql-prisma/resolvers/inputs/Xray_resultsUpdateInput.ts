import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { Enumxray_results_result_type_enumFieldUpdateOperationsInput } from "../inputs/Enumxray_results_result_type_enumFieldUpdateOperationsInput";
import { Lab_documentsUpdateOneRequiredWithoutXray_resultsNestedInput } from "../inputs/Lab_documentsUpdateOneRequiredWithoutXray_resultsNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Xray_resultsUpdateInput", {})
export class Xray_resultsUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  is_abnormal?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Enumxray_results_result_type_enumFieldUpdateOperationsInput, {
    nullable: true
  })
  result_type?: Enumxray_results_result_type_enumFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsUpdateOneRequiredWithoutXray_resultsNestedInput, {
    nullable: true
  })
  lab_documents?: Lab_documentsUpdateOneRequiredWithoutXray_resultsNestedInput | undefined;
}
