import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GeneralMedicalRecordsWhereInput } from "../inputs/GeneralMedicalRecordsWhereInput";

@TypeGraphQL.InputType("GeneralMedicalRecordsNullableRelationFilter", {})
export class GeneralMedicalRecordsNullableRelationFilter {
  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereInput, {
    nullable: true
  })
  is?: GeneralMedicalRecordsWhereInput | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereInput, {
    nullable: true
  })
  isNot?: GeneralMedicalRecordsWhereInput | undefined;
}
