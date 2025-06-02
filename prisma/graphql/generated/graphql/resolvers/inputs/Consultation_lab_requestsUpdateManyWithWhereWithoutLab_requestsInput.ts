import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Consultation_lab_requestsScalarWhereInput } from "../inputs/Consultation_lab_requestsScalarWhereInput";
import { Consultation_lab_requestsUpdateManyMutationInput } from "../inputs/Consultation_lab_requestsUpdateManyMutationInput";

@TypeGraphQL.InputType("Consultation_lab_requestsUpdateManyWithWhereWithoutLab_requestsInput", {})
export class Consultation_lab_requestsUpdateManyWithWhereWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => Consultation_lab_requestsScalarWhereInput, {
    nullable: false
  })
  where!: Consultation_lab_requestsScalarWhereInput;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Consultation_lab_requestsUpdateManyMutationInput;
}
