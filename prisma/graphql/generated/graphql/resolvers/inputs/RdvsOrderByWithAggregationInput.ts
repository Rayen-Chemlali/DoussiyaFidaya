import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCountOrderByAggregateInput } from "../inputs/RdvsCountOrderByAggregateInput";
import { RdvsMaxOrderByAggregateInput } from "../inputs/RdvsMaxOrderByAggregateInput";
import { RdvsMinOrderByAggregateInput } from "../inputs/RdvsMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RdvsOrderByWithAggregationInput", {})
export class RdvsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  patient_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  doctor_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  consultation_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  rdv_request_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => RdvsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RdvsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RdvsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RdvsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RdvsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RdvsMinOrderByAggregateInput | undefined;
}
