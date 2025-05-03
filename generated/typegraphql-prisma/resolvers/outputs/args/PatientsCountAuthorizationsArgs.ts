import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorizationsWhereInput } from "../../inputs/AuthorizationsWhereInput";

@TypeGraphQL.ArgsType()
export class PatientsCountAuthorizationsArgs {
  @TypeGraphQL.Field(_type => AuthorizationsWhereInput, {
    nullable: true
  })
  where?: AuthorizationsWhereInput | undefined;
}
