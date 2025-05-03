import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsWhereInput } from "../inputs/Lab_requestsWhereInput";

@TypeGraphQL.InputType("Lab_requestsListRelationFilter", {})
export class Lab_requestsListRelationFilter {
  @TypeGraphQL.Field(_type => Lab_requestsWhereInput, {
    nullable: true
  })
  every?: Lab_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsWhereInput, {
    nullable: true
  })
  some?: Lab_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsWhereInput, {
    nullable: true
  })
  none?: Lab_requestsWhereInput | undefined;
}
