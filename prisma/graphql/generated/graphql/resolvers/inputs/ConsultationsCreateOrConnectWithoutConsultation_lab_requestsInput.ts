import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateWithoutConsultation_lab_requestsInput } from "../inputs/ConsultationsCreateWithoutConsultation_lab_requestsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsCreateOrConnectWithoutConsultation_lab_requestsInput", {})
export class ConsultationsCreateOrConnectWithoutConsultation_lab_requestsInput {
  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationsCreateWithoutConsultation_lab_requestsInput, {
    nullable: false
  })
  create!: ConsultationsCreateWithoutConsultation_lab_requestsInput;
}
