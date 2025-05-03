import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxCreateWithoutDoctor_institutsInput } from "../inputs/Instituts_medicauxCreateWithoutDoctor_institutsInput";
import { Instituts_medicauxUpdateWithoutDoctor_institutsInput } from "../inputs/Instituts_medicauxUpdateWithoutDoctor_institutsInput";
import { Instituts_medicauxWhereInput } from "../inputs/Instituts_medicauxWhereInput";

@TypeGraphQL.InputType("Instituts_medicauxUpsertWithoutDoctor_institutsInput", {})
export class Instituts_medicauxUpsertWithoutDoctor_institutsInput {
  @TypeGraphQL.Field(_type => Instituts_medicauxUpdateWithoutDoctor_institutsInput, {
    nullable: false
  })
  update!: Instituts_medicauxUpdateWithoutDoctor_institutsInput;

  @TypeGraphQL.Field(_type => Instituts_medicauxCreateWithoutDoctor_institutsInput, {
    nullable: false
  })
  create!: Instituts_medicauxCreateWithoutDoctor_institutsInput;

  @TypeGraphQL.Field(_type => Instituts_medicauxWhereInput, {
    nullable: true
  })
  where?: Instituts_medicauxWhereInput | undefined;
}
