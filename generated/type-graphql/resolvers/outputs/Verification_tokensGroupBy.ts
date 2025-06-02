import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Verification_tokensAvgAggregate } from "../outputs/Verification_tokensAvgAggregate";
import { Verification_tokensCountAggregate } from "../outputs/Verification_tokensCountAggregate";
import { Verification_tokensMaxAggregate } from "../outputs/Verification_tokensMaxAggregate";
import { Verification_tokensMinAggregate } from "../outputs/Verification_tokensMinAggregate";
import { Verification_tokensSumAggregate } from "../outputs/Verification_tokensSumAggregate";

@TypeGraphQL.ObjectType("Verification_tokensGroupBy", {})
export class Verification_tokensGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  numberofTries!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  expireAt!: Date;

  @TypeGraphQL.Field(_type => Verification_tokensCountAggregate, {
    nullable: true
  })
  _count!: Verification_tokensCountAggregate | null;

  @TypeGraphQL.Field(_type => Verification_tokensAvgAggregate, {
    nullable: true
  })
  _avg!: Verification_tokensAvgAggregate | null;

  @TypeGraphQL.Field(_type => Verification_tokensSumAggregate, {
    nullable: true
  })
  _sum!: Verification_tokensSumAggregate | null;

  @TypeGraphQL.Field(_type => Verification_tokensMinAggregate, {
    nullable: true
  })
  _min!: Verification_tokensMinAggregate | null;

  @TypeGraphQL.Field(_type => Verification_tokensMaxAggregate, {
    nullable: true
  })
  _max!: Verification_tokensMaxAggregate | null;
}
