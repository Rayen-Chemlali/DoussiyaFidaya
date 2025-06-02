import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CliniquesCountAggregate } from "../outputs/CliniquesCountAggregate";
import { CliniquesMaxAggregate } from "../outputs/CliniquesMaxAggregate";
import { CliniquesMinAggregate } from "../outputs/CliniquesMinAggregate";
import { cliniques_type_enum } from "../../enums/cliniques_type_enum";

@TypeGraphQL.ObjectType("CliniquesGroupBy", {})
export class CliniquesGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => cliniques_type_enum, {
    nullable: false
  })
  type!: "PRIVATE" | "PUBLIC";

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

  @TypeGraphQL.Field(_type => CliniquesCountAggregate, {
    nullable: true
  })
  _count!: CliniquesCountAggregate | null;

  @TypeGraphQL.Field(_type => CliniquesMinAggregate, {
    nullable: true
  })
  _min!: CliniquesMinAggregate | null;

  @TypeGraphQL.Field(_type => CliniquesMaxAggregate, {
    nullable: true
  })
  _max!: CliniquesMaxAggregate | null;
}
