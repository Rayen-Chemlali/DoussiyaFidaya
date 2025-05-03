import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Consultation_lab_requestsCountOrderByAggregateInput } from "../inputs/Consultation_lab_requestsCountOrderByAggregateInput";
import { Consultation_lab_requestsMaxOrderByAggregateInput } from "../inputs/Consultation_lab_requestsMaxOrderByAggregateInput";
import { Consultation_lab_requestsMinOrderByAggregateInput } from "../inputs/Consultation_lab_requestsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Consultation_lab_requestsOrderByWithAggregationInput", {})
export class Consultation_lab_requestsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  consultation_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lab_request_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Consultation_lab_requestsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Consultation_lab_requestsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Consultation_lab_requestsMinOrderByAggregateInput | undefined;
}
