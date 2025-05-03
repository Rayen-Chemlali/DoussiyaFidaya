import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLab_documentsArgs } from "./args/FindFirstLab_documentsArgs";
import { Lab_documents } from "../../../models/Lab_documents";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_documents)
export class FindFirstLab_documentsResolver {
  @TypeGraphQL.Query(_returns => Lab_documents, {
    nullable: true
  })
  async findFirstLab_documents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLab_documentsArgs): Promise<Lab_documents | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
