import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMessageAttachmentArgs } from "./args/AggregateMessageAttachmentArgs";
import { CreateManyAndReturnMessageAttachmentArgs } from "./args/CreateManyAndReturnMessageAttachmentArgs";
import { CreateManyMessageAttachmentArgs } from "./args/CreateManyMessageAttachmentArgs";
import { CreateOneMessageAttachmentArgs } from "./args/CreateOneMessageAttachmentArgs";
import { DeleteManyMessageAttachmentArgs } from "./args/DeleteManyMessageAttachmentArgs";
import { DeleteOneMessageAttachmentArgs } from "./args/DeleteOneMessageAttachmentArgs";
import { FindFirstMessageAttachmentArgs } from "./args/FindFirstMessageAttachmentArgs";
import { FindFirstMessageAttachmentOrThrowArgs } from "./args/FindFirstMessageAttachmentOrThrowArgs";
import { FindManyMessageAttachmentArgs } from "./args/FindManyMessageAttachmentArgs";
import { FindUniqueMessageAttachmentArgs } from "./args/FindUniqueMessageAttachmentArgs";
import { FindUniqueMessageAttachmentOrThrowArgs } from "./args/FindUniqueMessageAttachmentOrThrowArgs";
import { GroupByMessageAttachmentArgs } from "./args/GroupByMessageAttachmentArgs";
import { UpdateManyMessageAttachmentArgs } from "./args/UpdateManyMessageAttachmentArgs";
import { UpdateOneMessageAttachmentArgs } from "./args/UpdateOneMessageAttachmentArgs";
import { UpsertOneMessageAttachmentArgs } from "./args/UpsertOneMessageAttachmentArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MessageAttachment } from "../../../models/MessageAttachment";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMessageAttachment } from "../../outputs/AggregateMessageAttachment";
import { CreateManyAndReturnMessageAttachment } from "../../outputs/CreateManyAndReturnMessageAttachment";
import { MessageAttachmentGroupBy } from "../../outputs/MessageAttachmentGroupBy";

@TypeGraphQL.Resolver(_of => MessageAttachment)
export class MessageAttachmentCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMessageAttachment, {
    nullable: false
  })
  async aggregateMessageAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMessageAttachmentArgs): Promise<AggregateMessageAttachment> {
    return getPrismaFromContext(ctx).messageAttachment.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMessageAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyMessageAttachmentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMessageAttachment], {
    nullable: false
  })
  async createManyAndReturnMessageAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMessageAttachmentArgs): Promise<CreateManyAndReturnMessageAttachment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MessageAttachment, {
    nullable: false
  })
  async createOneMessageAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneMessageAttachmentArgs): Promise<MessageAttachment> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMessageAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyMessageAttachmentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MessageAttachment, {
    nullable: true
  })
  async deleteOneMessageAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMessageAttachmentArgs): Promise<MessageAttachment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MessageAttachment, {
    nullable: true
  })
  async findFirstMessageAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMessageAttachmentArgs): Promise<MessageAttachment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MessageAttachment, {
    nullable: true
  })
  async findFirstMessageAttachmentOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMessageAttachmentOrThrowArgs): Promise<MessageAttachment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MessageAttachment], {
    nullable: false
  })
  async messageAttachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMessageAttachmentArgs): Promise<MessageAttachment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MessageAttachment, {
    nullable: true
  })
  async messageAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMessageAttachmentArgs): Promise<MessageAttachment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MessageAttachment, {
    nullable: true
  })
  async getMessageAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMessageAttachmentOrThrowArgs): Promise<MessageAttachment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MessageAttachmentGroupBy], {
    nullable: false
  })
  async groupByMessageAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMessageAttachmentArgs): Promise<MessageAttachmentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMessageAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyMessageAttachmentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MessageAttachment, {
    nullable: true
  })
  async updateOneMessageAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMessageAttachmentArgs): Promise<MessageAttachment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MessageAttachment, {
    nullable: false
  })
  async upsertOneMessageAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMessageAttachmentArgs): Promise<MessageAttachment> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).messageAttachment.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
