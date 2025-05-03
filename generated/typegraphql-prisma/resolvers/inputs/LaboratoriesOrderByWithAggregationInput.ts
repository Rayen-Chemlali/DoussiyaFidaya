import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaboratoriesCountOrderByAggregateInput } from "../inputs/LaboratoriesCountOrderByAggregateInput";
import { LaboratoriesMaxOrderByAggregateInput } from "../inputs/LaboratoriesMaxOrderByAggregateInput";
import { LaboratoriesMinOrderByAggregateInput } from "../inputs/LaboratoriesMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LaboratoriesOrderByWithAggregationInput", {})
export class LaboratoriesOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => LaboratoriesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LaboratoriesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LaboratoriesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LaboratoriesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LaboratoriesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LaboratoriesMinOrderByAggregateInput | undefined;
}
