import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UuidFilter } from "../inputs/UuidFilter";

@TypeGraphQL.InputType("PharmaciesWhereInput", {})
export class PharmaciesWhereInput {
  @TypeGraphQL.Field(_type => [PharmaciesWhereInput], {
    nullable: true
  })
  AND?: PharmaciesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PharmaciesWhereInput], {
    nullable: true
  })
  OR?: PharmaciesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PharmaciesWhereInput], {
    nullable: true
  })
  NOT?: PharmaciesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  address?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  phone?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  email?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;
}
