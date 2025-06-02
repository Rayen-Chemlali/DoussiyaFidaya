import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateGeneralMedicalRecordsArgs } from "./args/AggregateGeneralMedicalRecordsArgs";
import { CreateManyAndReturnGeneralMedicalRecordsArgs } from "./args/CreateManyAndReturnGeneralMedicalRecordsArgs";
import { CreateManyGeneralMedicalRecordsArgs } from "./args/CreateManyGeneralMedicalRecordsArgs";
import { CreateOneGeneralMedicalRecordsArgs } from "./args/CreateOneGeneralMedicalRecordsArgs";
import { DeleteManyGeneralMedicalRecordsArgs } from "./args/DeleteManyGeneralMedicalRecordsArgs";
import { DeleteOneGeneralMedicalRecordsArgs } from "./args/DeleteOneGeneralMedicalRecordsArgs";
import { FindFirstGeneralMedicalRecordsArgs } from "./args/FindFirstGeneralMedicalRecordsArgs";
import { FindFirstGeneralMedicalRecordsOrThrowArgs } from "./args/FindFirstGeneralMedicalRecordsOrThrowArgs";
import { FindManyGeneralMedicalRecordsArgs } from "./args/FindManyGeneralMedicalRecordsArgs";
import { FindUniqueGeneralMedicalRecordsArgs } from "./args/FindUniqueGeneralMedicalRecordsArgs";
import { FindUniqueGeneralMedicalRecordsOrThrowArgs } from "./args/FindUniqueGeneralMedicalRecordsOrThrowArgs";
import { GroupByGeneralMedicalRecordsArgs } from "./args/GroupByGeneralMedicalRecordsArgs";
import { UpdateManyGeneralMedicalRecordsArgs } from "./args/UpdateManyGeneralMedicalRecordsArgs";
import { UpdateOneGeneralMedicalRecordsArgs } from "./args/UpdateOneGeneralMedicalRecordsArgs";
import { UpsertOneGeneralMedicalRecordsArgs } from "./args/UpsertOneGeneralMedicalRecordsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { GeneralMedicalRecords } from "../../../models/GeneralMedicalRecords";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateGeneralMedicalRecords } from "../../outputs/AggregateGeneralMedicalRecords";
import { CreateManyAndReturnGeneralMedicalRecords } from "../../outputs/CreateManyAndReturnGeneralMedicalRecords";
import { GeneralMedicalRecordsGroupBy } from "../../outputs/GeneralMedicalRecordsGroupBy";

@TypeGraphQL.Resolver(_of => GeneralMedicalRecords)
export class GeneralMedicalRecordsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateGeneralMedicalRecords, {
    nullable: false
  })
  async aggregateGeneralMedicalRecords(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGeneralMedicalRecordsArgs): Promise<AggregateGeneralMedicalRecords> {
    return getPrismaFromContext(ctx).generalMedicalRecords.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyGeneralMedicalRecords(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyGeneralMedicalRecordsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnGeneralMedicalRecords], {
    nullable: false
  })
  async createManyAndReturnGeneralMedicalRecords(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnGeneralMedicalRecordsArgs): Promise<CreateManyAndReturnGeneralMedicalRecords[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GeneralMedicalRecords, {
    nullable: false
  })
  async createOneGeneralMedicalRecords(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneGeneralMedicalRecordsArgs): Promise<GeneralMedicalRecords> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyGeneralMedicalRecords(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyGeneralMedicalRecordsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GeneralMedicalRecords, {
    nullable: true
  })
  async deleteOneGeneralMedicalRecords(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneGeneralMedicalRecordsArgs): Promise<GeneralMedicalRecords | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GeneralMedicalRecords, {
    nullable: true
  })
  async findFirstGeneralMedicalRecords(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGeneralMedicalRecordsArgs): Promise<GeneralMedicalRecords | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GeneralMedicalRecords, {
    nullable: true
  })
  async findFirstGeneralMedicalRecordsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGeneralMedicalRecordsOrThrowArgs): Promise<GeneralMedicalRecords | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GeneralMedicalRecords], {
    nullable: false
  })
  async findManyGeneralMedicalRecords(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGeneralMedicalRecordsArgs): Promise<GeneralMedicalRecords[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GeneralMedicalRecords, {
    nullable: true
  })
  async findUniqueGeneralMedicalRecords(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGeneralMedicalRecordsArgs): Promise<GeneralMedicalRecords | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GeneralMedicalRecords, {
    nullable: true
  })
  async findUniqueGeneralMedicalRecordsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGeneralMedicalRecordsOrThrowArgs): Promise<GeneralMedicalRecords | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GeneralMedicalRecordsGroupBy], {
    nullable: false
  })
  async groupByGeneralMedicalRecords(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGeneralMedicalRecordsArgs): Promise<GeneralMedicalRecordsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyGeneralMedicalRecords(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyGeneralMedicalRecordsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GeneralMedicalRecords, {
    nullable: true
  })
  async updateOneGeneralMedicalRecords(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneGeneralMedicalRecordsArgs): Promise<GeneralMedicalRecords | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GeneralMedicalRecords, {
    nullable: false
  })
  async upsertOneGeneralMedicalRecords(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneGeneralMedicalRecordsArgs): Promise<GeneralMedicalRecords> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
