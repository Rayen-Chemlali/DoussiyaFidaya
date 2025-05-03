import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Analysis_resultsCountOrderByAggregateInput } from "../inputs/Analysis_resultsCountOrderByAggregateInput";
import { Analysis_resultsMaxOrderByAggregateInput } from "../inputs/Analysis_resultsMaxOrderByAggregateInput";
import { Analysis_resultsMinOrderByAggregateInput } from "../inputs/Analysis_resultsMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Analysis_resultsOrderByWithAggregationInput", {})
export class Analysis_resultsOrderByWithAggregationInput {
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
  reference_range?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  unit?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lab_document_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Analysis_resultsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Analysis_resultsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Analysis_resultsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Analysis_resultsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Analysis_resultsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Analysis_resultsMinOrderByAggregateInput | undefined;
}
