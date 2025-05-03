import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateWithoutConsultation_lab_requestsInput } from "../inputs/ConsultationsCreateWithoutConsultation_lab_requestsInput";
import { ConsultationsUpdateWithoutConsultation_lab_requestsInput } from "../inputs/ConsultationsUpdateWithoutConsultation_lab_requestsInput";
import { ConsultationsWhereInput } from "../inputs/ConsultationsWhereInput";

@TypeGraphQL.InputType("ConsultationsUpsertWithoutConsultation_lab_requestsInput", {})
export class ConsultationsUpsertWithoutConsultation_lab_requestsInput {
  @TypeGraphQL.Field(_type => ConsultationsUpdateWithoutConsultation_lab_requestsInput, {
    nullable: false
  })
  update!: ConsultationsUpdateWithoutConsultation_lab_requestsInput;

  @TypeGraphQL.Field(_type => ConsultationsCreateWithoutConsultation_lab_requestsInput, {
    nullable: false
  })
  create!: ConsultationsCreateWithoutConsultation_lab_requestsInput;

  @TypeGraphQL.Field(_type => ConsultationsWhereInput, {
    nullable: true
  })
  where?: ConsultationsWhereInput | undefined;
}
