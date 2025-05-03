import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorizationsWhereUniqueInput } from "../../../inputs/AuthorizationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAuthorizationsOrThrowArgs {
  @TypeGraphQL.Field(_type => AuthorizationsWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorizationsWhereUniqueInput;
}
