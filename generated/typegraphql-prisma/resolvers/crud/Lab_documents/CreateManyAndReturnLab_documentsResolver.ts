import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnLab_documentsArgs } from "./args/CreateManyAndReturnLab_documentsArgs";
import { Lab_documents } from "../../../models/Lab_documents";
import { CreateManyAndReturnLab_documents } from "../../outputs/CreateManyAndReturnLab_documents";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_documents)
export class CreateManyAndReturnLab_documentsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLab_documents], {
    nullable: false
  })
  async createManyAndReturnLab_documents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnLab_documentsArgs): Promise<CreateManyAndReturnLab_documents[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
