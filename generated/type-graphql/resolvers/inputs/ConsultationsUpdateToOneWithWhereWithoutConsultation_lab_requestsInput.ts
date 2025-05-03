import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsUpdateWithoutConsultation_lab_requestsInput } from "../inputs/ConsultationsUpdateWithoutConsultation_lab_requestsInput";
import { ConsultationsWhereInput } from "../inputs/ConsultationsWhereInput";

@TypeGraphQL.InputType("ConsultationsUpdateToOneWithWhereWithoutConsultation_lab_requestsInput", {})
export class ConsultationsUpdateToOneWithWhereWithoutConsultation_lab_requestsInput {
  @TypeGraphQL.Field(_type => ConsultationsWhereInput, {
    nullable: true
  })
  where?: ConsultationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsUpdateWithoutConsultation_lab_requestsInput, {
    nullable: false
  })
  data!: ConsultationsUpdateWithoutConsultation_lab_requestsInput;
}
