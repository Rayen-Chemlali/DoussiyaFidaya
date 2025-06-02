import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorizationsOrderByWithRelationInput } from "../../../inputs/AuthorizationsOrderByWithRelationInput";
import { AuthorizationsWhereInput } from "../../../inputs/AuthorizationsWhereInput";
import { AuthorizationsWhereUniqueInput } from "../../../inputs/AuthorizationsWhereUniqueInput";
import { AuthorizationsScalarFieldEnum } from "../../../../enums/AuthorizationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAuthorizationsArgs {
  @TypeGraphQL.Field(_type => AuthorizationsWhereInput, {
    nullable: true
  })
  where?: AuthorizationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AuthorizationsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AuthorizationsWhereUniqueInput, {
    nullable: true
  })
  cursor?: AuthorizationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "level" | "institut_medical_id" | "patient_id"> | undefined;
}
