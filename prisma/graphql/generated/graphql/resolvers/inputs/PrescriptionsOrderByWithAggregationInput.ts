import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCountOrderByAggregateInput } from "../inputs/PrescriptionsCountOrderByAggregateInput";
import { PrescriptionsMaxOrderByAggregateInput } from "../inputs/PrescriptionsMaxOrderByAggregateInput";
import { PrescriptionsMinOrderByAggregateInput } from "../inputs/PrescriptionsMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PrescriptionsOrderByWithAggregationInput", {})
export class PrescriptionsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  instructions?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_signed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  section?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  doctor_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  patient_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PrescriptionsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PrescriptionsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PrescriptionsMinOrderByAggregateInput | undefined;
}
