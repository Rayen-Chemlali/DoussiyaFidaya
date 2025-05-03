import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnConsultationsArgs } from "./args/CreateManyAndReturnConsultationsArgs";
import { Consultations } from "../../../models/Consultations";
import { CreateManyAndReturnConsultations } from "../../outputs/CreateManyAndReturnConsultations";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Consultations)
export class CreateManyAndReturnConsultationsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnConsultations], {
    nullable: false
  })
  async createManyAndReturnConsultations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnConsultationsArgs): Promise<CreateManyAndReturnConsultations[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultations.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
