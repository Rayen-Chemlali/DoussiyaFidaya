import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFilter } from "../inputs/FloatFilter";
import { MedicationsWhereInput } from "../inputs/MedicationsWhereInput";
import { PrescriptionsRelationFilter } from "../inputs/PrescriptionsRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UuidFilter } from "../inputs/UuidFilter";

@TypeGraphQL.InputType("MedicationsWhereUniqueInput", {})
export class MedicationsWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [MedicationsWhereInput], {
    nullable: true
  })
  AND?: MedicationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MedicationsWhereInput], {
    nullable: true
  })
  OR?: MedicationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MedicationsWhereInput], {
    nullable: true
  })
  NOT?: MedicationsWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => PrescriptionsRelationFilter, {
    nullable: true
  })
  prescriptions?: PrescriptionsRelationFilter | undefined;
}
