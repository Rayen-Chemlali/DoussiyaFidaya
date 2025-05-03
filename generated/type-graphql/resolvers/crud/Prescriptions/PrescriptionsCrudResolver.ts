import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePrescriptionsArgs } from "./args/AggregatePrescriptionsArgs";
import { CreateManyAndReturnPrescriptionsArgs } from "./args/CreateManyAndReturnPrescriptionsArgs";
import { CreateManyPrescriptionsArgs } from "./args/CreateManyPrescriptionsArgs";
import { CreateOnePrescriptionsArgs } from "./args/CreateOnePrescriptionsArgs";
import { DeleteManyPrescriptionsArgs } from "./args/DeleteManyPrescriptionsArgs";
import { DeleteOnePrescriptionsArgs } from "./args/DeleteOnePrescriptionsArgs";
import { FindFirstPrescriptionsArgs } from "./args/FindFirstPrescriptionsArgs";
import { FindFirstPrescriptionsOrThrowArgs } from "./args/FindFirstPrescriptionsOrThrowArgs";
import { FindManyPrescriptionsArgs } from "./args/FindManyPrescriptionsArgs";
import { FindUniquePrescriptionsArgs } from "./args/FindUniquePrescriptionsArgs";
import { FindUniquePrescriptionsOrThrowArgs } from "./args/FindUniquePrescriptionsOrThrowArgs";
import { GroupByPrescriptionsArgs } from "./args/GroupByPrescriptionsArgs";
import { UpdateManyPrescriptionsArgs } from "./args/UpdateManyPrescriptionsArgs";
import { UpdateOnePrescriptionsArgs } from "./args/UpdateOnePrescriptionsArgs";
import { UpsertOnePrescriptionsArgs } from "./args/UpsertOnePrescriptionsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Prescriptions } from "../../../models/Prescriptions";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePrescriptions } from "../../outputs/AggregatePrescriptions";
import { CreateManyAndReturnPrescriptions } from "../../outputs/CreateManyAndReturnPrescriptions";
import { PrescriptionsGroupBy } from "../../outputs/PrescriptionsGroupBy";

@TypeGraphQL.Resolver(_of => Prescriptions)
export class PrescriptionsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePrescriptions, {
    nullable: false
  })
  async aggregatePrescriptions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePrescriptionsArgs): Promise<AggregatePrescriptions> {
    return getPrismaFromContext(ctx).prescriptions.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPrescriptions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyPrescriptionsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPrescriptions], {
    nullable: false
  })
  async createManyAndReturnPrescriptions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPrescriptionsArgs): Promise<CreateManyAndReturnPrescriptions[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Prescriptions, {
    nullable: false
  })
  async createOnePrescriptions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePrescriptionsArgs): Promise<Prescriptions> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPrescriptions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyPrescriptionsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Prescriptions, {
    nullable: true
  })
  async deleteOnePrescriptions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePrescriptionsArgs): Promise<Prescriptions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Prescriptions, {
    nullable: true
  })
  async findFirstPrescriptions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPrescriptionsArgs): Promise<Prescriptions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Prescriptions, {
    nullable: true
  })
  async findFirstPrescriptionsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPrescriptionsOrThrowArgs): Promise<Prescriptions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Prescriptions], {
    nullable: false
  })
  async findManyPrescriptions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPrescriptionsArgs): Promise<Prescriptions[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Prescriptions, {
    nullable: true
  })
  async findUniquePrescriptions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePrescriptionsArgs): Promise<Prescriptions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Prescriptions, {
    nullable: true
  })
  async findUniquePrescriptionsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePrescriptionsOrThrowArgs): Promise<Prescriptions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PrescriptionsGroupBy], {
    nullable: false
  })
  async groupByPrescriptions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPrescriptionsArgs): Promise<PrescriptionsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPrescriptions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyPrescriptionsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Prescriptions, {
    nullable: true
  })
  async updateOnePrescriptions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePrescriptionsArgs): Promise<Prescriptions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Prescriptions, {
    nullable: false
  })
  async upsertOnePrescriptions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePrescriptionsArgs): Promise<Prescriptions> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescriptions.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
