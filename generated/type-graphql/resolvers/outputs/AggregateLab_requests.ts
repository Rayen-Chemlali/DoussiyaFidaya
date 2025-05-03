import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCountAggregate } from "../outputs/Lab_requestsCountAggregate";
import { Lab_requestsMaxAggregate } from "../outputs/Lab_requestsMaxAggregate";
import { Lab_requestsMinAggregate } from "../outputs/Lab_requestsMinAggregate";

@TypeGraphQL.ObjectType("AggregateLab_requests", {})
export class AggregateLab_requests {
  @TypeGraphQL.Field(_type => Lab_requestsCountAggregate, {
    nullable: true
  })
  _count!: Lab_requestsCountAggregate | null;

  @TypeGraphQL.Field(_type => Lab_requestsMinAggregate, {
    nullable: true
  })
  _min!: Lab_requestsMinAggregate | null;

  @TypeGraphQL.Field(_type => Lab_requestsMaxAggregate, {
    nullable: true
  })
  _max!: Lab_requestsMaxAggregate | null;
}
