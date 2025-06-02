import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVerification_tokensArgs } from "./args/AggregateVerification_tokensArgs";
import { CreateManyAndReturnVerification_tokensArgs } from "./args/CreateManyAndReturnVerification_tokensArgs";
import { CreateManyVerification_tokensArgs } from "./args/CreateManyVerification_tokensArgs";
import { CreateOneVerification_tokensArgs } from "./args/CreateOneVerification_tokensArgs";
import { DeleteManyVerification_tokensArgs } from "./args/DeleteManyVerification_tokensArgs";
import { DeleteOneVerification_tokensArgs } from "./args/DeleteOneVerification_tokensArgs";
import { FindFirstVerification_tokensArgs } from "./args/FindFirstVerification_tokensArgs";
import { FindFirstVerification_tokensOrThrowArgs } from "./args/FindFirstVerification_tokensOrThrowArgs";
import { FindManyVerification_tokensArgs } from "./args/FindManyVerification_tokensArgs";
import { FindUniqueVerification_tokensArgs } from "./args/FindUniqueVerification_tokensArgs";
import { FindUniqueVerification_tokensOrThrowArgs } from "./args/FindUniqueVerification_tokensOrThrowArgs";
import { GroupByVerification_tokensArgs } from "./args/GroupByVerification_tokensArgs";
import { UpdateManyVerification_tokensArgs } from "./args/UpdateManyVerification_tokensArgs";
import { UpdateOneVerification_tokensArgs } from "./args/UpdateOneVerification_tokensArgs";
import { UpsertOneVerification_tokensArgs } from "./args/UpsertOneVerification_tokensArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Verification_tokens } from "../../../models/Verification_tokens";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateVerification_tokens } from "../../outputs/AggregateVerification_tokens";
import { CreateManyAndReturnVerification_tokens } from "../../outputs/CreateManyAndReturnVerification_tokens";
import { Verification_tokensGroupBy } from "../../outputs/Verification_tokensGroupBy";

@TypeGraphQL.Resolver(_of => Verification_tokens)
export class Verification_tokensCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateVerification_tokens, {
    nullable: false
  })
  async aggregateVerification_tokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVerification_tokensArgs): Promise<AggregateVerification_tokens> {
    return getPrismaFromContext(ctx).verification_tokens.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyVerification_tokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyVerification_tokensArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verification_tokens.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnVerification_tokens], {
    nullable: false
  })
  async createManyAndReturnVerification_tokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnVerification_tokensArgs): Promise<CreateManyAndReturnVerification_tokens[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verification_tokens.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Verification_tokens, {
    nullable: false
  })
  async createOneVerification_tokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneVerification_tokensArgs): Promise<Verification_tokens> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verification_tokens.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyVerification_tokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyVerification_tokensArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verification_tokens.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Verification_tokens, {
    nullable: true
  })
  async deleteOneVerification_tokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneVerification_tokensArgs): Promise<Verification_tokens | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verification_tokens.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Verification_tokens, {
    nullable: true
  })
  async findFirstVerification_tokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVerification_tokensArgs): Promise<Verification_tokens | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verification_tokens.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Verification_tokens, {
    nullable: true
  })
  async findFirstVerification_tokensOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVerification_tokensOrThrowArgs): Promise<Verification_tokens | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verification_tokens.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Verification_tokens], {
    nullable: false
  })
  async findManyVerification_tokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyVerification_tokensArgs): Promise<Verification_tokens[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verification_tokens.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Verification_tokens, {
    nullable: true
  })
  async findUniqueVerification_tokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVerification_tokensArgs): Promise<Verification_tokens | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verification_tokens.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Verification_tokens, {
    nullable: true
  })
  async findUniqueVerification_tokensOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVerification_tokensOrThrowArgs): Promise<Verification_tokens | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verification_tokens.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Verification_tokensGroupBy], {
    nullable: false
  })
  async groupByVerification_tokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVerification_tokensArgs): Promise<Verification_tokensGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verification_tokens.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyVerification_tokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyVerification_tokensArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verification_tokens.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Verification_tokens, {
    nullable: true
  })
  async updateOneVerification_tokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneVerification_tokensArgs): Promise<Verification_tokens | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verification_tokens.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Verification_tokens, {
    nullable: false
  })
  async upsertOneVerification_tokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneVerification_tokensArgs): Promise<Verification_tokens> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verification_tokens.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
