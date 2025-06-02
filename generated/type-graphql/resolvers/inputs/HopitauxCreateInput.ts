import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { hopitaux_type_enum } from "../../enums/hopitaux_type_enum";

@TypeGraphQL.InputType("HopitauxCreateInput", {})
export class HopitauxCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => hopitaux_type_enum, {
    nullable: false
  })
  type!: "doctor" | "clinique" | "hopital";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;
}
