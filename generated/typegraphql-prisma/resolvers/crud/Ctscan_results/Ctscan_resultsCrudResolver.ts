import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCtscan_resultsArgs } from "./args/AggregateCtscan_resultsArgs";
import { CreateManyAndReturnCtscan_resultsArgs } from "./args/CreateManyAndReturnCtscan_resultsArgs";
import { CreateManyCtscan_resultsArgs } from "./args/CreateManyCtscan_resultsArgs";
import { CreateOneCtscan_resultsArgs } from "./args/CreateOneCtscan_resultsArgs";
import { DeleteManyCtscan_resultsArgs } from "./args/DeleteManyCtscan_resultsArgs";
import { DeleteOneCtscan_resultsArgs } from "./args/DeleteOneCtscan_resultsArgs";
import { FindFirstCtscan_resultsArgs } from "./args/FindFirstCtscan_resultsArgs";
import { FindFirstCtscan_resultsOrThrowArgs } from "./args/FindFirstCtscan_resultsOrThrowArgs";
import { FindManyCtscan_resultsArgs } from "./args/FindManyCtscan_resultsArgs";
import { FindUniqueCtscan_resultsArgs } from "./args/FindUniqueCtscan_resultsArgs";
import { FindUniqueCtscan_resultsOrThrowArgs } from "./args/FindUniqueCtscan_resultsOrThrowArgs";
import { GroupByCtscan_resultsArgs } from "./args/GroupByCtscan_resultsArgs";
import { UpdateManyCtscan_resultsArgs } from "./args/UpdateManyCtscan_resultsArgs";
import { UpdateOneCtscan_resultsArgs } from "./args/UpdateOneCtscan_resultsArgs";
import { UpsertOneCtscan_resultsArgs } from "./args/UpsertOneCtscan_resultsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Ctscan_results } from "../../../models/Ctscan_results";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCtscan_results } from "../../outputs/AggregateCtscan_results";
import { CreateManyAndReturnCtscan_results } from "../../outputs/CreateManyAndReturnCtscan_results";
import { Ctscan_resultsGroupBy } from "../../outputs/Ctscan_resultsGroupBy";

@TypeGraphQL.Resolver(_of => Ctscan_results)
export class Ctscan_resultsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateCtscan_results, {
    nullable: false
  })
  async aggregateCtscan_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCtscan_resultsArgs): Promise<AggregateCtscan_results> {
    return getPrismaFromContext(ctx).ctscan_results.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCtscan_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCtscan_resultsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnCtscan_results], {
    nullable: false
  })
  async createManyAndReturnCtscan_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnCtscan_resultsArgs): Promise<CreateManyAndReturnCtscan_results[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Ctscan_results, {
    nullable: false
  })
  async createOneCtscan_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCtscan_resultsArgs): Promise<Ctscan_results> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCtscan_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCtscan_resultsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Ctscan_results, {
    nullable: true
  })
  async deleteOneCtscan_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneCtscan_resultsArgs): Promise<Ctscan_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Ctscan_results, {
    nullable: true
  })
  async findFirstCtscan_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCtscan_resultsArgs): Promise<Ctscan_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Ctscan_results, {
    nullable: true
  })
  async findFirstCtscan_resultsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCtscan_resultsOrThrowArgs): Promise<Ctscan_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Ctscan_results], {
    nullable: false
  })
  async findManyCtscan_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCtscan_resultsArgs): Promise<Ctscan_results[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Ctscan_results, {
    nullable: true
  })
  async findUniqueCtscan_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCtscan_resultsArgs): Promise<Ctscan_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Ctscan_results, {
    nullable: true
  })
  async findUniqueCtscan_resultsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCtscan_resultsOrThrowArgs): Promise<Ctscan_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Ctscan_resultsGroupBy], {
    nullable: false
  })
  async groupByCtscan_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCtscan_resultsArgs): Promise<Ctscan_resultsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCtscan_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyCtscan_resultsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Ctscan_results, {
    nullable: true
  })
  async updateOneCtscan_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCtscan_resultsArgs): Promise<Ctscan_results | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Ctscan_results, {
    nullable: false
  })
  async upsertOneCtscan_results(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCtscan_resultsArgs): Promise<Ctscan_results> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ctscan_results.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
