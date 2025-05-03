import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstGeneralMedicalRecordsOrThrowArgs } from "./args/FindFirstGeneralMedicalRecordsOrThrowArgs";
import { GeneralMedicalRecords } from "../../../models/GeneralMedicalRecords";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GeneralMedicalRecords)
export class FindFirstGeneralMedicalRecordsOrThrowResolver {
  @TypeGraphQL.Query(_returns => GeneralMedicalRecords, {
    nullable: true
  })
  async findFirstGeneralMedicalRecordsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGeneralMedicalRecordsOrThrowArgs): Promise<GeneralMedicalRecords | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
