import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxScalarWhereInput } from "../inputs/Instituts_medicauxScalarWhereInput";
import { Instituts_medicauxUpdateManyMutationInput } from "../inputs/Instituts_medicauxUpdateManyMutationInput";

@TypeGraphQL.InputType("Instituts_medicauxUpdateManyWithWhereWithoutDoctorsInput", {})
export class Instituts_medicauxUpdateManyWithWhereWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => Instituts_medicauxScalarWhereInput, {
    nullable: false
  })
  where!: Instituts_medicauxScalarWhereInput;

  @TypeGraphQL.Field(_type => Instituts_medicauxUpdateManyMutationInput, {
    nullable: false
  })
  data!: Instituts_medicauxUpdateManyMutationInput;
}
