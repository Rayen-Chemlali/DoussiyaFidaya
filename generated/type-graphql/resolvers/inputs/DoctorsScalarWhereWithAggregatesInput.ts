import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { Enumdoctors_specialty_enumWithAggregatesFilter } from "../inputs/Enumdoctors_specialty_enumWithAggregatesFilter";
import { Enumdoctors_type_enumWithAggregatesFilter } from "../inputs/Enumdoctors_type_enumWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("DoctorsScalarWhereWithAggregatesInput", {})
export class DoctorsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [DoctorsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DoctorsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DoctorsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DoctorsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => Enumdoctors_type_enumWithAggregatesFilter, {
    nullable: true
  })
  type?: Enumdoctors_type_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  is_license_verified?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  bio?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  education?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  experience?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  first_name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  languages?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  last_name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  profile_image?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => Enumdoctors_specialty_enumWithAggregatesFilter, {
    nullable: true
  })
  specialty?: Enumdoctors_specialty_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  user_id?: UuidWithAggregatesFilter | undefined;
}
