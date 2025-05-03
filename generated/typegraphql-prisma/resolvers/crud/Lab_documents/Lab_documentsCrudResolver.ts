import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLab_documentsArgs } from "./args/AggregateLab_documentsArgs";
import { CreateManyAndReturnLab_documentsArgs } from "./args/CreateManyAndReturnLab_documentsArgs";
import { CreateManyLab_documentsArgs } from "./args/CreateManyLab_documentsArgs";
import { CreateOneLab_documentsArgs } from "./args/CreateOneLab_documentsArgs";
import { DeleteManyLab_documentsArgs } from "./args/DeleteManyLab_documentsArgs";
import { DeleteOneLab_documentsArgs } from "./args/DeleteOneLab_documentsArgs";
import { FindFirstLab_documentsArgs } from "./args/FindFirstLab_documentsArgs";
import { FindFirstLab_documentsOrThrowArgs } from "./args/FindFirstLab_documentsOrThrowArgs";
import { FindManyLab_documentsArgs } from "./args/FindManyLab_documentsArgs";
import { FindUniqueLab_documentsArgs } from "./args/FindUniqueLab_documentsArgs";
import { FindUniqueLab_documentsOrThrowArgs } from "./args/FindUniqueLab_documentsOrThrowArgs";
import { GroupByLab_documentsArgs } from "./args/GroupByLab_documentsArgs";
import { UpdateManyLab_documentsArgs } from "./args/UpdateManyLab_documentsArgs";
import { UpdateOneLab_documentsArgs } from "./args/UpdateOneLab_documentsArgs";
import { UpsertOneLab_documentsArgs } from "./args/UpsertOneLab_documentsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Lab_documents } from "../../../models/Lab_documents";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateLab_documents } from "../../outputs/AggregateLab_documents";
import { CreateManyAndReturnLab_documents } from "../../outputs/CreateManyAndReturnLab_documents";
import { Lab_documentsGroupBy } from "../../outputs/Lab_documentsGroupBy";

@TypeGraphQL.Resolver(_of => Lab_documents)
export class Lab_documentsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateLab_documents, {
    nullable: false
  })
  async aggregateLab_documents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLab_documentsArgs): Promise<AggregateLab_documents> {
    return getPrismaFromContext(ctx).lab_documents.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyLab_documents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyLab_documentsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLab_documents], {
    nullable: false
  })
  async createManyAndReturnLab_documents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnLab_documentsArgs): Promise<CreateManyAndReturnLab_documents[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Lab_documents, {
    nullable: false
  })
  async createOneLab_documents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneLab_documentsArgs): Promise<Lab_documents> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyLab_documents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyLab_documentsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Lab_documents, {
    nullable: true
  })
  async deleteOneLab_documents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneLab_documentsArgs): Promise<Lab_documents | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Lab_documents, {
    nullable: true
  })
  async findFirstLab_documents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLab_documentsArgs): Promise<Lab_documents | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Lab_documents, {
    nullable: true
  })
  async findFirstLab_documentsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLab_documentsOrThrowArgs): Promise<Lab_documents | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Lab_documents], {
    nullable: false
  })
  async findManyLab_documents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyLab_documentsArgs): Promise<Lab_documents[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Lab_documents, {
    nullable: true
  })
  async findUniqueLab_documents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLab_documentsArgs): Promise<Lab_documents | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Lab_documents, {
    nullable: true
  })
  async findUniqueLab_documentsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLab_documentsOrThrowArgs): Promise<Lab_documents | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Lab_documentsGroupBy], {
    nullable: false
  })
  async groupByLab_documents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLab_documentsArgs): Promise<Lab_documentsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyLab_documents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyLab_documentsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Lab_documents, {
    nullable: true
  })
  async updateOneLab_documents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneLab_documentsArgs): Promise<Lab_documents | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Lab_documents, {
    nullable: false
  })
  async upsertOneLab_documents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneLab_documentsArgs): Promise<Lab_documents> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
