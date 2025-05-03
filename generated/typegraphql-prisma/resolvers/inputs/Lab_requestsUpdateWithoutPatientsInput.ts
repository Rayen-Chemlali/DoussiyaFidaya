import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Consultation_lab_requestsUpdateManyWithoutLab_requestsNestedInput } from "../inputs/Consultation_lab_requestsUpdateManyWithoutLab_requestsNestedInput";
import { DoctorsUpdateOneWithoutLab_requestsNestedInput } from "../inputs/DoctorsUpdateOneWithoutLab_requestsNestedInput";
import { Lab_documentsUpdateManyWithoutLab_requestsNestedInput } from "../inputs/Lab_documentsUpdateManyWithoutLab_requestsNestedInput";
import { NullableEnumlab_requests_priority_enumFieldUpdateOperationsInput } from "../inputs/NullableEnumlab_requests_priority_enumFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Lab_requestsUpdateWithoutPatientsInput", {})
export class Lab_requestsUpdateWithoutPatientsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumlab_requests_priority_enumFieldUpdateOperationsInput, {
    nullable: true
  })
  priority?: NullableEnumlab_requests_priority_enumFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsUpdateManyWithoutLab_requestsNestedInput, {
    nullable: true
  })
  consultation_lab_requests?: Consultation_lab_requestsUpdateManyWithoutLab_requestsNestedInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsUpdateManyWithoutLab_requestsNestedInput, {
    nullable: true
  })
  lab_documents?: Lab_documentsUpdateManyWithoutLab_requestsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateOneWithoutLab_requestsNestedInput, {
    nullable: true
  })
  doctors?: DoctorsUpdateOneWithoutLab_requestsNestedInput | undefined;
}
