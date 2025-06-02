import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Consultation_lab_requestsCreateWithoutConsultationsInput } from "../inputs/Consultation_lab_requestsCreateWithoutConsultationsInput";
import { Consultation_lab_requestsWhereUniqueInput } from "../inputs/Consultation_lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Consultation_lab_requestsCreateOrConnectWithoutConsultationsInput", {})
export class Consultation_lab_requestsCreateOrConnectWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => Consultation_lab_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Consultation_lab_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsCreateWithoutConsultationsInput, {
    nullable: false
  })
  create!: Consultation_lab_requestsCreateWithoutConsultationsInput;
}
