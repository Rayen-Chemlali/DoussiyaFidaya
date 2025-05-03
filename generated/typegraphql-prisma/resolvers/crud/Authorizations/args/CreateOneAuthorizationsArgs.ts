import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorizationsCreateInput } from "../../../inputs/AuthorizationsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAuthorizationsArgs {
  @TypeGraphQL.Field(_type => AuthorizationsCreateInput, {
    nullable: false
  })
  data!: AuthorizationsCreateInput;
}
