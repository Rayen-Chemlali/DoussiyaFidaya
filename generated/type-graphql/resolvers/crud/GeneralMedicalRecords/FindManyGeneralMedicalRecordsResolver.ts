import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyGeneralMedicalRecordsArgs } from "./args/FindManyGeneralMedicalRecordsArgs";
import { GeneralMedicalRecords } from "../../../models/GeneralMedicalRecords";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GeneralMedicalRecords)
export class FindManyGeneralMedicalRecordsResolver {
  @TypeGraphQL.Query(_returns => [GeneralMedicalRecords], {
    nullable: false
  })
  async findManyGeneralMedicalRecords(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGeneralMedicalRecordsArgs): Promise<GeneralMedicalRecords[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
