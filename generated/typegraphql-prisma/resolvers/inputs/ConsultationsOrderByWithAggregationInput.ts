import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCountOrderByAggregateInput } from "../inputs/ConsultationsCountOrderByAggregateInput";
import { ConsultationsMaxOrderByAggregateInput } from "../inputs/ConsultationsMaxOrderByAggregateInput";
import { ConsultationsMinOrderByAggregateInput } from "../inputs/ConsultationsMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ConsultationsOrderByWithAggregationInput", {})
export class ConsultationsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  section?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  notes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  measures?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  doctor_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  institut_medical_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  prescription_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  patient_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ConsultationsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ConsultationsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ConsultationsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ConsultationsMinOrderByAggregateInput | undefined;
}
