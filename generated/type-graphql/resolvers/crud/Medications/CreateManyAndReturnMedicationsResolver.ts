import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMedicationsArgs } from "./args/CreateManyAndReturnMedicationsArgs";
import { Medications } from "../../../models/Medications";
import { CreateManyAndReturnMedications } from "../../outputs/CreateManyAndReturnMedications";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Medications)
export class CreateManyAndReturnMedicationsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMedications], {
    nullable: false
  })
  async createManyAndReturnMedications(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMedicationsArgs): Promise<CreateManyAndReturnMedications[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).medications.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
