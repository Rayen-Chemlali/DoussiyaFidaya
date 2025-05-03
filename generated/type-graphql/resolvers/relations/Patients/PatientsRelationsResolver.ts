import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Authorizations } from "../../../models/Authorizations";
import { Certificates } from "../../../models/Certificates";
import { Consultations } from "../../../models/Consultations";
import { GeneralMedicalRecords } from "../../../models/GeneralMedicalRecords";
import { Lab_documents } from "../../../models/Lab_documents";
import { Lab_requests } from "../../../models/Lab_requests";
import { Patients } from "../../../models/Patients";
import { Prescriptions } from "../../../models/Prescriptions";
import { Rdv_requests } from "../../../models/Rdv_requests";
import { Rdvs } from "../../../models/Rdvs";
import { Users } from "../../../models/Users";
import { PatientsAuthorizationsArgs } from "./args/PatientsAuthorizationsArgs";
import { PatientsCertificatesArgs } from "./args/PatientsCertificatesArgs";
import { PatientsConsultationsArgs } from "./args/PatientsConsultationsArgs";
import { PatientsGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsArgs } from "./args/PatientsGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsArgs";
import { PatientsGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsArgs } from "./args/PatientsGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsArgs";
import { PatientsLab_documentsArgs } from "./args/PatientsLab_documentsArgs";
import { PatientsLab_requestsArgs } from "./args/PatientsLab_requestsArgs";
import { PatientsPrescriptionsArgs } from "./args/PatientsPrescriptionsArgs";
import { PatientsRdv_requestsArgs } from "./args/PatientsRdv_requestsArgs";
import { PatientsRdvsArgs } from "./args/PatientsRdvsArgs";
import { PatientsUsersArgs } from "./args/PatientsUsersArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Patients)
export class PatientsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => GeneralMedicalRecords, {
    nullable: true
  })
  async GeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatients(@TypeGraphQL.Root() patients: Patients, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PatientsGeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatientsArgs): Promise<GeneralMedicalRecords | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patients.findUniqueOrThrow({
      where: {
        id: patients.id,
      },
    }).GeneralMedicalRecords_GeneralMedicalRecords_patient_idTopatients({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Authorizations], {
    nullable: false
  })
  async authorizations(@TypeGraphQL.Root() patients: Patients, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PatientsAuthorizationsArgs): Promise<Authorizations[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patients.findUniqueOrThrow({
      where: {
        id: patients.id,
      },
    }).authorizations({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Certificates], {
    nullable: false
  })
  async certificates(@TypeGraphQL.Root() patients: Patients, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PatientsCertificatesArgs): Promise<Certificates[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patients.findUniqueOrThrow({
      where: {
        id: patients.id,
      },
    }).certificates({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Consultations], {
    nullable: false
  })
  async consultations(@TypeGraphQL.Root() patients: Patients, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PatientsConsultationsArgs): Promise<Consultations[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patients.findUniqueOrThrow({
      where: {
        id: patients.id,
      },
    }).consultations({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Lab_documents], {
    nullable: false
  })
  async lab_documents(@TypeGraphQL.Root() patients: Patients, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PatientsLab_documentsArgs): Promise<Lab_documents[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patients.findUniqueOrThrow({
      where: {
        id: patients.id,
      },
    }).lab_documents({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Lab_requests], {
    nullable: false
  })
  async lab_requests(@TypeGraphQL.Root() patients: Patients, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PatientsLab_requestsArgs): Promise<Lab_requests[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patients.findUniqueOrThrow({
      where: {
        id: patients.id,
      },
    }).lab_requests({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Users, {
    nullable: true
  })
  async users(@TypeGraphQL.Root() patients: Patients, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PatientsUsersArgs): Promise<Users | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patients.findUniqueOrThrow({
      where: {
        id: patients.id,
      },
    }).users({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => GeneralMedicalRecords, {
    nullable: true
  })
  async GeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecords(@TypeGraphQL.Root() patients: Patients, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PatientsGeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecordsArgs): Promise<GeneralMedicalRecords | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patients.findUniqueOrThrow({
      where: {
        id: patients.id,
      },
    }).GeneralMedicalRecords_patients_general_medical_record_idToGeneralMedicalRecords({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Prescriptions], {
    nullable: false
  })
  async prescriptions(@TypeGraphQL.Root() patients: Patients, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PatientsPrescriptionsArgs): Promise<Prescriptions[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patients.findUniqueOrThrow({
      where: {
        id: patients.id,
      },
    }).prescriptions({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Rdv_requests], {
    nullable: false
  })
  async rdv_requests(@TypeGraphQL.Root() patients: Patients, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PatientsRdv_requestsArgs): Promise<Rdv_requests[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patients.findUniqueOrThrow({
      where: {
        id: patients.id,
      },
    }).rdv_requests({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Rdvs], {
    nullable: false
  })
  async rdvs(@TypeGraphQL.Root() patients: Patients, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PatientsRdvsArgs): Promise<Rdvs[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patients.findUniqueOrThrow({
      where: {
        id: patients.id,
      },
    }).rdvs({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
