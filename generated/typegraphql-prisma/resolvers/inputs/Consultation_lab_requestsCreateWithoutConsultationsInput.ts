import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCreateNestedOneWithoutConsultation_lab_requestsInput } from "../inputs/Lab_requestsCreateNestedOneWithoutConsultation_lab_requestsInput";

@TypeGraphQL.InputType("Consultation_lab_requestsCreateWithoutConsultationsInput", {})
export class Consultation_lab_requestsCreateWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => Lab_requestsCreateNestedOneWithoutConsultation_lab_requestsInput, {
    nullable: false
  })
  lab_requests!: Lab_requestsCreateNestedOneWithoutConsultation_lab_requestsInput;
}
