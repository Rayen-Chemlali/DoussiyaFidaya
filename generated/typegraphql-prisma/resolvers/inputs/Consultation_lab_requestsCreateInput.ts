import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateNestedOneWithoutConsultation_lab_requestsInput } from "../inputs/ConsultationsCreateNestedOneWithoutConsultation_lab_requestsInput";
import { Lab_requestsCreateNestedOneWithoutConsultation_lab_requestsInput } from "../inputs/Lab_requestsCreateNestedOneWithoutConsultation_lab_requestsInput";

@TypeGraphQL.InputType("Consultation_lab_requestsCreateInput", {})
export class Consultation_lab_requestsCreateInput {
  @TypeGraphQL.Field(_type => Lab_requestsCreateNestedOneWithoutConsultation_lab_requestsInput, {
    nullable: false
  })
  lab_requests!: Lab_requestsCreateNestedOneWithoutConsultation_lab_requestsInput;

  @TypeGraphQL.Field(_type => ConsultationsCreateNestedOneWithoutConsultation_lab_requestsInput, {
    nullable: false
  })
  consultations!: ConsultationsCreateNestedOneWithoutConsultation_lab_requestsInput;
}
