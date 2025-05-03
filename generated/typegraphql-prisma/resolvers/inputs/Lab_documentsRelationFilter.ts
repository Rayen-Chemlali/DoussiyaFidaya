import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsWhereInput } from "../inputs/Lab_documentsWhereInput";

@TypeGraphQL.InputType("Lab_documentsRelationFilter", {})
export class Lab_documentsRelationFilter {
  @TypeGraphQL.Field(_type => Lab_documentsWhereInput, {
    nullable: true
  })
  is?: Lab_documentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsWhereInput, {
    nullable: true
  })
  isNot?: Lab_documentsWhereInput | undefined;
}
