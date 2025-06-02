import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsUpdateOneRequiredWithoutConsultation_lab_requestsNestedInput } from "../inputs/ConsultationsUpdateOneRequiredWithoutConsultation_lab_requestsNestedInput";

@TypeGraphQL.InputType("Consultation_lab_requestsUpdateWithoutLab_requestsInput", {})
export class Consultation_lab_requestsUpdateWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => ConsultationsUpdateOneRequiredWithoutConsultation_lab_requestsNestedInput, {
    nullable: true
  })
  consultations?: ConsultationsUpdateOneRequiredWithoutConsultation_lab_requestsNestedInput | undefined;
}
