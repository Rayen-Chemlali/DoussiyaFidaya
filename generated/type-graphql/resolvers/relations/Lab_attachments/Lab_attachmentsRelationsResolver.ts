import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Lab_attachments } from "../../../models/Lab_attachments";
import { Lab_documents } from "../../../models/Lab_documents";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_attachments)
export class Lab_attachmentsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Lab_documents, {
    nullable: false
  })
  async lab_documents(@TypeGraphQL.Root() lab_attachments: Lab_attachments, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Lab_documents> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_attachments.findUniqueOrThrow({
      where: {
        id: lab_attachments.id,
      },
    }).lab_documents({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
