import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersOrderByWithAggregationInput } from "../../../inputs/UsersOrderByWithAggregationInput";
import { UsersScalarWhereWithAggregatesInput } from "../../../inputs/UsersScalarWhereWithAggregatesInput";
import { UsersWhereInput } from "../../../inputs/UsersWhereInput";
import { UsersScalarFieldEnum } from "../../../../enums/UsersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUsersArgs {
  @TypeGraphQL.Field(_type => UsersWhereInput, {
    nullable: true
  })
  where?: UsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UsersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UsersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "address" | "created_at" | "email" | "first_name" | "last_name" | "is_verified" | "last_login" | "phone" | "profile_picture" | "role" | "associated_id" | "updated_at">;

  @TypeGraphQL.Field(_type => UsersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UsersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
