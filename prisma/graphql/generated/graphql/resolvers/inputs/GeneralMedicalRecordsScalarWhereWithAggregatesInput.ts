import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { FloatNullableWithAggregatesFilter } from "../inputs/FloatNullableWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("GeneralMedicalRecordsScalarWhereWithAggregatesInput", {})
export class GeneralMedicalRecordsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GeneralMedicalRecordsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GeneralMedicalRecordsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GeneralMedicalRecordsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GeneralMedicalRecordsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GeneralMedicalRecordsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GeneralMedicalRecordsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  allergies?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  bloodType?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  birthDate?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableWithAggregatesFilter, {
    nullable: true
  })
  height?: FloatNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableWithAggregatesFilter, {
    nullable: true
  })
  weight?: FloatNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  patient_id?: UuidWithAggregatesFilter | undefined;
}
