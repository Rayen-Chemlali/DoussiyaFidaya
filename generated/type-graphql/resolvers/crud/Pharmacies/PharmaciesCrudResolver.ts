import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePharmaciesArgs } from "./args/AggregatePharmaciesArgs";
import { CreateManyAndReturnPharmaciesArgs } from "./args/CreateManyAndReturnPharmaciesArgs";
import { CreateManyPharmaciesArgs } from "./args/CreateManyPharmaciesArgs";
import { CreateOnePharmaciesArgs } from "./args/CreateOnePharmaciesArgs";
import { DeleteManyPharmaciesArgs } from "./args/DeleteManyPharmaciesArgs";
import { DeleteOnePharmaciesArgs } from "./args/DeleteOnePharmaciesArgs";
import { FindFirstPharmaciesArgs } from "./args/FindFirstPharmaciesArgs";
import { FindFirstPharmaciesOrThrowArgs } from "./args/FindFirstPharmaciesOrThrowArgs";
import { FindManyPharmaciesArgs } from "./args/FindManyPharmaciesArgs";
import { FindUniquePharmaciesArgs } from "./args/FindUniquePharmaciesArgs";
import { FindUniquePharmaciesOrThrowArgs } from "./args/FindUniquePharmaciesOrThrowArgs";
import { GroupByPharmaciesArgs } from "./args/GroupByPharmaciesArgs";
import { UpdateManyPharmaciesArgs } from "./args/UpdateManyPharmaciesArgs";
import { UpdateOnePharmaciesArgs } from "./args/UpdateOnePharmaciesArgs";
import { UpsertOnePharmaciesArgs } from "./args/UpsertOnePharmaciesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Pharmacies } from "../../../models/Pharmacies";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePharmacies } from "../../outputs/AggregatePharmacies";
import { CreateManyAndReturnPharmacies } from "../../outputs/CreateManyAndReturnPharmacies";
import { PharmaciesGroupBy } from "../../outputs/PharmaciesGroupBy";

@TypeGraphQL.Resolver(_of => Pharmacies)
export class PharmaciesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePharmacies, {
    nullable: false
  })
  async aggregatePharmacies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePharmaciesArgs): Promise<AggregatePharmacies> {
    return getPrismaFromContext(ctx).pharmacies.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPharmacies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyPharmaciesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pharmacies.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPharmacies], {
    nullable: false
  })
  async createManyAndReturnPharmacies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPharmaciesArgs): Promise<CreateManyAndReturnPharmacies[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pharmacies.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Pharmacies, {
    nullable: false
  })
  async createOnePharmacies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePharmaciesArgs): Promise<Pharmacies> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pharmacies.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPharmacies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyPharmaciesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pharmacies.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Pharmacies, {
    nullable: true
  })
  async deleteOnePharmacies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePharmaciesArgs): Promise<Pharmacies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pharmacies.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Pharmacies, {
    nullable: true
  })
  async findFirstPharmacies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPharmaciesArgs): Promise<Pharmacies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pharmacies.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Pharmacies, {
    nullable: true
  })
  async findFirstPharmaciesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPharmaciesOrThrowArgs): Promise<Pharmacies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pharmacies.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Pharmacies], {
    nullable: false
  })
  async findManyPharmacies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPharmaciesArgs): Promise<Pharmacies[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pharmacies.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Pharmacies, {
    nullable: true
  })
  async findUniquePharmacies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePharmaciesArgs): Promise<Pharmacies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pharmacies.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Pharmacies, {
    nullable: true
  })
  async findUniquePharmaciesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePharmaciesOrThrowArgs): Promise<Pharmacies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pharmacies.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PharmaciesGroupBy], {
    nullable: false
  })
  async groupByPharmacies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPharmaciesArgs): Promise<PharmaciesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pharmacies.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPharmacies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyPharmaciesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pharmacies.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Pharmacies, {
    nullable: true
  })
  async updateOnePharmacies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePharmaciesArgs): Promise<Pharmacies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pharmacies.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Pharmacies, {
    nullable: false
  })
  async upsertOnePharmacies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePharmaciesArgs): Promise<Pharmacies> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pharmacies.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
