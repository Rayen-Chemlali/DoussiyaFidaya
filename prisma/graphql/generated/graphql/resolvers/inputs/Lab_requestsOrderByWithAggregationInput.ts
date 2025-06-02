import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCountOrderByAggregateInput } from "../inputs/Lab_requestsCountOrderByAggregateInput";
import { Lab_requestsMaxOrderByAggregateInput } from "../inputs/Lab_requestsMaxOrderByAggregateInput";
import { Lab_requestsMinOrderByAggregateInput } from "../inputs/Lab_requestsMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Lab_requestsOrderByWithAggregationInput", {})
export class Lab_requestsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  priority?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  doctor_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  patient_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Lab_requestsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Lab_requestsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Lab_requestsMinOrderByAggregateInput | undefined;
}
