import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsCountAggregate } from "../outputs/Rdv_requestsCountAggregate";
import { Rdv_requestsMaxAggregate } from "../outputs/Rdv_requestsMaxAggregate";
import { Rdv_requestsMinAggregate } from "../outputs/Rdv_requestsMinAggregate";

@TypeGraphQL.ObjectType("AggregateRdv_requests", {})
export class AggregateRdv_requests {
  @TypeGraphQL.Field(_type => Rdv_requestsCountAggregate, {
    nullable: true
  })
  _count!: Rdv_requestsCountAggregate | null;

  @TypeGraphQL.Field(_type => Rdv_requestsMinAggregate, {
    nullable: true
  })
  _min!: Rdv_requestsMinAggregate | null;

  @TypeGraphQL.Field(_type => Rdv_requestsMaxAggregate, {
    nullable: true
  })
  _max!: Rdv_requestsMaxAggregate | null;
}
