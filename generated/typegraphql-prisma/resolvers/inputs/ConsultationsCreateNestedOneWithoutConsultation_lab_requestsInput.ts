import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateOrConnectWithoutConsultation_lab_requestsInput } from "../inputs/ConsultationsCreateOrConnectWithoutConsultation_lab_requestsInput";
import { ConsultationsCreateWithoutConsultation_lab_requestsInput } from "../inputs/ConsultationsCreateWithoutConsultation_lab_requestsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsCreateNestedOneWithoutConsultation_lab_requestsInput", {})
export class ConsultationsCreateNestedOneWithoutConsultation_lab_requestsInput {
  @TypeGraphQL.Field(_type => ConsultationsCreateWithoutConsultation_lab_requestsInput, {
    nullable: true
  })
  create?: ConsultationsCreateWithoutConsultation_lab_requestsInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsCreateOrConnectWithoutConsultation_lab_requestsInput, {
    nullable: true
  })
  connectOrCreate?: ConsultationsCreateOrConnectWithoutConsultation_lab_requestsInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: true
  })
  connect?: ConsultationsWhereUniqueInput | undefined;
}
