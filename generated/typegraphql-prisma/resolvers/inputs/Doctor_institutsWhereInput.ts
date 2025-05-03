import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsRelationFilter } from "../inputs/DoctorsRelationFilter";
import { Instituts_medicauxRelationFilter } from "../inputs/Instituts_medicauxRelationFilter";
import { UuidFilter } from "../inputs/UuidFilter";

@TypeGraphQL.InputType("Doctor_institutsWhereInput", {})
export class Doctor_institutsWhereInput {
  @TypeGraphQL.Field(_type => [Doctor_institutsWhereInput], {
    nullable: true
  })
  AND?: Doctor_institutsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsWhereInput], {
    nullable: true
  })
  OR?: Doctor_institutsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsWhereInput], {
    nullable: true
  })
  NOT?: Doctor_institutsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  doctor_id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  institut_medical_id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => DoctorsRelationFilter, {
    nullable: true
  })
  doctors?: DoctorsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxRelationFilter, {
    nullable: true
  })
  instituts_medicaux?: Instituts_medicauxRelationFilter | undefined;
}
