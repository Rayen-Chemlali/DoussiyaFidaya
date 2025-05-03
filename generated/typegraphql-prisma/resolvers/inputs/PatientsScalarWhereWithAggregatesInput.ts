import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { Enumpatients_gender_enumWithAggregatesFilter } from "../inputs/Enumpatients_gender_enumWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { UuidNullableWithAggregatesFilter } from "../inputs/UuidNullableWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("PatientsScalarWhereWithAggregatesInput", {})
export class PatientsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PatientsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PatientsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PatientsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PatientsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  cin?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  date_of_birth?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => Enumpatients_gender_enumWithAggregatesFilter, {
    nullable: true
  })
  gender?: Enumpatients_gender_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  profile_image?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableWithAggregatesFilter, {
    nullable: true
  })
  general_medical_record_id?: UuidNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableWithAggregatesFilter, {
    nullable: true
  })
  user_id?: UuidNullableWithAggregatesFilter | undefined;
}
