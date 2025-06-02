import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsWhereInput } from "../inputs/Rdv_requestsWhereInput";

@TypeGraphQL.InputType("Rdv_requestsNullableRelationFilter", {})
export class Rdv_requestsNullableRelationFilter {
  @TypeGraphQL.Field(_type => Rdv_requestsWhereInput, {
    nullable: true
  })
  is?: Rdv_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsWhereInput, {
    nullable: true
  })
  isNot?: Rdv_requestsWhereInput | undefined;
}
