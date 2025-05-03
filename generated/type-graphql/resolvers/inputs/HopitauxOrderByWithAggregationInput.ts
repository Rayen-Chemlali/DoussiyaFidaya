import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HopitauxCountOrderByAggregateInput } from "../inputs/HopitauxCountOrderByAggregateInput";
import { HopitauxMaxOrderByAggregateInput } from "../inputs/HopitauxMaxOrderByAggregateInput";
import { HopitauxMinOrderByAggregateInput } from "../inputs/HopitauxMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("HopitauxOrderByWithAggregationInput", {})
export class HopitauxOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  address?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  phone?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  email?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => HopitauxCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: HopitauxCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => HopitauxMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: HopitauxMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => HopitauxMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: HopitauxMinOrderByAggregateInput | undefined;
}
