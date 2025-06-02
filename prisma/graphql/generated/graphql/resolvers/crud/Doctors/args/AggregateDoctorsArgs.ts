import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DoctorsOrderByWithRelationInput } from "../../../inputs/DoctorsOrderByWithRelationInput";
import { DoctorsWhereInput } from "../../../inputs/DoctorsWhereInput";
import { DoctorsWhereUniqueInput } from "../../../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateDoctorsArgs {
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
}
