import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UuidFilter } from "../inputs/UuidFilter";

@TypeGraphQL.InputType("MedicationsScalarWhereInput", {})
export class MedicationsScalarWhereInput {
  @TypeGraphQL.Field(_type => [MedicationsScalarWhereInput], {
    nullable: true
  })
  AND?: MedicationsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MedicationsScalarWhereInput], {
    nullable: true
  })
  OR?: MedicationsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MedicationsScalarWhereInput], {
    nullable: true
  })
  NOT?: MedicationsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  dosage?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  duration?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  frequency?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  quantity?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  prescription_id?: UuidFilter | undefined;
}
