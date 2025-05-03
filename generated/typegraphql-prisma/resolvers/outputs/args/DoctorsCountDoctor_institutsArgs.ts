import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Doctor_institutsWhereInput } from "../../inputs/Doctor_institutsWhereInput";

@TypeGraphQL.ArgsType()
export class DoctorsCountDoctor_institutsArgs {
  @TypeGraphQL.Field(_type => Doctor_institutsWhereInput, {
    nullable: true
  })
  where?: Doctor_institutsWhereInput | undefined;
}
