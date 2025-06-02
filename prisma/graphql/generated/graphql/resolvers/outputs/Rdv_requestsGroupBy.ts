import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsCountAggregate } from "../outputs/Rdv_requestsCountAggregate";
import { Rdv_requestsMaxAggregate } from "../outputs/Rdv_requestsMaxAggregate";
import { Rdv_requestsMinAggregate } from "../outputs/Rdv_requestsMinAggregate";

@TypeGraphQL.ObjectType("Rdv_requestsGroupBy", {})
export class Rdv_requestsGroupBy {
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
  Motif!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Status!: string;

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
  rdv_id!: string | null;

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
