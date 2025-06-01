import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsListRelationFilter", {})
export class DoctorsListRelationFilter {
  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  every?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  some?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  none?: DoctorsWhereInput | undefined;
}
