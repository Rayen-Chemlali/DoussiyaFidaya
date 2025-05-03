import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Ctscan_resultsCountOrderByAggregateInput } from "../inputs/Ctscan_resultsCountOrderByAggregateInput";
import { Ctscan_resultsMaxOrderByAggregateInput } from "../inputs/Ctscan_resultsMaxOrderByAggregateInput";
import { Ctscan_resultsMinOrderByAggregateInput } from "../inputs/Ctscan_resultsMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Ctscan_resultsOrderByWithAggregationInput", {})
export class Ctscan_resultsOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => Ctscan_resultsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Ctscan_resultsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Ctscan_resultsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Ctscan_resultsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Ctscan_resultsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Ctscan_resultsMinOrderByAggregateInput | undefined;
}
