import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Medications } from "../../../models/Medications";
import { Prescriptions } from "../../../models/Prescriptions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Medications)
export class MedicationsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Prescriptions, {
    nullable: false
  })
  async prescriptions(@TypeGraphQL.Root() medications: Medications, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Prescriptions> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).medications.findUniqueOrThrow({
      where: {
        id: medications.id,
      },
    }).prescriptions({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
