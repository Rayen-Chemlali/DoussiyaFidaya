import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Ctscan_resultsCountAggregate } from "../outputs/Ctscan_resultsCountAggregate";
import { Ctscan_resultsMaxAggregate } from "../outputs/Ctscan_resultsMaxAggregate";
import { Ctscan_resultsMinAggregate } from "../outputs/Ctscan_resultsMinAggregate";
import { ctscan_results_result_type_enum } from "../../enums/ctscan_results_result_type_enum";

@TypeGraphQL.ObjectType("Ctscan_resultsGroupBy", {})
export class Ctscan_resultsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_abnormal!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => ctscan_results_result_type_enum, {
    nullable: false
  })
  result_type!: "analysis" | "xray" | "ctscan";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lab_document_id!: string;

  @TypeGraphQL.Field(_type => Ctscan_resultsCountAggregate, {
    nullable: true
  })
  _count!: Ctscan_resultsCountAggregate | null;

  @TypeGraphQL.Field(_type => Ctscan_resultsMinAggregate, {
    nullable: true
  })
  _min!: Ctscan_resultsMinAggregate | null;

  @TypeGraphQL.Field(_type => Ctscan_resultsMaxAggregate, {
    nullable: true
  })
  _max!: Ctscan_resultsMaxAggregate | null;
}
