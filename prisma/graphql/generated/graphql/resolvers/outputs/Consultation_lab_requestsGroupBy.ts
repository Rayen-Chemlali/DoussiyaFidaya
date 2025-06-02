import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Consultation_lab_requestsCountAggregate } from "../outputs/Consultation_lab_requestsCountAggregate";
import { Consultation_lab_requestsMaxAggregate } from "../outputs/Consultation_lab_requestsMaxAggregate";
import { Consultation_lab_requestsMinAggregate } from "../outputs/Consultation_lab_requestsMinAggregate";

@TypeGraphQL.ObjectType("Consultation_lab_requestsGroupBy", {})
export class Consultation_lab_requestsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  consultation_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lab_request_id!: string;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsCountAggregate, {
    nullable: true
  })
  _count!: Consultation_lab_requestsCountAggregate | null;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsMinAggregate, {
    nullable: true
  })
  _min!: Consultation_lab_requestsMinAggregate | null;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsMaxAggregate, {
    nullable: true
  })
  _max!: Consultation_lab_requestsMaxAggregate | null;
}
