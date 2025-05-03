import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsCountAggregate } from "../outputs/AuthorizationsCountAggregate";
import { AuthorizationsMaxAggregate } from "../outputs/AuthorizationsMaxAggregate";
import { AuthorizationsMinAggregate } from "../outputs/AuthorizationsMinAggregate";

@TypeGraphQL.ObjectType("AggregateAuthorizations", {})
export class AggregateAuthorizations {
  @TypeGraphQL.Field(_type => AuthorizationsCountAggregate, {
    nullable: true
  })
  _count!: AuthorizationsCountAggregate | null;

  @TypeGraphQL.Field(_type => AuthorizationsMinAggregate, {
    nullable: true
  })
  _min!: AuthorizationsMinAggregate | null;

  @TypeGraphQL.Field(_type => AuthorizationsMaxAggregate, {
    nullable: true
  })
  _max!: AuthorizationsMaxAggregate | null;
}
