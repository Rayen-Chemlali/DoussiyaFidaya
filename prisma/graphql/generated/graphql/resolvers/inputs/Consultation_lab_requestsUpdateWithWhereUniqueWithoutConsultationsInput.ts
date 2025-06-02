import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Consultation_lab_requestsUpdateWithoutConsultationsInput } from "../inputs/Consultation_lab_requestsUpdateWithoutConsultationsInput";
import { Consultation_lab_requestsWhereUniqueInput } from "../inputs/Consultation_lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Consultation_lab_requestsUpdateWithWhereUniqueWithoutConsultationsInput", {})
export class Consultation_lab_requestsUpdateWithWhereUniqueWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => Consultation_lab_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Consultation_lab_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsUpdateWithoutConsultationsInput, {
    nullable: false
  })
  data!: Consultation_lab_requestsUpdateWithoutConsultationsInput;
}
