import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorizationsUpdateManyMutationInput } from "../../../inputs/AuthorizationsUpdateManyMutationInput";
import { AuthorizationsWhereInput } from "../../../inputs/AuthorizationsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAuthorizationsArgs {
  @TypeGraphQL.Field(_type => AuthorizationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: AuthorizationsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AuthorizationsWhereInput, {
    nullable: true
  })
  where?: AuthorizationsWhereInput | undefined;
}
