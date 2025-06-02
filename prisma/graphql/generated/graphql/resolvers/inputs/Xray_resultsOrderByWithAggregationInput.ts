import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { Xray_resultsCountOrderByAggregateInput } from "../inputs/Xray_resultsCountOrderByAggregateInput";
import { Xray_resultsMaxOrderByAggregateInput } from "../inputs/Xray_resultsMaxOrderByAggregateInput";
import { Xray_resultsMinOrderByAggregateInput } from "../inputs/Xray_resultsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Xray_resultsOrderByWithAggregationInput", {})
export class Xray_resultsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_abnormal?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  result_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lab_document_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Xray_resultsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Xray_resultsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Xray_resultsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Xray_resultsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Xray_resultsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Xray_resultsMinOrderByAggregateInput | undefined;
}
