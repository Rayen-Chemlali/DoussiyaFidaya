import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DoctorsOrderByWithAggregationInput } from "../../../inputs/DoctorsOrderByWithAggregationInput";
import { DoctorsScalarWhereWithAggregatesInput } from "../../../inputs/DoctorsScalarWhereWithAggregatesInput";
import { DoctorsWhereInput } from "../../../inputs/DoctorsWhereInput";
import { DoctorsScalarFieldEnum } from "../../../../enums/DoctorsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDoctorsArgs {
  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DoctorsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DoctorsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "type" | "is_license_verified" | "bio" | "education" | "experience" | "first_name" | "languages" | "last_name" | "profile_image" | "specialty" | "user_id">;

  @TypeGraphQL.Field(_type => DoctorsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DoctorsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
