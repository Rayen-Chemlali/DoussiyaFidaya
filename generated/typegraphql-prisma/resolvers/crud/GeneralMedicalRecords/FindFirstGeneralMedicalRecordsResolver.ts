import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstGeneralMedicalRecordsArgs } from "./args/FindFirstGeneralMedicalRecordsArgs";
import { GeneralMedicalRecords } from "../../../models/GeneralMedicalRecords";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GeneralMedicalRecords)
export class FindFirstGeneralMedicalRecordsResolver {
  @TypeGraphQL.Query(_returns => GeneralMedicalRecords, {
    nullable: true
  })
  async findFirstGeneralMedicalRecords(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGeneralMedicalRecordsArgs): Promise<GeneralMedicalRecords | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
