import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Doctor_institutsCreateInput } from "../../../inputs/Doctor_institutsCreateInput";
import { Doctor_institutsUpdateInput } from "../../../inputs/Doctor_institutsUpdateInput";
import { Doctor_institutsWhereUniqueInput } from "../../../inputs/Doctor_institutsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDoctor_institutsArgs {
  @TypeGraphQL.Field(_type => Doctor_institutsWhereUniqueInput, {
    nullable: false
  })
  where!: Doctor_institutsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Doctor_institutsCreateInput, {
    nullable: false
  })
  create!: Doctor_institutsCreateInput;

  @TypeGraphQL.Field(_type => Doctor_institutsUpdateInput, {
    nullable: false
  })
  update!: Doctor_institutsUpdateInput;
}
