import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxCreateWithoutAuthorizationsInput } from "../inputs/Instituts_medicauxCreateWithoutAuthorizationsInput";
import { Instituts_medicauxUpdateWithoutAuthorizationsInput } from "../inputs/Instituts_medicauxUpdateWithoutAuthorizationsInput";
import { Instituts_medicauxWhereInput } from "../inputs/Instituts_medicauxWhereInput";

@TypeGraphQL.InputType("Instituts_medicauxUpsertWithoutAuthorizationsInput", {})
export class Instituts_medicauxUpsertWithoutAuthorizationsInput {
  @TypeGraphQL.Field(_type => Instituts_medicauxUpdateWithoutAuthorizationsInput, {
    nullable: false
  })
  update!: Instituts_medicauxUpdateWithoutAuthorizationsInput;

  @TypeGraphQL.Field(_type => Instituts_medicauxCreateWithoutAuthorizationsInput, {
    nullable: false
  })
  create!: Instituts_medicauxCreateWithoutAuthorizationsInput;

  @TypeGraphQL.Field(_type => Instituts_medicauxWhereInput, {
    nullable: true
  })
  where?: Instituts_medicauxWhereInput | undefined;
}
