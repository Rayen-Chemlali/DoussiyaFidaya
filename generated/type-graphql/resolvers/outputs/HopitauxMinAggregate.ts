import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { hopitaux_type_enum } from "../../enums/hopitaux_type_enum";

@TypeGraphQL.ObjectType("HopitauxMinAggregate", {})
export class HopitauxMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => hopitaux_type_enum, {
    nullable: true
  })
  type!: "doctor" | "clinique" | "hopital" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;
}
