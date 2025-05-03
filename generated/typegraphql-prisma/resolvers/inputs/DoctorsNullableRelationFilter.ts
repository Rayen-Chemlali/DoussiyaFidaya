import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsNullableRelationFilter", {})
export class DoctorsNullableRelationFilter {
  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  is?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  isNot?: DoctorsWhereInput | undefined;
}
