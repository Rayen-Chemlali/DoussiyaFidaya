import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CliniquesCountAggregate } from "../outputs/CliniquesCountAggregate";
import { CliniquesMaxAggregate } from "../outputs/CliniquesMaxAggregate";
import { CliniquesMinAggregate } from "../outputs/CliniquesMinAggregate";

@TypeGraphQL.ObjectType("AggregateCliniques", {})
export class AggregateCliniques {
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
