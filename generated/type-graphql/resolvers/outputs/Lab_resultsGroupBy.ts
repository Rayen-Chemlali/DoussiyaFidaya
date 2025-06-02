import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_resultsCountAggregate } from "../outputs/Lab_resultsCountAggregate";
import { Lab_resultsMaxAggregate } from "../outputs/Lab_resultsMaxAggregate";
import { Lab_resultsMinAggregate } from "../outputs/Lab_resultsMinAggregate";
import { lab_results_result_type_enum } from "../../enums/lab_results_result_type_enum";

@TypeGraphQL.ObjectType("Lab_resultsGroupBy", {})
export class Lab_resultsGroupBy {
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

  @TypeGraphQL.Field(_type => lab_results_result_type_enum, {
    nullable: false
  })
  result_type!: "NORMAL" | "ABNORMAL" | "CRITICAL";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lab_document_id!: string;

  @TypeGraphQL.Field(_type => Lab_resultsCountAggregate, {
    nullable: true
  })
  _count!: Lab_resultsCountAggregate | null;

  @TypeGraphQL.Field(_type => Lab_resultsMinAggregate, {
    nullable: true
  })
  _min!: Lab_resultsMinAggregate | null;

  @TypeGraphQL.Field(_type => Lab_resultsMaxAggregate, {
    nullable: true
  })
  _max!: Lab_resultsMaxAggregate | null;
}
