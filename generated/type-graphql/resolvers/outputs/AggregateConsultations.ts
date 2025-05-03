import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCountAggregate } from "../outputs/ConsultationsCountAggregate";
import { ConsultationsMaxAggregate } from "../outputs/ConsultationsMaxAggregate";
import { ConsultationsMinAggregate } from "../outputs/ConsultationsMinAggregate";

@TypeGraphQL.ObjectType("AggregateConsultations", {})
export class AggregateConsultations {
  @TypeGraphQL.Field(_type => ConsultationsCountAggregate, {
    nullable: true
  })
  _count!: ConsultationsCountAggregate | null;

  @TypeGraphQL.Field(_type => ConsultationsMinAggregate, {
    nullable: true
  })
  _min!: ConsultationsMinAggregate | null;

  @TypeGraphQL.Field(_type => ConsultationsMaxAggregate, {
    nullable: true
  })
  _max!: ConsultationsMaxAggregate | null;
}
