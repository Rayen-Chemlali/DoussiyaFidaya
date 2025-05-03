import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rdv_requestsOrderByWithRelationInput } from "../../../inputs/Rdv_requestsOrderByWithRelationInput";
import { Rdv_requestsWhereInput } from "../../../inputs/Rdv_requestsWhereInput";
import { Rdv_requestsWhereUniqueInput } from "../../../inputs/Rdv_requestsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRdv_requestsArgs {
  @TypeGraphQL.Field(_type => Rdv_requestsWhereInput, {
    nullable: true
  })
  where?: Rdv_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Rdv_requestsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Rdv_requestsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
