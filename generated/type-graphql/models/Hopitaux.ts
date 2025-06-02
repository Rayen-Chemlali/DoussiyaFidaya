import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { hopitaux_type_enum } from "../enums/hopitaux_type_enum";

@TypeGraphQL.ObjectType("Hopitaux", {})
export class Hopitaux {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

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
  address?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | null;
}
