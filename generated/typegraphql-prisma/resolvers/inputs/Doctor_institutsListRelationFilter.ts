import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Doctor_institutsWhereInput } from "../inputs/Doctor_institutsWhereInput";

@TypeGraphQL.InputType("Doctor_institutsListRelationFilter", {})
export class Doctor_institutsListRelationFilter {
  @TypeGraphQL.Field(_type => Doctor_institutsWhereInput, {
    nullable: true
  })
  every?: Doctor_institutsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Doctor_institutsWhereInput, {
    nullable: true
  })
  some?: Doctor_institutsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Doctor_institutsWhereInput, {
    nullable: true
  })
  none?: Doctor_institutsWhereInput | undefined;
}
