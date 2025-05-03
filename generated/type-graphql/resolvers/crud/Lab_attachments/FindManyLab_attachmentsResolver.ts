import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyLab_attachmentsArgs } from "./args/FindManyLab_attachmentsArgs";
import { Lab_attachments } from "../../../models/Lab_attachments";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_attachments)
export class FindManyLab_attachmentsResolver {
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
}
