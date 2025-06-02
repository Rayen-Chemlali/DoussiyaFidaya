import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MedicationsAvgOrderByAggregateInput } from "../inputs/MedicationsAvgOrderByAggregateInput";
import { MedicationsCountOrderByAggregateInput } from "../inputs/MedicationsCountOrderByAggregateInput";
import { MedicationsMaxOrderByAggregateInput } from "../inputs/MedicationsMaxOrderByAggregateInput";
import { MedicationsMinOrderByAggregateInput } from "../inputs/MedicationsMinOrderByAggregateInput";
import { MedicationsSumOrderByAggregateInput } from "../inputs/MedicationsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MedicationsOrderByWithAggregationInput", {})
export class MedicationsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dosage?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  duration?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  frequency?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  prescription_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MedicationsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MedicationsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MedicationsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MedicationsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MedicationsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MedicationsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MedicationsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MedicationsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MedicationsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MedicationsSumOrderByAggregateInput | undefined;
}
