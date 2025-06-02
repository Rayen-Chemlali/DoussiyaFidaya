import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCountAggregate } from "../outputs/Lab_requestsCountAggregate";
import { Lab_requestsMaxAggregate } from "../outputs/Lab_requestsMaxAggregate";
import { Lab_requestsMinAggregate } from "../outputs/Lab_requestsMinAggregate";
import { lab_requests_priority_enum } from "../../enums/lab_requests_priority_enum";

@TypeGraphQL.ObjectType("Lab_requestsGroupBy", {})
export class Lab_requestsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => lab_requests_priority_enum, {
    nullable: true
  })
  priority!: "low" | "medium" | "high" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  doctor_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;

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
