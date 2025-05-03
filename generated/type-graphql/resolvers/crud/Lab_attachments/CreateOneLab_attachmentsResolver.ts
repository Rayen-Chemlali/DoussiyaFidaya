import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneLab_attachmentsArgs } from "./args/CreateOneLab_attachmentsArgs";
import { Lab_attachments } from "../../../models/Lab_attachments";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_attachments)
export class CreateOneLab_attachmentsResolver {
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
}
