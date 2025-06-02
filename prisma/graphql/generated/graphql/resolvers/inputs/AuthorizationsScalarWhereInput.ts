import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enumauthorizations_level_enumFilter } from "../inputs/Enumauthorizations_level_enumFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";

@TypeGraphQL.InputType("AuthorizationsScalarWhereInput", {})
export class AuthorizationsScalarWhereInput {
  @TypeGraphQL.Field(_type => [AuthorizationsScalarWhereInput], {
    nullable: true
  })
  AND?: AuthorizationsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsScalarWhereInput], {
    nullable: true
  })
  OR?: AuthorizationsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsScalarWhereInput], {
    nullable: true
  })
  NOT?: AuthorizationsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => Enumauthorizations_level_enumFilter, {
    nullable: true
  })
  level?: Enumauthorizations_level_enumFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  institut_medical_id?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  patient_id?: UuidFilter | undefined;
}
