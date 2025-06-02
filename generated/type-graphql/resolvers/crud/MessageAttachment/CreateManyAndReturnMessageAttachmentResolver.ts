import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMessageAttachmentArgs } from "./args/CreateManyAndReturnMessageAttachmentArgs";
import { MessageAttachment } from "../../../models/MessageAttachment";
import { CreateManyAndReturnMessageAttachment } from "../../outputs/CreateManyAndReturnMessageAttachment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MessageAttachment)
export class CreateManyAndReturnMessageAttachmentResolver {
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
}
