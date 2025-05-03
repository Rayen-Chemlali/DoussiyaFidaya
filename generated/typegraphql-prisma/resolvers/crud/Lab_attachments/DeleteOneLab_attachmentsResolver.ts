import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneLab_attachmentsArgs } from "./args/DeleteOneLab_attachmentsArgs";
import { Lab_attachments } from "../../../models/Lab_attachments";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_attachments)
export class DeleteOneLab_attachmentsResolver {
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
}
