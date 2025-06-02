import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorizationsCreateManyInput } from "../../../inputs/AuthorizationsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnAuthorizationsArgs {
  @TypeGraphQL.Field(_type => [AuthorizationsCreateManyInput], {
    nullable: false
  })
  data!: AuthorizationsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
