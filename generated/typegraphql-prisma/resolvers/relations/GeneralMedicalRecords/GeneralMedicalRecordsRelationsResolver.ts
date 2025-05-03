import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GeneralMedicalRecords } from "../../../models/GeneralMedicalRecords";
import { Patients } from "../../../models/Patients";
import { GeneralMedicalRecordsPatients_patients_general_medical_record_idToGeneralMedicalRecordsArgs } from "./args/GeneralMedicalRecordsPatients_patients_general_medical_record_idToGeneralMedicalRecordsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GeneralMedicalRecords)
export class GeneralMedicalRecordsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Patients, {
    nullable: false
  })
  async patients_GeneralMedicalRecords_patient_idTopatients(@TypeGraphQL.Root() generalMedicalRecords: GeneralMedicalRecords, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Patients> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.findUniqueOrThrow({
      where: {
        id: generalMedicalRecords.id,
      },
    }).patients_GeneralMedicalRecords_patient_idTopatients({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Patients, {
    nullable: true
  })
  async patients_patients_general_medical_record_idToGeneralMedicalRecords(@TypeGraphQL.Root() generalMedicalRecords: GeneralMedicalRecords, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GeneralMedicalRecordsPatients_patients_general_medical_record_idToGeneralMedicalRecordsArgs): Promise<Patients | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generalMedicalRecords.findUniqueOrThrow({
      where: {
        id: generalMedicalRecords.id,
      },
    }).patients_patients_general_medical_record_idToGeneralMedicalRecords({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
