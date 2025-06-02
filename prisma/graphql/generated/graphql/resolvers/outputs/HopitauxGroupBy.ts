import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HopitauxCountAggregate } from "../outputs/HopitauxCountAggregate";
import { HopitauxMaxAggregate } from "../outputs/HopitauxMaxAggregate";
import { HopitauxMinAggregate } from "../outputs/HopitauxMinAggregate";
import { hopitaux_type_enum } from "../../enums/hopitaux_type_enum";

@TypeGraphQL.ObjectType("HopitauxGroupBy", {})
export class HopitauxGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => hopitaux_type_enum, {
    nullable: false
  })
  type!: "PUBLIC" | "PRIVATE";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

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

  @TypeGraphQL.Field(_type => HopitauxCountAggregate, {
    nullable: true
  })
  _count!: HopitauxCountAggregate | null;

  @TypeGraphQL.Field(_type => HopitauxMinAggregate, {
    nullable: true
  })
  _min!: HopitauxMinAggregate | null;

  @TypeGraphQL.Field(_type => HopitauxMaxAggregate, {
    nullable: true
  })
  _max!: HopitauxMaxAggregate | null;
}
