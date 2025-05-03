import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsWhereInput } from "../inputs/AuthorizationsWhereInput";

@TypeGraphQL.InputType("AuthorizationsListRelationFilter", {})
export class AuthorizationsListRelationFilter {
  @TypeGraphQL.Field(_type => AuthorizationsWhereInput, {
    nullable: true
  })
  every?: AuthorizationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => AuthorizationsWhereInput, {
    nullable: true
  })
  some?: AuthorizationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => AuthorizationsWhereInput, {
    nullable: true
  })
  none?: AuthorizationsWhereInput | undefined;
}
