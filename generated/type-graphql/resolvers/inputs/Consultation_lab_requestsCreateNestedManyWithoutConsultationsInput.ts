import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Consultation_lab_requestsCreateManyConsultationsInputEnvelope } from "../inputs/Consultation_lab_requestsCreateManyConsultationsInputEnvelope";
import { Consultation_lab_requestsCreateOrConnectWithoutConsultationsInput } from "../inputs/Consultation_lab_requestsCreateOrConnectWithoutConsultationsInput";
import { Consultation_lab_requestsCreateWithoutConsultationsInput } from "../inputs/Consultation_lab_requestsCreateWithoutConsultationsInput";
import { Consultation_lab_requestsWhereUniqueInput } from "../inputs/Consultation_lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Consultation_lab_requestsCreateNestedManyWithoutConsultationsInput", {})
export class Consultation_lab_requestsCreateNestedManyWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => [Consultation_lab_requestsCreateWithoutConsultationsInput], {
    nullable: true
  })
  create?: Consultation_lab_requestsCreateWithoutConsultationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsCreateOrConnectWithoutConsultationsInput], {
    nullable: true
  })
  connectOrCreate?: Consultation_lab_requestsCreateOrConnectWithoutConsultationsInput[] | undefined;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsCreateManyConsultationsInputEnvelope, {
    nullable: true
  })
  createMany?: Consultation_lab_requestsCreateManyConsultationsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsWhereUniqueInput], {
    nullable: true
  })
  connect?: Consultation_lab_requestsWhereUniqueInput[] | undefined;
}
