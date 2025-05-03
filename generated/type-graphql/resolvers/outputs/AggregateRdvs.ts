import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCountAggregate } from "../outputs/RdvsCountAggregate";
import { RdvsMaxAggregate } from "../outputs/RdvsMaxAggregate";
import { RdvsMinAggregate } from "../outputs/RdvsMinAggregate";

@TypeGraphQL.ObjectType("AggregateRdvs", {})
export class AggregateRdvs {
  @TypeGraphQL.Field(_type => RdvsCountAggregate, {
    nullable: true
  })
  _count!: RdvsCountAggregate | null;

  @TypeGraphQL.Field(_type => RdvsMinAggregate, {
    nullable: true
  })
  _min!: RdvsMinAggregate | null;

  @TypeGraphQL.Field(_type => RdvsMaxAggregate, {
    nullable: true
  })
  _max!: RdvsMaxAggregate | null;
}
