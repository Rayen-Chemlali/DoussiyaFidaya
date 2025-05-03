import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMedicationsOrThrowArgs } from "./args/FindUniqueMedicationsOrThrowArgs";
import { Medications } from "../../../models/Medications";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Medications)
export class FindUniqueMedicationsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Medications, {
    nullable: true
  })
  async findUniqueMedicationsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMedicationsOrThrowArgs): Promise<Medications | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).medications.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
