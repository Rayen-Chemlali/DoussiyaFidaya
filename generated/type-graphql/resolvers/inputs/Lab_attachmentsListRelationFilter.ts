import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_attachmentsWhereInput } from "../inputs/Lab_attachmentsWhereInput";

@TypeGraphQL.InputType("Lab_attachmentsListRelationFilter", {})
export class Lab_attachmentsListRelationFilter {
  @TypeGraphQL.Field(_type => Lab_attachmentsWhereInput, {
    nullable: true
  })
  every?: Lab_attachmentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Lab_attachmentsWhereInput, {
    nullable: true
  })
  some?: Lab_attachmentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Lab_attachmentsWhereInput, {
    nullable: true
  })
  none?: Lab_attachmentsWhereInput | undefined;
}
