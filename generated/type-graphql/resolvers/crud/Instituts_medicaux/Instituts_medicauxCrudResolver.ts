import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateInstituts_medicauxArgs } from "./args/AggregateInstituts_medicauxArgs";
import { CreateManyAndReturnInstituts_medicauxArgs } from "./args/CreateManyAndReturnInstituts_medicauxArgs";
import { CreateManyInstituts_medicauxArgs } from "./args/CreateManyInstituts_medicauxArgs";
import { CreateOneInstituts_medicauxArgs } from "./args/CreateOneInstituts_medicauxArgs";
import { DeleteManyInstituts_medicauxArgs } from "./args/DeleteManyInstituts_medicauxArgs";
import { DeleteOneInstituts_medicauxArgs } from "./args/DeleteOneInstituts_medicauxArgs";
import { FindFirstInstituts_medicauxArgs } from "./args/FindFirstInstituts_medicauxArgs";
import { FindFirstInstituts_medicauxOrThrowArgs } from "./args/FindFirstInstituts_medicauxOrThrowArgs";
import { FindManyInstituts_medicauxArgs } from "./args/FindManyInstituts_medicauxArgs";
import { FindUniqueInstituts_medicauxArgs } from "./args/FindUniqueInstituts_medicauxArgs";
import { FindUniqueInstituts_medicauxOrThrowArgs } from "./args/FindUniqueInstituts_medicauxOrThrowArgs";
import { GroupByInstituts_medicauxArgs } from "./args/GroupByInstituts_medicauxArgs";
import { UpdateManyInstituts_medicauxArgs } from "./args/UpdateManyInstituts_medicauxArgs";
import { UpdateOneInstituts_medicauxArgs } from "./args/UpdateOneInstituts_medicauxArgs";
import { UpsertOneInstituts_medicauxArgs } from "./args/UpsertOneInstituts_medicauxArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Instituts_medicaux } from "../../../models/Instituts_medicaux";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateInstituts_medicaux } from "../../outputs/AggregateInstituts_medicaux";
import { CreateManyAndReturnInstituts_medicaux } from "../../outputs/CreateManyAndReturnInstituts_medicaux";
import { Instituts_medicauxGroupBy } from "../../outputs/Instituts_medicauxGroupBy";

@TypeGraphQL.Resolver(_of => Instituts_medicaux)
export class Instituts_medicauxCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateInstituts_medicaux, {
    nullable: false
  })
  async aggregateInstituts_medicaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateInstituts_medicauxArgs): Promise<AggregateInstituts_medicaux> {
    return getPrismaFromContext(ctx).instituts_medicaux.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyInstituts_medicaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyInstituts_medicauxArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnInstituts_medicaux], {
    nullable: false
  })
  async createManyAndReturnInstituts_medicaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnInstituts_medicauxArgs): Promise<CreateManyAndReturnInstituts_medicaux[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Instituts_medicaux, {
    nullable: false
  })
  async createOneInstituts_medicaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneInstituts_medicauxArgs): Promise<Instituts_medicaux> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyInstituts_medicaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyInstituts_medicauxArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Instituts_medicaux, {
    nullable: true
  })
  async deleteOneInstituts_medicaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneInstituts_medicauxArgs): Promise<Instituts_medicaux | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Instituts_medicaux, {
    nullable: true
  })
  async findFirstInstituts_medicaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstInstituts_medicauxArgs): Promise<Instituts_medicaux | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Instituts_medicaux, {
    nullable: true
  })
  async findFirstInstituts_medicauxOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstInstituts_medicauxOrThrowArgs): Promise<Instituts_medicaux | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Instituts_medicaux], {
    nullable: false
  })
  async instituts_medicauxes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyInstituts_medicauxArgs): Promise<Instituts_medicaux[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Instituts_medicaux, {
    nullable: true
  })
  async instituts_medicaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueInstituts_medicauxArgs): Promise<Instituts_medicaux | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Instituts_medicaux, {
    nullable: true
  })
  async getInstituts_medicaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueInstituts_medicauxOrThrowArgs): Promise<Instituts_medicaux | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Instituts_medicauxGroupBy], {
    nullable: false
  })
  async groupByInstituts_medicaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByInstituts_medicauxArgs): Promise<Instituts_medicauxGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyInstituts_medicaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyInstituts_medicauxArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Instituts_medicaux, {
    nullable: true
  })
  async updateOneInstituts_medicaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneInstituts_medicauxArgs): Promise<Instituts_medicaux | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Instituts_medicaux, {
    nullable: false
  })
  async upsertOneInstituts_medicaux(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneInstituts_medicauxArgs): Promise<Instituts_medicaux> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).instituts_medicaux.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
