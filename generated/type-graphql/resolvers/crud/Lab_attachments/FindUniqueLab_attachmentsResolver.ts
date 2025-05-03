import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLab_attachmentsArgs } from "./args/FindUniqueLab_attachmentsArgs";
import { Lab_attachments } from "../../../models/Lab_attachments";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_attachments)
export class FindUniqueLab_attachmentsResolver {
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
}
