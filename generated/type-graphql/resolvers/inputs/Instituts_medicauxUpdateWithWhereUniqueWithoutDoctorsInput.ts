import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxUpdateWithoutDoctorsInput } from "../inputs/Instituts_medicauxUpdateWithoutDoctorsInput";
import { Instituts_medicauxWhereUniqueInput } from "../inputs/Instituts_medicauxWhereUniqueInput";

@TypeGraphQL.InputType("Instituts_medicauxUpdateWithWhereUniqueWithoutDoctorsInput", {})
export class Instituts_medicauxUpdateWithWhereUniqueWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => Instituts_medicauxWhereUniqueInput, {
    nullable: false
  })
  where!: Instituts_medicauxWhereUniqueInput;

  @TypeGraphQL.Field(_type => Instituts_medicauxUpdateWithoutDoctorsInput, {
    nullable: false
  })
  data!: Instituts_medicauxUpdateWithoutDoctorsInput;
}
