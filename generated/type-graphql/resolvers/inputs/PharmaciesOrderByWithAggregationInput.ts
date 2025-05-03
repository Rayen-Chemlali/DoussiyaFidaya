import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PharmaciesCountOrderByAggregateInput } from "../inputs/PharmaciesCountOrderByAggregateInput";
import { PharmaciesMaxOrderByAggregateInput } from "../inputs/PharmaciesMaxOrderByAggregateInput";
import { PharmaciesMinOrderByAggregateInput } from "../inputs/PharmaciesMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PharmaciesOrderByWithAggregationInput", {})
export class PharmaciesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PharmaciesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PharmaciesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PharmaciesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PharmaciesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PharmaciesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PharmaciesMinOrderByAggregateInput | undefined;
}
