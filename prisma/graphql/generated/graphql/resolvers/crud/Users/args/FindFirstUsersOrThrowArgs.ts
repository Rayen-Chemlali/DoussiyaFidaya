import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersOrderByWithRelationInput } from "../../../inputs/UsersOrderByWithRelationInput";
import { UsersWhereInput } from "../../../inputs/UsersWhereInput";
import { UsersWhereUniqueInput } from "../../../inputs/UsersWhereUniqueInput";
import { UsersScalarFieldEnum } from "../../../../enums/UsersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstUsersOrThrowArgs {
  @TypeGraphQL.Field(_type => UsersWhereInput, {
    nullable: true
  })
  where?: UsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UsersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UsersOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  cursor?: UsersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UsersScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "address" | "created_at" | "email" | "first_name" | "last_name" | "is_verified" | "password" | "salt" | "last_login" | "phone" | "profile_picture" | "role" | "associated_id" | "updated_at"> | undefined;
}
