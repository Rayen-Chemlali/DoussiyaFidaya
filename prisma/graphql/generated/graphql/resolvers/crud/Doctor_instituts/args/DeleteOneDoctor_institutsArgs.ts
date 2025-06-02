import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Doctor_institutsWhereUniqueInput } from "../../../inputs/Doctor_institutsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneDoctor_institutsArgs {
  @TypeGraphQL.Field(_type => Doctor_institutsWhereUniqueInput, {
    nullable: false
  })
  where!: Doctor_institutsWhereUniqueInput;
}
