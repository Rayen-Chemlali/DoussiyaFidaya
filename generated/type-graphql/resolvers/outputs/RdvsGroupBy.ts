import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCountAggregate } from "../outputs/RdvsCountAggregate";
import { RdvsMaxAggregate } from "../outputs/RdvsMaxAggregate";
import { RdvsMinAggregate } from "../outputs/RdvsMinAggregate";

@TypeGraphQL.ObjectType("RdvsGroupBy", {})
export class RdvsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  time!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  doctor_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  consultation_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rdv_request_id!: string | null;

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
