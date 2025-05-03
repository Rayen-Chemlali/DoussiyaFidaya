import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GeneralMedicalRecordsAvgOrderByAggregateInput } from "../inputs/GeneralMedicalRecordsAvgOrderByAggregateInput";
import { GeneralMedicalRecordsCountOrderByAggregateInput } from "../inputs/GeneralMedicalRecordsCountOrderByAggregateInput";
import { GeneralMedicalRecordsMaxOrderByAggregateInput } from "../inputs/GeneralMedicalRecordsMaxOrderByAggregateInput";
import { GeneralMedicalRecordsMinOrderByAggregateInput } from "../inputs/GeneralMedicalRecordsMinOrderByAggregateInput";
import { GeneralMedicalRecordsSumOrderByAggregateInput } from "../inputs/GeneralMedicalRecordsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GeneralMedicalRecordsOrderByWithAggregationInput", {})
export class GeneralMedicalRecordsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  allergies?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  bloodType?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  birthDate?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  height?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  weight?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  patient_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GeneralMedicalRecordsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GeneralMedicalRecordsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GeneralMedicalRecordsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GeneralMedicalRecordsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GeneralMedicalRecordsSumOrderByAggregateInput | undefined;
}
