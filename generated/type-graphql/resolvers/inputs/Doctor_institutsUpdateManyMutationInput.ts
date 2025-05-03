import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GraphQLString } from 'graphql/type';

@TypeGraphQL.InputType("Doctor_institutsUpdateManyMutationInput", {})
export class Doctor_institutsUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => GraphQLString, {
    nullable: true
  })
  doctor_id?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLString, {
    nullable: true
  })
  instituts_id?: string | undefined;
}
