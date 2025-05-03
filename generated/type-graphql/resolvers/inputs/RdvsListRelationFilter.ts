import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsWhereInput } from "../inputs/RdvsWhereInput";

@TypeGraphQL.InputType("RdvsListRelationFilter", {})
export class RdvsListRelationFilter {
  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  every?: RdvsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  some?: RdvsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  none?: RdvsWhereInput | undefined;
}
