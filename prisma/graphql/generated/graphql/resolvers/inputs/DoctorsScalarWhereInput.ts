import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { Enumdoctors_specialty_enumFilter } from "../inputs/Enumdoctors_specialty_enumFilter";
import { Enumdoctors_type_enumFilter } from "../inputs/Enumdoctors_type_enumFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { UuidFilter } from "../inputs/UuidFilter";

@TypeGraphQL.InputType("DoctorsScalarWhereInput", {})
export class DoctorsScalarWhereInput {
  @TypeGraphQL.Field(_type => [DoctorsScalarWhereInput], {
    nullable: true
  })
  AND?: DoctorsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsScalarWhereInput], {
    nullable: true
  })
  OR?: DoctorsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsScalarWhereInput], {
    nullable: true
  })
  NOT?: DoctorsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => Enumdoctors_type_enumFilter, {
    nullable: true
  })
  type?: Enumdoctors_type_enumFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  is_license_verified?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  bio?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  education?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  experience?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  first_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  languages?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  last_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  profile_image?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Enumdoctors_specialty_enumFilter, {
    nullable: true
  })
  specialty?: Enumdoctors_specialty_enumFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  user_id?: UuidFilter | undefined;
}
