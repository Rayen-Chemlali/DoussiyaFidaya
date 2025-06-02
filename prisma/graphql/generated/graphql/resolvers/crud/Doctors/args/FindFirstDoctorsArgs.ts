import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DoctorsOrderByWithRelationInput } from "../../../inputs/DoctorsOrderByWithRelationInput";
import { DoctorsWhereInput } from "../../../inputs/DoctorsWhereInput";
import { DoctorsWhereUniqueInput } from "../../../inputs/DoctorsWhereUniqueInput";
import { DoctorsScalarFieldEnum } from "../../../../enums/DoctorsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstDoctorsArgs {
  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DoctorsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: DoctorsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: true
  })
  cursor?: DoctorsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DoctorsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "type" | "is_license_verified" | "bio" | "education" | "experience" | "first_name" | "languages" | "last_name" | "profile_image" | "specialty" | "user_id"> | undefined;
}
