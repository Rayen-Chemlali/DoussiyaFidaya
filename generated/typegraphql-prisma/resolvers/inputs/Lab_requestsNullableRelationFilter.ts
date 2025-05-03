import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsWhereInput } from "../inputs/Lab_requestsWhereInput";

@TypeGraphQL.InputType("Lab_requestsNullableRelationFilter", {})
export class Lab_requestsNullableRelationFilter {
  @TypeGraphQL.Field(_type => Lab_requestsWhereInput, {
    nullable: true
  })
  is?: Lab_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsWhereInput, {
    nullable: true
  })
  isNot?: Lab_requestsWhereInput | undefined;
}
