import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsUpdateOneRequiredWithoutConsultation_lab_requestsNestedInput } from "../inputs/ConsultationsUpdateOneRequiredWithoutConsultation_lab_requestsNestedInput";
import { Lab_requestsUpdateOneRequiredWithoutConsultation_lab_requestsNestedInput } from "../inputs/Lab_requestsUpdateOneRequiredWithoutConsultation_lab_requestsNestedInput";

@TypeGraphQL.InputType("Consultation_lab_requestsUpdateInput", {})
export class Consultation_lab_requestsUpdateInput {
  @TypeGraphQL.Field(_type => Lab_requestsUpdateOneRequiredWithoutConsultation_lab_requestsNestedInput, {
    nullable: true
  })
  lab_requests?: Lab_requestsUpdateOneRequiredWithoutConsultation_lab_requestsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsUpdateOneRequiredWithoutConsultation_lab_requestsNestedInput, {
    nullable: true
  })
  consultations?: ConsultationsUpdateOneRequiredWithoutConsultation_lab_requestsNestedInput | undefined;
}
