import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersWhereInput } from "../../../inputs/UsersWhereInput";

@TypeGraphQL.ArgsType()
export class PatientsUsersArgs {
  @TypeGraphQL.Field(_type => UsersWhereInput, {
    nullable: true
  })
  where?: UsersWhereInput | undefined;
}
