import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateConsultation_lab_requestsArgs } from "./args/AggregateConsultation_lab_requestsArgs";
import { CreateManyAndReturnConsultation_lab_requestsArgs } from "./args/CreateManyAndReturnConsultation_lab_requestsArgs";
import { CreateManyConsultation_lab_requestsArgs } from "./args/CreateManyConsultation_lab_requestsArgs";
import { CreateOneConsultation_lab_requestsArgs } from "./args/CreateOneConsultation_lab_requestsArgs";
import { DeleteManyConsultation_lab_requestsArgs } from "./args/DeleteManyConsultation_lab_requestsArgs";
import { DeleteOneConsultation_lab_requestsArgs } from "./args/DeleteOneConsultation_lab_requestsArgs";
import { FindFirstConsultation_lab_requestsArgs } from "./args/FindFirstConsultation_lab_requestsArgs";
import { FindFirstConsultation_lab_requestsOrThrowArgs } from "./args/FindFirstConsultation_lab_requestsOrThrowArgs";
import { FindManyConsultation_lab_requestsArgs } from "./args/FindManyConsultation_lab_requestsArgs";
import { FindUniqueConsultation_lab_requestsArgs } from "./args/FindUniqueConsultation_lab_requestsArgs";
import { FindUniqueConsultation_lab_requestsOrThrowArgs } from "./args/FindUniqueConsultation_lab_requestsOrThrowArgs";
import { GroupByConsultation_lab_requestsArgs } from "./args/GroupByConsultation_lab_requestsArgs";
import { UpdateManyConsultation_lab_requestsArgs } from "./args/UpdateManyConsultation_lab_requestsArgs";
import { UpdateOneConsultation_lab_requestsArgs } from "./args/UpdateOneConsultation_lab_requestsArgs";
import { UpsertOneConsultation_lab_requestsArgs } from "./args/UpsertOneConsultation_lab_requestsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Consultation_lab_requests } from "../../../models/Consultation_lab_requests";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateConsultation_lab_requests } from "../../outputs/AggregateConsultation_lab_requests";
import { Consultation_lab_requestsGroupBy } from "../../outputs/Consultation_lab_requestsGroupBy";
import { CreateManyAndReturnConsultation_lab_requests } from "../../outputs/CreateManyAndReturnConsultation_lab_requests";

@TypeGraphQL.Resolver(_of => Consultation_lab_requests)
export class Consultation_lab_requestsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateConsultation_lab_requests, {
    nullable: false
  })
  async aggregateConsultation_lab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateConsultation_lab_requestsArgs): Promise<AggregateConsultation_lab_requests> {
    return getPrismaFromContext(ctx).consultation_lab_requests.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyConsultation_lab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyConsultation_lab_requestsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultation_lab_requests.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnConsultation_lab_requests], {
    nullable: false
  })
  async createManyAndReturnConsultation_lab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnConsultation_lab_requestsArgs): Promise<CreateManyAndReturnConsultation_lab_requests[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultation_lab_requests.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Consultation_lab_requests, {
    nullable: false
  })
  async createOneConsultation_lab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneConsultation_lab_requestsArgs): Promise<Consultation_lab_requests> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultation_lab_requests.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyConsultation_lab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyConsultation_lab_requestsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultation_lab_requests.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Consultation_lab_requests, {
    nullable: true
  })
  async deleteOneConsultation_lab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneConsultation_lab_requestsArgs): Promise<Consultation_lab_requests | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultation_lab_requests.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Consultation_lab_requests, {
    nullable: true
  })
  async findFirstConsultation_lab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstConsultation_lab_requestsArgs): Promise<Consultation_lab_requests | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultation_lab_requests.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Consultation_lab_requests, {
    nullable: true
  })
  async findFirstConsultation_lab_requestsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstConsultation_lab_requestsOrThrowArgs): Promise<Consultation_lab_requests | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultation_lab_requests.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Consultation_lab_requests], {
    nullable: false
  })
  async findManyConsultation_lab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyConsultation_lab_requestsArgs): Promise<Consultation_lab_requests[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultation_lab_requests.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Consultation_lab_requests, {
    nullable: true
  })
  async findUniqueConsultation_lab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueConsultation_lab_requestsArgs): Promise<Consultation_lab_requests | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultation_lab_requests.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Consultation_lab_requests, {
    nullable: true
  })
  async findUniqueConsultation_lab_requestsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueConsultation_lab_requestsOrThrowArgs): Promise<Consultation_lab_requests | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultation_lab_requests.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Consultation_lab_requestsGroupBy], {
    nullable: false
  })
  async groupByConsultation_lab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByConsultation_lab_requestsArgs): Promise<Consultation_lab_requestsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultation_lab_requests.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  // @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
  //   nullable: false
  // })
  // async updateManyConsultation_lab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyConsultation_lab_requestsArgs): Promise<AffectedRowsOutput> {
  //   const { _count } = transformInfoIntoPrismaArgs(info);
  //   return getPrismaFromContext(ctx).consultation_lab_requests.updateMany({
  //     ...args,
  //     ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
  //   });
  // }

  @TypeGraphQL.Mutation(_returns => Consultation_lab_requests, {
    nullable: true
  })
  async updateOneConsultation_lab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneConsultation_lab_requestsArgs): Promise<Consultation_lab_requests | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultation_lab_requests.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Consultation_lab_requests, {
    nullable: false
  })
  async upsertOneConsultation_lab_requests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneConsultation_lab_requestsArgs): Promise<Consultation_lab_requests> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultation_lab_requests.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
