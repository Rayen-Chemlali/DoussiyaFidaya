import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLaboratoriesArgs } from "./args/AggregateLaboratoriesArgs";
import { CreateManyAndReturnLaboratoriesArgs } from "./args/CreateManyAndReturnLaboratoriesArgs";
import { CreateManyLaboratoriesArgs } from "./args/CreateManyLaboratoriesArgs";
import { CreateOneLaboratoriesArgs } from "./args/CreateOneLaboratoriesArgs";
import { DeleteManyLaboratoriesArgs } from "./args/DeleteManyLaboratoriesArgs";
import { DeleteOneLaboratoriesArgs } from "./args/DeleteOneLaboratoriesArgs";
import { FindFirstLaboratoriesArgs } from "./args/FindFirstLaboratoriesArgs";
import { FindFirstLaboratoriesOrThrowArgs } from "./args/FindFirstLaboratoriesOrThrowArgs";
import { FindManyLaboratoriesArgs } from "./args/FindManyLaboratoriesArgs";
import { FindUniqueLaboratoriesArgs } from "./args/FindUniqueLaboratoriesArgs";
import { FindUniqueLaboratoriesOrThrowArgs } from "./args/FindUniqueLaboratoriesOrThrowArgs";
import { GroupByLaboratoriesArgs } from "./args/GroupByLaboratoriesArgs";
import { UpdateManyLaboratoriesArgs } from "./args/UpdateManyLaboratoriesArgs";
import { UpdateOneLaboratoriesArgs } from "./args/UpdateOneLaboratoriesArgs";
import { UpsertOneLaboratoriesArgs } from "./args/UpsertOneLaboratoriesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Laboratories } from "../../../models/Laboratories";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateLaboratories } from "../../outputs/AggregateLaboratories";
import { CreateManyAndReturnLaboratories } from "../../outputs/CreateManyAndReturnLaboratories";
import { LaboratoriesGroupBy } from "../../outputs/LaboratoriesGroupBy";

@TypeGraphQL.Resolver(_of => Laboratories)
export class LaboratoriesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateLaboratories, {
    nullable: false
  })
  async aggregateLaboratories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLaboratoriesArgs): Promise<AggregateLaboratories> {
    return getPrismaFromContext(ctx).laboratories.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyLaboratories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyLaboratoriesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLaboratories], {
    nullable: false
  })
  async createManyAndReturnLaboratories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnLaboratoriesArgs): Promise<CreateManyAndReturnLaboratories[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Laboratories, {
    nullable: false
  })
  async createOneLaboratories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneLaboratoriesArgs): Promise<Laboratories> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyLaboratories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyLaboratoriesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Laboratories, {
    nullable: true
  })
  async deleteOneLaboratories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneLaboratoriesArgs): Promise<Laboratories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Laboratories, {
    nullable: true
  })
  async findFirstLaboratories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLaboratoriesArgs): Promise<Laboratories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Laboratories, {
    nullable: true
  })
  async findFirstLaboratoriesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLaboratoriesOrThrowArgs): Promise<Laboratories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Laboratories], {
    nullable: false
  })
  async findManyLaboratories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyLaboratoriesArgs): Promise<Laboratories[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Laboratories, {
    nullable: true
  })
  async findUniqueLaboratories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLaboratoriesArgs): Promise<Laboratories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Laboratories, {
    nullable: true
  })
  async findUniqueLaboratoriesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLaboratoriesOrThrowArgs): Promise<Laboratories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LaboratoriesGroupBy], {
    nullable: false
  })
  async groupByLaboratories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLaboratoriesArgs): Promise<LaboratoriesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyLaboratories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyLaboratoriesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Laboratories, {
    nullable: true
  })
  async updateOneLaboratories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneLaboratoriesArgs): Promise<Laboratories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Laboratories, {
    nullable: false
  })
  async upsertOneLaboratories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneLaboratoriesArgs): Promise<Laboratories> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
