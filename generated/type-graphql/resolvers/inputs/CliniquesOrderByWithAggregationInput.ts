import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CliniquesCountOrderByAggregateInput } from "../inputs/CliniquesCountOrderByAggregateInput";
import { CliniquesMaxOrderByAggregateInput } from "../inputs/CliniquesMaxOrderByAggregateInput";
import { CliniquesMinOrderByAggregateInput } from "../inputs/CliniquesMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CliniquesOrderByWithAggregationInput", {})
export class CliniquesOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => CliniquesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CliniquesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CliniquesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CliniquesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CliniquesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CliniquesMinOrderByAggregateInput | undefined;
}
