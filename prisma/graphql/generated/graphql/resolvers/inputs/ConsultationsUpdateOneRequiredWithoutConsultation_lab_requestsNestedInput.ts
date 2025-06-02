import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateOrConnectWithoutConsultation_lab_requestsInput } from "../inputs/ConsultationsCreateOrConnectWithoutConsultation_lab_requestsInput";
import { ConsultationsCreateWithoutConsultation_lab_requestsInput } from "../inputs/ConsultationsCreateWithoutConsultation_lab_requestsInput";
import { ConsultationsUpdateToOneWithWhereWithoutConsultation_lab_requestsInput } from "../inputs/ConsultationsUpdateToOneWithWhereWithoutConsultation_lab_requestsInput";
import { ConsultationsUpsertWithoutConsultation_lab_requestsInput } from "../inputs/ConsultationsUpsertWithoutConsultation_lab_requestsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsUpdateOneRequiredWithoutConsultation_lab_requestsNestedInput", {})
export class ConsultationsUpdateOneRequiredWithoutConsultation_lab_requestsNestedInput {
  @TypeGraphQL.Field(_type => ConsultationsCreateWithoutConsultation_lab_requestsInput, {
    nullable: true
  })
  create?: ConsultationsCreateWithoutConsultation_lab_requestsInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsCreateOrConnectWithoutConsultation_lab_requestsInput, {
    nullable: true
  })
  connectOrCreate?: ConsultationsCreateOrConnectWithoutConsultation_lab_requestsInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsUpsertWithoutConsultation_lab_requestsInput, {
    nullable: true
  })
  upsert?: ConsultationsUpsertWithoutConsultation_lab_requestsInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: true
  })
  connect?: ConsultationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsUpdateToOneWithWhereWithoutConsultation_lab_requestsInput, {
    nullable: true
  })
  update?: ConsultationsUpdateToOneWithWhereWithoutConsultation_lab_requestsInput | undefined;
}
