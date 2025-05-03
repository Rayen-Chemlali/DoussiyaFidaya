import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLab_documentsOrThrowArgs } from "./args/FindFirstLab_documentsOrThrowArgs";
import { Lab_documents } from "../../../models/Lab_documents";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_documents)
export class FindFirstLab_documentsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Lab_documents, {
    nullable: true
  })
  async findFirstLab_documentsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLab_documentsOrThrowArgs): Promise<Lab_documents | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
