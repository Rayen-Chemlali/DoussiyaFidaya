import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PharmaciesWhereInput } from "../inputs/PharmaciesWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PharmaciesWhereUniqueInput", {})
export class PharmaciesWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

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
