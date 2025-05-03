import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLab_attachmentsArgs } from "./args/AggregateLab_attachmentsArgs";
import { CreateManyAndReturnLab_attachmentsArgs } from "./args/CreateManyAndReturnLab_attachmentsArgs";
import { CreateManyLab_attachmentsArgs } from "./args/CreateManyLab_attachmentsArgs";
import { CreateOneLab_attachmentsArgs } from "./args/CreateOneLab_attachmentsArgs";
import { DeleteManyLab_attachmentsArgs } from "./args/DeleteManyLab_attachmentsArgs";
import { DeleteOneLab_attachmentsArgs } from "./args/DeleteOneLab_attachmentsArgs";
import { FindFirstLab_attachmentsArgs } from "./args/FindFirstLab_attachmentsArgs";
import { FindFirstLab_attachmentsOrThrowArgs } from "./args/FindFirstLab_attachmentsOrThrowArgs";
import { FindManyLab_attachmentsArgs } from "./args/FindManyLab_attachmentsArgs";
import { FindUniqueLab_attachmentsArgs } from "./args/FindUniqueLab_attachmentsArgs";
import { FindUniqueLab_attachmentsOrThrowArgs } from "./args/FindUniqueLab_attachmentsOrThrowArgs";
import { GroupByLab_attachmentsArgs } from "./args/GroupByLab_attachmentsArgs";
import { UpdateManyLab_attachmentsArgs } from "./args/UpdateManyLab_attachmentsArgs";
import { UpdateOneLab_attachmentsArgs } from "./args/UpdateOneLab_attachmentsArgs";
import { UpsertOneLab_attachmentsArgs } from "./args/UpsertOneLab_attachmentsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Lab_attachments } from "../../../models/Lab_attachments";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateLab_attachments } from "../../outputs/AggregateLab_attachments";
import { CreateManyAndReturnLab_attachments } from "../../outputs/CreateManyAndReturnLab_attachments";
import { Lab_attachmentsGroupBy } from "../../outputs/Lab_attachmentsGroupBy";

@TypeGraphQL.Resolver(_of => Lab_attachments)
export class Lab_attachmentsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateLab_attachments, {
    nullable: false
  })
  async aggregateLab_attachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLab_attachmentsArgs): Promise<AggregateLab_attachments> {
    return getPrismaFromContext(ctx).lab_attachments.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyLab_attachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyLab_attachmentsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_attachments.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLab_attachments], {
    nullable: false
  })
  async createManyAndReturnLab_attachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnLab_attachmentsArgs): Promise<CreateManyAndReturnLab_attachments[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_attachments.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Lab_attachments, {
    nullable: false
  })
  async createOneLab_attachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneLab_attachmentsArgs): Promise<Lab_attachments> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_attachments.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyLab_attachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyLab_attachmentsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_attachments.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Lab_attachments, {
    nullable: true
  })
  async deleteOneLab_attachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneLab_attachmentsArgs): Promise<Lab_attachments | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_attachments.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Lab_attachments, {
    nullable: true
  })
  async findFirstLab_attachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLab_attachmentsArgs): Promise<Lab_attachments | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_attachments.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Lab_attachments, {
    nullable: true
  })
  async findFirstLab_attachmentsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLab_attachmentsOrThrowArgs): Promise<Lab_attachments | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_attachments.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Lab_attachments], {
    nullable: false
  })
  async findManyLab_attachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyLab_attachmentsArgs): Promise<Lab_attachments[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_attachments.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Lab_attachments, {
    nullable: true
  })
  async findUniqueLab_attachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLab_attachmentsArgs): Promise<Lab_attachments | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_attachments.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Lab_attachments, {
    nullable: true
  })
  async findUniqueLab_attachmentsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLab_attachmentsOrThrowArgs): Promise<Lab_attachments | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_attachments.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Lab_attachmentsGroupBy], {
    nullable: false
  })
  async groupByLab_attachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLab_attachmentsArgs): Promise<Lab_attachmentsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_attachments.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyLab_attachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyLab_attachmentsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_attachments.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Lab_attachments, {
    nullable: true
  })
  async updateOneLab_attachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneLab_attachmentsArgs): Promise<Lab_attachments | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_attachments.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Lab_attachments, {
    nullable: false
  })
  async upsertOneLab_attachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneLab_attachmentsArgs): Promise<Lab_attachments> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_attachments.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
