import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAuthorizationsArgs } from "./args/AggregateAuthorizationsArgs";
import { CreateManyAndReturnAuthorizationsArgs } from "./args/CreateManyAndReturnAuthorizationsArgs";
import { CreateManyAuthorizationsArgs } from "./args/CreateManyAuthorizationsArgs";
import { CreateOneAuthorizationsArgs } from "./args/CreateOneAuthorizationsArgs";
import { DeleteManyAuthorizationsArgs } from "./args/DeleteManyAuthorizationsArgs";
import { DeleteOneAuthorizationsArgs } from "./args/DeleteOneAuthorizationsArgs";
import { FindFirstAuthorizationsArgs } from "./args/FindFirstAuthorizationsArgs";
import { FindFirstAuthorizationsOrThrowArgs } from "./args/FindFirstAuthorizationsOrThrowArgs";
import { FindManyAuthorizationsArgs } from "./args/FindManyAuthorizationsArgs";
import { FindUniqueAuthorizationsArgs } from "./args/FindUniqueAuthorizationsArgs";
import { FindUniqueAuthorizationsOrThrowArgs } from "./args/FindUniqueAuthorizationsOrThrowArgs";
import { GroupByAuthorizationsArgs } from "./args/GroupByAuthorizationsArgs";
import { UpdateManyAuthorizationsArgs } from "./args/UpdateManyAuthorizationsArgs";
import { UpdateOneAuthorizationsArgs } from "./args/UpdateOneAuthorizationsArgs";
import { UpsertOneAuthorizationsArgs } from "./args/UpsertOneAuthorizationsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Authorizations } from "../../../models/Authorizations";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAuthorizations } from "../../outputs/AggregateAuthorizations";
import { AuthorizationsGroupBy } from "../../outputs/AuthorizationsGroupBy";
import { CreateManyAndReturnAuthorizations } from "../../outputs/CreateManyAndReturnAuthorizations";

@TypeGraphQL.Resolver(_of => Authorizations)
export class AuthorizationsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateAuthorizations, {
    nullable: false
  })
  async aggregateAuthorizations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAuthorizationsArgs): Promise<AggregateAuthorizations> {
    return getPrismaFromContext(ctx).authorizations.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyAuthorizations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAuthorizationsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).authorizations.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnAuthorizations], {
    nullable: false
  })
  async createManyAndReturnAuthorizations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnAuthorizationsArgs): Promise<CreateManyAndReturnAuthorizations[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).authorizations.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Authorizations, {
    nullable: false
  })
  async createOneAuthorizations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneAuthorizationsArgs): Promise<Authorizations> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).authorizations.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAuthorizations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyAuthorizationsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).authorizations.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Authorizations, {
    nullable: true
  })
  async deleteOneAuthorizations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneAuthorizationsArgs): Promise<Authorizations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).authorizations.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Authorizations, {
    nullable: true
  })
  async findFirstAuthorizations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAuthorizationsArgs): Promise<Authorizations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).authorizations.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Authorizations, {
    nullable: true
  })
  async findFirstAuthorizationsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAuthorizationsOrThrowArgs): Promise<Authorizations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).authorizations.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Authorizations], {
    nullable: false
  })
  async findManyAuthorizations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyAuthorizationsArgs): Promise<Authorizations[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).authorizations.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Authorizations, {
    nullable: true
  })
  async findUniqueAuthorizations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAuthorizationsArgs): Promise<Authorizations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).authorizations.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Authorizations, {
    nullable: true
  })
  async findUniqueAuthorizationsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAuthorizationsOrThrowArgs): Promise<Authorizations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).authorizations.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [AuthorizationsGroupBy], {
    nullable: false
  })
  async groupByAuthorizations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAuthorizationsArgs): Promise<AuthorizationsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).authorizations.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAuthorizations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyAuthorizationsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).authorizations.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Authorizations, {
    nullable: true
  })
  async updateOneAuthorizations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneAuthorizationsArgs): Promise<Authorizations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).authorizations.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Authorizations, {
    nullable: false
  })
  async upsertOneAuthorizations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneAuthorizationsArgs): Promise<Authorizations> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).authorizations.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
