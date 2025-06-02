import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsOrderByRelationAggregateInput } from "../inputs/DoctorsOrderByRelationAggregateInput";
import { PatientsOrderByRelationAggregateInput } from "../inputs/PatientsOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { Verification_tokensOrderByWithRelationInput } from "../inputs/Verification_tokensOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UsersOrderByWithRelationInput", {})
export class UsersOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  address?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  first_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_verified?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  salt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  last_login?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  phone?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  profile_picture?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  associated_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Verification_tokensOrderByWithRelationInput, {
    nullable: true
  })
  validation_token?: Verification_tokensOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsOrderByRelationAggregateInput, {
    nullable: true
  })
  doctors?: DoctorsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PatientsOrderByRelationAggregateInput, {
    nullable: true
  })
  patients?: PatientsOrderByRelationAggregateInput | undefined;
}
