import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCountOrderByAggregateInput } from "../inputs/DoctorsCountOrderByAggregateInput";
import { DoctorsMaxOrderByAggregateInput } from "../inputs/DoctorsMaxOrderByAggregateInput";
import { DoctorsMinOrderByAggregateInput } from "../inputs/DoctorsMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DoctorsOrderByWithAggregationInput", {})
export class DoctorsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  bio?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  education?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  experience?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  first_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  languages?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  profile_image?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  specialty?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DoctorsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DoctorsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DoctorsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DoctorsMinOrderByAggregateInput | undefined;
}
