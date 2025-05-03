import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateGeneralMedicalRecordsArgs } from "./args/AggregateGeneralMedicalRecordsArgs";
import { GeneralMedicalRecords } from "../../../models/GeneralMedicalRecords";
import { AggregateGeneralMedicalRecords } from "../../outputs/AggregateGeneralMedicalRecords";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GeneralMedicalRecords)
export class AggregateGeneralMedicalRecordsResolver {
  @TypeGraphQL.Query(_returns => AggregateGeneralMedicalRecords, {
    nullable: false
  })
  async aggregateGeneralMedicalRecords(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGeneralMedicalRecordsArgs): Promise<AggregateGeneralMedicalRecords> {
    return getPrismaFromContext(ctx).generalMedicalRecords.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
