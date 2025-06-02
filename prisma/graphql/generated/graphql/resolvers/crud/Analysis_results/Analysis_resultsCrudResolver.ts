import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAnalysis_resultsArgs } from "./args/AggregateAnalysis_resultsArgs";
import { CreateManyAnalysis_resultsArgs } from "./args/CreateManyAnalysis_resultsArgs";
import { CreateManyAndReturnAnalysis_resultsArgs } from "./args/CreateManyAndReturnAnalysis_resultsArgs";
import { CreateOneAnalysis_resultsArgs } from "./args/CreateOneAnalysis_resultsArgs";
import { DeleteManyAnalysis_resultsArgs } from "./args/DeleteManyAnalysis_resultsArgs";
import { DeleteOneAnalysis_resultsArgs } from "./args/DeleteOneAnalysis_resultsArgs";
import { FindFirstAnalysis_resultsArgs } from "./args/FindFirstAnalysis_resultsArgs";
import { FindFirstAnalysis_resultsOrThrowArgs } from "./args/FindFirstAnalysis_resultsOrThrowArgs";
import { FindManyAnalysis_resultsArgs } from "./args/FindManyAnalysis_resultsArgs";
import { FindUniqueAnalysis_resultsArgs } from "./args/FindUniqueAnalysis_resultsArgs";
import { FindUniqueAnalysis_resultsOrThrowArgs } from "./args/FindUniqueAnalysis_resultsOrThrowArgs";
import { GroupByAnalysis_resultsArgs } from "./args/GroupByAnalysis_resultsArgs";
import { UpdateManyAnalysis_resultsArgs } from "./args/UpdateManyAnalysis_resultsArgs";
import { UpdateOneAnalysis_resultsArgs } from "./args/UpdateOneAnalysis_resultsArgs";
import { UpsertOneAnalysis_resultsArgs } from "./args/UpsertOneAnalysis_resultsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Analysis_results } from "../../../models/Analysis_results";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAnalysis_results } from "../../outputs/AggregateAnalysis_results";
import { Analysis_resultsGroupBy } from "../../outputs/Analysis_resultsGroupBy";
import { CreateManyAndReturnAnalysis_results } from "../../outputs/CreateManyAndReturnAnalysis_results";

@TypeGraphQL.Resolver(_of => Analysis_results)
export class Analysis_resultsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateAnalysis_results, {
    nullable: false
  })
  async aggregateAnalysis_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAnalysis_resultsArgs): Promise<AggregateAnalysis_results> {
    return getPrismaFromContext(ctx).analysis_results.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyAnalysis_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAnalysis_resultsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnAnalysis_results], {
    nullable: false
  })
  async createManyAndReturnAnalysis_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnAnalysis_resultsArgs): Promise<CreateManyAndReturnAnalysis_results[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Analysis_results, {
    nullable: false
  })
  async createOneAnalysis_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneAnalysis_resultsArgs): Promise<Analysis_results> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAnalysis_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyAnalysis_resultsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Analysis_results, {
    nullable: true
  })
  async deleteOneAnalysis_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneAnalysis_resultsArgs): Promise<Analysis_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Analysis_results, {
    nullable: true
  })
  async findFirstAnalysis_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAnalysis_resultsArgs): Promise<Analysis_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Analysis_results, {
    nullable: true
  })
  async findFirstAnalysis_resultsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAnalysis_resultsOrThrowArgs): Promise<Analysis_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Analysis_results], {
    nullable: false
  })
  async findManyAnalysis_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyAnalysis_resultsArgs): Promise<Analysis_results[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Analysis_results, {
    nullable: true
  })
  async findUniqueAnalysis_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAnalysis_resultsArgs): Promise<Analysis_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Analysis_results, {
    nullable: true
  })
  async findUniqueAnalysis_resultsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAnalysis_resultsOrThrowArgs): Promise<Analysis_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Analysis_resultsGroupBy], {
    nullable: false
  })
  async groupByAnalysis_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAnalysis_resultsArgs): Promise<Analysis_resultsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAnalysis_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyAnalysis_resultsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Analysis_results, {
    nullable: true
  })
  async updateOneAnalysis_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneAnalysis_resultsArgs): Promise<Analysis_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Analysis_results, {
    nullable: false
  })
  async upsertOneAnalysis_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneAnalysis_resultsArgs): Promise<Analysis_results> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analysis_results.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
