import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";

@TypeGraphQL.InputType("Rdv_requestsScalarWhereInput", {})
export class Rdv_requestsScalarWhereInput {
  @TypeGraphQL.Field(_type => [Rdv_requestsScalarWhereInput], {
    nullable: true
  })
  AND?: Rdv_requestsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsScalarWhereInput], {
    nullable: true
  })
  OR?: Rdv_requestsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsScalarWhereInput], {
    nullable: true
  })
  NOT?: Rdv_requestsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  time?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Motif?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Status?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  patient_id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  doctor_id?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  rdv_id?: UuidNullableFilter | undefined;
}
