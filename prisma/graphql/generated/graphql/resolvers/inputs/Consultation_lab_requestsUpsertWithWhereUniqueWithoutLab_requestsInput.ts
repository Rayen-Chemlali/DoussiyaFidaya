import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Consultation_lab_requestsCreateWithoutLab_requestsInput } from "../inputs/Consultation_lab_requestsCreateWithoutLab_requestsInput";
import { Consultation_lab_requestsUpdateWithoutLab_requestsInput } from "../inputs/Consultation_lab_requestsUpdateWithoutLab_requestsInput";
import { Consultation_lab_requestsWhereUniqueInput } from "../inputs/Consultation_lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Consultation_lab_requestsUpsertWithWhereUniqueWithoutLab_requestsInput", {})
export class Consultation_lab_requestsUpsertWithWhereUniqueWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => Consultation_lab_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Consultation_lab_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsUpdateWithoutLab_requestsInput, {
    nullable: false
  })
  update!: Consultation_lab_requestsUpdateWithoutLab_requestsInput;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsCreateWithoutLab_requestsInput, {
    nullable: false
  })
  create!: Consultation_lab_requestsCreateWithoutLab_requestsInput;
}
