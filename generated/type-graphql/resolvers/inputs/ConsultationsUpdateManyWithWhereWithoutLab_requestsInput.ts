import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsScalarWhereInput } from "../inputs/ConsultationsScalarWhereInput";
import { ConsultationsUpdateManyMutationInput } from "../inputs/ConsultationsUpdateManyMutationInput";

@TypeGraphQL.InputType("ConsultationsUpdateManyWithWhereWithoutLab_requestsInput", {})
export class ConsultationsUpdateManyWithWhereWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => ConsultationsScalarWhereInput, {
    nullable: false
  })
  where!: ConsultationsScalarWhereInput;

  @TypeGraphQL.Field(_type => ConsultationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ConsultationsUpdateManyMutationInput;
}
