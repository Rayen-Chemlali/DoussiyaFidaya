import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxCreateWithoutDoctorsInput } from "../inputs/Instituts_medicauxCreateWithoutDoctorsInput";
import { Instituts_medicauxUpdateWithoutDoctorsInput } from "../inputs/Instituts_medicauxUpdateWithoutDoctorsInput";
import { Instituts_medicauxWhereUniqueInput } from "../inputs/Instituts_medicauxWhereUniqueInput";

@TypeGraphQL.InputType("Instituts_medicauxUpsertWithWhereUniqueWithoutDoctorsInput", {})
export class Instituts_medicauxUpsertWithWhereUniqueWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => Instituts_medicauxWhereUniqueInput, {
    nullable: false
  })
  where!: Instituts_medicauxWhereUniqueInput;

  @TypeGraphQL.Field(_type => Instituts_medicauxUpdateWithoutDoctorsInput, {
    nullable: false
  })
  update!: Instituts_medicauxUpdateWithoutDoctorsInput;

  @TypeGraphQL.Field(_type => Instituts_medicauxCreateWithoutDoctorsInput, {
    nullable: false
  })
  create!: Instituts_medicauxCreateWithoutDoctorsInput;
}
