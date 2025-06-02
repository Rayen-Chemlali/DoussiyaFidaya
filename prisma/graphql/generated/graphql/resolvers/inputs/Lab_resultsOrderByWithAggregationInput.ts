import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_resultsCountOrderByAggregateInput } from "../inputs/Lab_resultsCountOrderByAggregateInput";
import { Lab_resultsMaxOrderByAggregateInput } from "../inputs/Lab_resultsMaxOrderByAggregateInput";
import { Lab_resultsMinOrderByAggregateInput } from "../inputs/Lab_resultsMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Lab_resultsOrderByWithAggregationInput", {})
export class Lab_resultsOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => Lab_resultsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Lab_resultsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Lab_resultsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Lab_resultsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Lab_resultsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Lab_resultsMinOrderByAggregateInput | undefined;
}
