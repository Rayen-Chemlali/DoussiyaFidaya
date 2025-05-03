import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateHopitauxArgs } from "./args/AggregateHopitauxArgs";
import { CreateManyAndReturnHopitauxArgs } from "./args/CreateManyAndReturnHopitauxArgs";
import { CreateManyHopitauxArgs } from "./args/CreateManyHopitauxArgs";
import { CreateOneHopitauxArgs } from "./args/CreateOneHopitauxArgs";
import { DeleteManyHopitauxArgs } from "./args/DeleteManyHopitauxArgs";
import { DeleteOneHopitauxArgs } from "./args/DeleteOneHopitauxArgs";
import { FindFirstHopitauxArgs } from "./args/FindFirstHopitauxArgs";
import { FindFirstHopitauxOrThrowArgs } from "./args/FindFirstHopitauxOrThrowArgs";
import { FindManyHopitauxArgs } from "./args/FindManyHopitauxArgs";
import { FindUniqueHopitauxArgs } from "./args/FindUniqueHopitauxArgs";
import { FindUniqueHopitauxOrThrowArgs } from "./args/FindUniqueHopitauxOrThrowArgs";
import { GroupByHopitauxArgs } from "./args/GroupByHopitauxArgs";
import { UpdateManyHopitauxArgs } from "./args/UpdateManyHopitauxArgs";
import { UpdateOneHopitauxArgs } from "./args/UpdateOneHopitauxArgs";
import { UpsertOneHopitauxArgs } from "./args/UpsertOneHopitauxArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Hopitaux } from "../../../models/Hopitaux";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateHopitaux } from "../../outputs/AggregateHopitaux";
import { CreateManyAndReturnHopitaux } from "../../outputs/CreateManyAndReturnHopitaux";
import { HopitauxGroupBy } from "../../outputs/HopitauxGroupBy";

@TypeGraphQL.Resolver(_of => Hopitaux)
export class HopitauxCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateHopitaux, {
    nullable: false
  })
  async aggregateHopitaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateHopitauxArgs): Promise<AggregateHopitaux> {
    return getPrismaFromContext(ctx).hopitaux.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyHopitaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyHopitauxArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hopitaux.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnHopitaux], {
    nullable: false
  })
  async createManyAndReturnHopitaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnHopitauxArgs): Promise<CreateManyAndReturnHopitaux[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hopitaux.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Hopitaux, {
    nullable: false
  })
  async createOneHopitaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneHopitauxArgs): Promise<Hopitaux> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hopitaux.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyHopitaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyHopitauxArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hopitaux.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Hopitaux, {
    nullable: true
  })
  async deleteOneHopitaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneHopitauxArgs): Promise<Hopitaux | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hopitaux.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Hopitaux, {
    nullable: true
  })
  async findFirstHopitaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstHopitauxArgs): Promise<Hopitaux | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hopitaux.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Hopitaux, {
    nullable: true
  })
  async findFirstHopitauxOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstHopitauxOrThrowArgs): Promise<Hopitaux | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hopitaux.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Hopitaux], {
    nullable: false
  })
  async hopitauxes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyHopitauxArgs): Promise<Hopitaux[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hopitaux.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Hopitaux, {
    nullable: true
  })
  async hopitaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueHopitauxArgs): Promise<Hopitaux | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hopitaux.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Hopitaux, {
    nullable: true
  })
  async getHopitaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueHopitauxOrThrowArgs): Promise<Hopitaux | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hopitaux.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [HopitauxGroupBy], {
    nullable: false
  })
  async groupByHopitaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByHopitauxArgs): Promise<HopitauxGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hopitaux.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyHopitaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyHopitauxArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hopitaux.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Hopitaux, {
    nullable: true
  })
  async updateOneHopitaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneHopitauxArgs): Promise<Hopitaux | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hopitaux.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Hopitaux, {
    nullable: false
  })
  async upsertOneHopitaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneHopitauxArgs): Promise<Hopitaux> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hopitaux.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
