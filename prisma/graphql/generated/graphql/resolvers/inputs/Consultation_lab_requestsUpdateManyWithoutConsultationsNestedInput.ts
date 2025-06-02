import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Consultation_lab_requestsCreateManyConsultationsInputEnvelope } from "../inputs/Consultation_lab_requestsCreateManyConsultationsInputEnvelope";
import { Consultation_lab_requestsCreateOrConnectWithoutConsultationsInput } from "../inputs/Consultation_lab_requestsCreateOrConnectWithoutConsultationsInput";
import { Consultation_lab_requestsCreateWithoutConsultationsInput } from "../inputs/Consultation_lab_requestsCreateWithoutConsultationsInput";
import { Consultation_lab_requestsScalarWhereInput } from "../inputs/Consultation_lab_requestsScalarWhereInput";
import { Consultation_lab_requestsUpdateManyWithWhereWithoutConsultationsInput } from "../inputs/Consultation_lab_requestsUpdateManyWithWhereWithoutConsultationsInput";
import { Consultation_lab_requestsUpdateWithWhereUniqueWithoutConsultationsInput } from "../inputs/Consultation_lab_requestsUpdateWithWhereUniqueWithoutConsultationsInput";
import { Consultation_lab_requestsUpsertWithWhereUniqueWithoutConsultationsInput } from "../inputs/Consultation_lab_requestsUpsertWithWhereUniqueWithoutConsultationsInput";
import { Consultation_lab_requestsWhereUniqueInput } from "../inputs/Consultation_lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Consultation_lab_requestsUpdateManyWithoutConsultationsNestedInput", {})
export class Consultation_lab_requestsUpdateManyWithoutConsultationsNestedInput {
  @TypeGraphQL.Field(_type => [Consultation_lab_requestsCreateWithoutConsultationsInput], {
    nullable: true
  })
  create?: Consultation_lab_requestsCreateWithoutConsultationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsCreateOrConnectWithoutConsultationsInput], {
    nullable: true
  })
  connectOrCreate?: Consultation_lab_requestsCreateOrConnectWithoutConsultationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsUpsertWithWhereUniqueWithoutConsultationsInput], {
    nullable: true
  })
  upsert?: Consultation_lab_requestsUpsertWithWhereUniqueWithoutConsultationsInput[] | undefined;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsCreateManyConsultationsInputEnvelope, {
    nullable: true
  })
  createMany?: Consultation_lab_requestsCreateManyConsultationsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsWhereUniqueInput], {
    nullable: true
  })
  set?: Consultation_lab_requestsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Consultation_lab_requestsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsWhereUniqueInput], {
    nullable: true
  })
  delete?: Consultation_lab_requestsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsWhereUniqueInput], {
    nullable: true
  })
  connect?: Consultation_lab_requestsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsUpdateWithWhereUniqueWithoutConsultationsInput], {
    nullable: true
  })
  update?: Consultation_lab_requestsUpdateWithWhereUniqueWithoutConsultationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsUpdateManyWithWhereWithoutConsultationsInput], {
    nullable: true
  })
  updateMany?: Consultation_lab_requestsUpdateManyWithWhereWithoutConsultationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Consultation_lab_requestsScalarWhereInput[] | undefined;
}
