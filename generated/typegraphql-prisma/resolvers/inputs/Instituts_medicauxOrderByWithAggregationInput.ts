import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxCountOrderByAggregateInput } from "../inputs/Instituts_medicauxCountOrderByAggregateInput";
import { Instituts_medicauxMaxOrderByAggregateInput } from "../inputs/Instituts_medicauxMaxOrderByAggregateInput";
import { Instituts_medicauxMinOrderByAggregateInput } from "../inputs/Instituts_medicauxMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Instituts_medicauxOrderByWithAggregationInput", {})
export class Instituts_medicauxOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Instituts_medicauxCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Instituts_medicauxMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Instituts_medicauxMinOrderByAggregateInput | undefined;
}
