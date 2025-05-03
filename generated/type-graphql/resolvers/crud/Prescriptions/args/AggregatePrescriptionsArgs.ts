import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrescriptionsOrderByWithRelationInput } from "../../../inputs/PrescriptionsOrderByWithRelationInput";
import { PrescriptionsWhereInput } from "../../../inputs/PrescriptionsWhereInput";
import { PrescriptionsWhereUniqueInput } from "../../../inputs/PrescriptionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePrescriptionsArgs {
  @TypeGraphQL.Field(_type => PrescriptionsWhereInput, {
    nullable: true
  })
  where?: PrescriptionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PrescriptionsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PrescriptionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
