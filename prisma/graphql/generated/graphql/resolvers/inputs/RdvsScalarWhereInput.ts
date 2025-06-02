import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";

@TypeGraphQL.InputType("RdvsScalarWhereInput", {})
export class RdvsScalarWhereInput {
  @TypeGraphQL.Field(_type => [RdvsScalarWhereInput], {
    nullable: true
  })
  AND?: RdvsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsScalarWhereInput], {
    nullable: true
  })
  OR?: RdvsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsScalarWhereInput], {
    nullable: true
  })
  NOT?: RdvsScalarWhereInput[] | undefined;

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
  consultation_id?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  rdv_request_id?: UuidNullableFilter | undefined;
}
