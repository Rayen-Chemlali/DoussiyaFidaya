import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorizationsCreateInput } from "../../../inputs/AuthorizationsCreateInput";
import { AuthorizationsUpdateInput } from "../../../inputs/AuthorizationsUpdateInput";
import { AuthorizationsWhereUniqueInput } from "../../../inputs/AuthorizationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAuthorizationsArgs {
  @TypeGraphQL.Field(_type => AuthorizationsWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorizationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => AuthorizationsCreateInput, {
    nullable: false
  })
  create!: AuthorizationsCreateInput;

  @TypeGraphQL.Field(_type => AuthorizationsUpdateInput, {
    nullable: false
  })
  update!: AuthorizationsUpdateInput;
}
