import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnLab_attachmentsArgs } from "./args/CreateManyAndReturnLab_attachmentsArgs";
import { Lab_attachments } from "../../../models/Lab_attachments";
import { CreateManyAndReturnLab_attachments } from "../../outputs/CreateManyAndReturnLab_attachments";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_attachments)
export class CreateManyAndReturnLab_attachmentsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLab_attachments], {
    nullable: false
  })
  async createManyAndReturnLab_attachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnLab_attachmentsArgs): Promise<CreateManyAndReturnLab_attachments[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_attachments.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
