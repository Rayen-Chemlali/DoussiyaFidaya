import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Lab_documents } from "../../../models/Lab_documents";
import { Laboratories } from "../../../models/Laboratories";
import { LaboratoriesLab_documentsArgs } from "./args/LaboratoriesLab_documentsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Laboratories)
export class LaboratoriesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Lab_documents], {
    nullable: false
  })
  async lab_documents(@TypeGraphQL.Root() laboratories: Laboratories, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LaboratoriesLab_documentsArgs): Promise<Lab_documents[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).laboratories.findUniqueOrThrow({
      where: {
        id: laboratories.id,
      },
    }).lab_documents({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
