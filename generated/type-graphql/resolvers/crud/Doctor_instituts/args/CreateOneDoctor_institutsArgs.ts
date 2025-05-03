import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Doctor_institutsCreateInput } from "../../../inputs/Doctor_institutsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDoctor_institutsArgs {
  @TypeGraphQL.Field(_type => Doctor_institutsCreateInput, {
    nullable: false
  })
  data!: Doctor_institutsCreateInput;
}
