import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Doctor_institutsUpdateManyMutationInput } from "../../../inputs/Doctor_institutsUpdateManyMutationInput";
import { Doctor_institutsWhereInput } from "../../../inputs/Doctor_institutsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDoctor_institutsArgs {
  @TypeGraphQL.Field(_type => Doctor_institutsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Doctor_institutsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Doctor_institutsWhereInput, {
    nullable: true
  })
  where?: Doctor_institutsWhereInput | undefined;
}
