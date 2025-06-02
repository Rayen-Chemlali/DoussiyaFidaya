import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Doctors } from "../../../models/Doctors";
import { Message } from "../../../models/Message";
import { MessageAttachment } from "../../../models/MessageAttachment";
import { MessageAttachmentsArgs } from "./args/MessageAttachmentsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Message)
export class MessageRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Doctors, {
    nullable: false
  })
  async sender(@TypeGraphQL.Root() message: Message, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Doctors> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).message.findUniqueOrThrow({
      where: {
        id: message.id,
      },
    }).sender({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Doctors, {
    nullable: false
  })
  async receiver(@TypeGraphQL.Root() message: Message, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Doctors> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).message.findUniqueOrThrow({
      where: {
        id: message.id,
      },
    }).receiver({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MessageAttachment], {
    nullable: false
  })
  async attachments(@TypeGraphQL.Root() message: Message, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MessageAttachmentsArgs): Promise<MessageAttachment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).message.findUniqueOrThrow({
      where: {
        id: message.id,
      },
    }).attachments({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
