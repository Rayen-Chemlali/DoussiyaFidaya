import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Consultation_lab_requestsCreateManyLab_requestsInputEnvelope } from "../inputs/Consultation_lab_requestsCreateManyLab_requestsInputEnvelope";
import { Consultation_lab_requestsCreateOrConnectWithoutLab_requestsInput } from "../inputs/Consultation_lab_requestsCreateOrConnectWithoutLab_requestsInput";
import { Consultation_lab_requestsCreateWithoutLab_requestsInput } from "../inputs/Consultation_lab_requestsCreateWithoutLab_requestsInput";
import { Consultation_lab_requestsWhereUniqueInput } from "../inputs/Consultation_lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Consultation_lab_requestsCreateNestedManyWithoutLab_requestsInput", {})
export class Consultation_lab_requestsCreateNestedManyWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => [Consultation_lab_requestsCreateWithoutLab_requestsInput], {
    nullable: true
  })
  create?: Consultation_lab_requestsCreateWithoutLab_requestsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsCreateOrConnectWithoutLab_requestsInput], {
    nullable: true
  })
  connectOrCreate?: Consultation_lab_requestsCreateOrConnectWithoutLab_requestsInput[] | undefined;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsCreateManyLab_requestsInputEnvelope, {
    nullable: true
  })
  createMany?: Consultation_lab_requestsCreateManyLab_requestsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsWhereUniqueInput], {
    nullable: true
  })
  connect?: Consultation_lab_requestsWhereUniqueInput[] | undefined;
}
