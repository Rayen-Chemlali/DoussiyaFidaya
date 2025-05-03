import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("Doctor_institutsScalarWhereWithAggregatesInput", {})
export class Doctor_institutsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Doctor_institutsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Doctor_institutsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Doctor_institutsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Doctor_institutsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  doctor_id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  institut_medical_id?: UuidWithAggregatesFilter | undefined;
}
