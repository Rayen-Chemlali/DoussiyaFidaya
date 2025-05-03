import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsScalarWhereInput } from "../inputs/ConsultationsScalarWhereInput";
import { ConsultationsUpdateManyMutationInput } from "../inputs/ConsultationsUpdateManyMutationInput";

@TypeGraphQL.InputType("ConsultationsUpdateManyWithWhereWithoutInstituts_medicauxInput", {})
export class ConsultationsUpdateManyWithWhereWithoutInstituts_medicauxInput {
  @TypeGraphQL.Field(_type => ConsultationsScalarWhereInput, {
    nullable: false
  })
  where!: ConsultationsScalarWhereInput;

  @TypeGraphQL.Field(_type => ConsultationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ConsultationsUpdateManyMutationInput;
}
