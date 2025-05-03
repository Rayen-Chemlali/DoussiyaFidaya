import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnGeneralMedicalRecordsArgs } from "./args/CreateManyAndReturnGeneralMedicalRecordsArgs";
import { GeneralMedicalRecords } from "../../../models/GeneralMedicalRecords";
import { CreateManyAndReturnGeneralMedicalRecords } from "../../outputs/CreateManyAndReturnGeneralMedicalRecords";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GeneralMedicalRecords)
export class CreateManyAndReturnGeneralMedicalRecordsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnGeneralMedicalRecords], {
    nullable: false
  })
  async createManyAndReturnGeneralMedicalRecords(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnGeneralMedicalRecordsArgs): Promise<CreateManyAndReturnGeneralMedicalRecords[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
