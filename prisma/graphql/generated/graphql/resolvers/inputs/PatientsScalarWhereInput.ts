import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { Enumpatients_gender_enumFilter } from "../inputs/Enumpatients_gender_enumFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";

@TypeGraphQL.InputType("PatientsScalarWhereInput", {})
export class PatientsScalarWhereInput {
  @TypeGraphQL.Field(_type => [PatientsScalarWhereInput], {
    nullable: true
  })
  AND?: PatientsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientsScalarWhereInput], {
    nullable: true
  })
  OR?: PatientsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientsScalarWhereInput], {
    nullable: true
  })
  NOT?: PatientsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  cin?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date_of_birth?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => Enumpatients_gender_enumFilter, {
    nullable: true
  })
  gender?: Enumpatients_gender_enumFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  profile_image?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  general_medical_record_id?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  user_id?: UuidNullableFilter | undefined;
}
