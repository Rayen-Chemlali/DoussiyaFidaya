import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Xray_resultsCountAggregate } from "../outputs/Xray_resultsCountAggregate";
import { Xray_resultsMaxAggregate } from "../outputs/Xray_resultsMaxAggregate";
import { Xray_resultsMinAggregate } from "../outputs/Xray_resultsMinAggregate";
import { xray_results_result_type_enum } from "../../enums/xray_results_result_type_enum";

@TypeGraphQL.ObjectType("Xray_resultsGroupBy", {})
export class Xray_resultsGroupBy {
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

  @TypeGraphQL.Field(_type => xray_results_result_type_enum, {
    nullable: false
  })
  result_type!: "NORMAL" | "ABNORMAL" | "CRITICAL";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lab_document_id!: string;

  @TypeGraphQL.Field(_type => Xray_resultsCountAggregate, {
    nullable: true
  })
  _count!: Xray_resultsCountAggregate | null;

  @TypeGraphQL.Field(_type => Xray_resultsMinAggregate, {
    nullable: true
  })
  _min!: Xray_resultsMinAggregate | null;

  @TypeGraphQL.Field(_type => Xray_resultsMaxAggregate, {
    nullable: true
  })
  _max!: Xray_resultsMaxAggregate | null;
}
