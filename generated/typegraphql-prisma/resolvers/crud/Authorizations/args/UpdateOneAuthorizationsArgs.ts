import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorizationsUpdateInput } from "../../../inputs/AuthorizationsUpdateInput";
import { AuthorizationsWhereUniqueInput } from "../../../inputs/AuthorizationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAuthorizationsArgs {
  @TypeGraphQL.Field(_type => AuthorizationsUpdateInput, {
    nullable: false
  })
  data!: AuthorizationsUpdateInput;

  @TypeGraphQL.Field(_type => AuthorizationsWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorizationsWhereUniqueInput;
}
