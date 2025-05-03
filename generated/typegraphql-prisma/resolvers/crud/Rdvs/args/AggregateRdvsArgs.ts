import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RdvsOrderByWithRelationInput } from "../../../inputs/RdvsOrderByWithRelationInput";
import { RdvsWhereInput } from "../../../inputs/RdvsWhereInput";
import { RdvsWhereUniqueInput } from "../../../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRdvsArgs {
  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  where?: RdvsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RdvsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: RdvsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => RdvsWhereUniqueInput, {
    nullable: true
  })
  cursor?: RdvsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
