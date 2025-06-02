import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Doctor_institutsUpdateInput } from "../../../inputs/Doctor_institutsUpdateInput";
import { Doctor_institutsWhereUniqueInput } from "../../../inputs/Doctor_institutsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDoctor_institutsArgs {
  @TypeGraphQL.Field(_type => Doctor_institutsUpdateInput, {
    nullable: false
  })
  data!: Doctor_institutsUpdateInput;

  @TypeGraphQL.Field(_type => Doctor_institutsWhereUniqueInput, {
    nullable: false
  })
  where!: Doctor_institutsWhereUniqueInput;
}
