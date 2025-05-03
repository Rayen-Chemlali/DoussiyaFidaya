import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLab_attachmentsOrThrowArgs } from "./args/FindUniqueLab_attachmentsOrThrowArgs";
import { Lab_attachments } from "../../../models/Lab_attachments";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_attachments)
export class FindUniqueLab_attachmentsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Lab_attachments, {
    nullable: true
  })
  async findUniqueLab_attachmentsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLab_attachmentsOrThrowArgs): Promise<Lab_attachments | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_attachments.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
