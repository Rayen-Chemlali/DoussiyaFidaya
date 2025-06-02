import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxUpdateWithoutAuthorizationsInput } from "../inputs/Instituts_medicauxUpdateWithoutAuthorizationsInput";
import { Instituts_medicauxWhereInput } from "../inputs/Instituts_medicauxWhereInput";

@TypeGraphQL.InputType("Instituts_medicauxUpdateToOneWithWhereWithoutAuthorizationsInput", {})
export class Instituts_medicauxUpdateToOneWithWhereWithoutAuthorizationsInput {
  @TypeGraphQL.Field(_type => Instituts_medicauxWhereInput, {
    nullable: true
  })
  where?: Instituts_medicauxWhereInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxUpdateWithoutAuthorizationsInput, {
    nullable: false
  })
  data!: Instituts_medicauxUpdateWithoutAuthorizationsInput;
}
