import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsCountOrderByAggregateInput } from "../inputs/AuthorizationsCountOrderByAggregateInput";
import { AuthorizationsMaxOrderByAggregateInput } from "../inputs/AuthorizationsMaxOrderByAggregateInput";
import { AuthorizationsMinOrderByAggregateInput } from "../inputs/AuthorizationsMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AuthorizationsOrderByWithAggregationInput", {})
export class AuthorizationsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  level?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  institut_medical_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  patient_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AuthorizationsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AuthorizationsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AuthorizationsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AuthorizationsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AuthorizationsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AuthorizationsMinOrderByAggregateInput | undefined;
}
