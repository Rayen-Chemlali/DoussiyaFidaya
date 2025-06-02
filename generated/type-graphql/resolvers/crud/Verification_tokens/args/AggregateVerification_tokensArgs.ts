import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Verification_tokensOrderByWithRelationInput } from "../../../inputs/Verification_tokensOrderByWithRelationInput";
import { Verification_tokensWhereInput } from "../../../inputs/Verification_tokensWhereInput";
import { Verification_tokensWhereUniqueInput } from "../../../inputs/Verification_tokensWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateVerification_tokensArgs {
  @TypeGraphQL.Field(_type => Verification_tokensWhereInput, {
    nullable: true
  })
  where?: Verification_tokensWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Verification_tokensOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Verification_tokensOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Verification_tokensWhereUniqueInput, {
    nullable: true
  })
  cursor?: Verification_tokensWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
