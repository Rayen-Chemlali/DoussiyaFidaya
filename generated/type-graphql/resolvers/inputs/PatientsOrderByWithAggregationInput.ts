import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsAvgOrderByAggregateInput } from "../inputs/PatientsAvgOrderByAggregateInput";
import { PatientsCountOrderByAggregateInput } from "../inputs/PatientsCountOrderByAggregateInput";
import { PatientsMaxOrderByAggregateInput } from "../inputs/PatientsMaxOrderByAggregateInput";
import { PatientsMinOrderByAggregateInput } from "../inputs/PatientsMinOrderByAggregateInput";
import { PatientsSumOrderByAggregateInput } from "../inputs/PatientsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PatientsOrderByWithAggregationInput", {})
export class PatientsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cin?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date_of_birth?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  gender?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  profile_image?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  general_medical_record_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  user_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PatientsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PatientsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PatientsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PatientsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PatientsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PatientsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PatientsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PatientsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PatientsSumOrderByAggregateInput | undefined;
}
