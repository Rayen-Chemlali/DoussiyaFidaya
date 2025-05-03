import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCountAggregate } from "../outputs/DoctorsCountAggregate";
import { DoctorsMaxAggregate } from "../outputs/DoctorsMaxAggregate";
import { DoctorsMinAggregate } from "../outputs/DoctorsMinAggregate";

@TypeGraphQL.ObjectType("AggregateDoctors", {})
export class AggregateDoctors {
  @TypeGraphQL.Field(_type => DoctorsCountAggregate, {
    nullable: true
  })
  _count!: DoctorsCountAggregate | null;

  @TypeGraphQL.Field(_type => DoctorsMinAggregate, {
    nullable: true
  })
  _min!: DoctorsMinAggregate | null;

  @TypeGraphQL.Field(_type => DoctorsMaxAggregate, {
    nullable: true
  })
  _max!: DoctorsMaxAggregate | null;
}
