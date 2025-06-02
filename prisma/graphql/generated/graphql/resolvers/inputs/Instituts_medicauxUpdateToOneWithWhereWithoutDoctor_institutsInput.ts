import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxUpdateWithoutDoctor_institutsInput } from "../inputs/Instituts_medicauxUpdateWithoutDoctor_institutsInput";
import { Instituts_medicauxWhereInput } from "../inputs/Instituts_medicauxWhereInput";

@TypeGraphQL.InputType("Instituts_medicauxUpdateToOneWithWhereWithoutDoctor_institutsInput", {})
export class Instituts_medicauxUpdateToOneWithWhereWithoutDoctor_institutsInput {
  @TypeGraphQL.Field(_type => Instituts_medicauxWhereInput, {
    nullable: true
  })
  where?: Instituts_medicauxWhereInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxUpdateWithoutDoctor_institutsInput, {
    nullable: false
  })
  data!: Instituts_medicauxUpdateWithoutDoctor_institutsInput;
}
