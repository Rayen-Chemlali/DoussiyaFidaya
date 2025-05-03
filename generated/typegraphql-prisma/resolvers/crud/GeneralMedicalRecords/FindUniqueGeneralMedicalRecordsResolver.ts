import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueGeneralMedicalRecordsArgs } from "./args/FindUniqueGeneralMedicalRecordsArgs";
import { GeneralMedicalRecords } from "../../../models/GeneralMedicalRecords";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GeneralMedicalRecords)
export class FindUniqueGeneralMedicalRecordsResolver {
  @TypeGraphQL.Query(_returns => GeneralMedicalRecords, {
    nullable: true
  })
  async findUniqueGeneralMedicalRecords(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGeneralMedicalRecordsArgs): Promise<GeneralMedicalRecords | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
