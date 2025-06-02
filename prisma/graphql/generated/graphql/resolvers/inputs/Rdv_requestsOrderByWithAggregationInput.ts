import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsCountOrderByAggregateInput } from "../inputs/Rdv_requestsCountOrderByAggregateInput";
import { Rdv_requestsMaxOrderByAggregateInput } from "../inputs/Rdv_requestsMaxOrderByAggregateInput";
import { Rdv_requestsMinOrderByAggregateInput } from "../inputs/Rdv_requestsMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Rdv_requestsOrderByWithAggregationInput", {})
export class Rdv_requestsOrderByWithAggregationInput {
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
  Motif?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Status?: "asc" | "desc" | undefined;

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
  rdv_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Rdv_requestsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Rdv_requestsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Rdv_requestsMinOrderByAggregateInput | undefined;
}
