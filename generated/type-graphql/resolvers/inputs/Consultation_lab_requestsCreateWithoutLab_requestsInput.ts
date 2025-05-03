import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateNestedOneWithoutConsultation_lab_requestsInput } from "../inputs/ConsultationsCreateNestedOneWithoutConsultation_lab_requestsInput";

@TypeGraphQL.InputType("Consultation_lab_requestsCreateWithoutLab_requestsInput", {})
export class Consultation_lab_requestsCreateWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => ConsultationsCreateNestedOneWithoutConsultation_lab_requestsInput, {
    nullable: false
  })
  consultations!: ConsultationsCreateNestedOneWithoutConsultation_lab_requestsInput;
}
