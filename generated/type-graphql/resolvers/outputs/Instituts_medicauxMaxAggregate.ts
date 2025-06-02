import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { instituts_medicaux_type_enum } from "../../enums/instituts_medicaux_type_enum";

@TypeGraphQL.ObjectType("Instituts_medicauxMaxAggregate", {})
export class Instituts_medicauxMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => instituts_medicaux_type_enum, {
    nullable: true
  })
  type!: "CLINIC" | "HOSPITAL" | "LABORATORY" | null;
}
