import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCountOrderByAggregateInput } from "../inputs/Lab_documentsCountOrderByAggregateInput";
import { Lab_documentsMaxOrderByAggregateInput } from "../inputs/Lab_documentsMaxOrderByAggregateInput";
import { Lab_documentsMinOrderByAggregateInput } from "../inputs/Lab_documentsMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Lab_documentsOrderByWithAggregationInput", {})
export class Lab_documentsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  completed_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  notes?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  requested_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  section?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  patient_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  laboratory_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  lab_request_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Lab_documentsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Lab_documentsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Lab_documentsMinOrderByAggregateInput | undefined;
}
