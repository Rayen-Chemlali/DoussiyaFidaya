import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PharmaciesCountAggregate } from "../outputs/PharmaciesCountAggregate";
import { PharmaciesMaxAggregate } from "../outputs/PharmaciesMaxAggregate";
import { PharmaciesMinAggregate } from "../outputs/PharmaciesMinAggregate";

@TypeGraphQL.ObjectType("AggregatePharmacies", {})
export class AggregatePharmacies {
  @TypeGraphQL.Field(_type => PharmaciesCountAggregate, {
    nullable: true
  })
  _count!: PharmaciesCountAggregate | null;

  @TypeGraphQL.Field(_type => PharmaciesMinAggregate, {
    nullable: true
  })
  _min!: PharmaciesMinAggregate | null;

  @TypeGraphQL.Field(_type => PharmaciesMaxAggregate, {
    nullable: true
  })
  _max!: PharmaciesMaxAggregate | null;
}
