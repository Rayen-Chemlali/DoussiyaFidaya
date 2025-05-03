import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Doctor_institutsWhereInput } from "../inputs/Doctor_institutsWhereInput";
import { DoctorsRelationFilter } from "../inputs/DoctorsRelationFilter";
import { Instituts_medicauxRelationFilter } from "../inputs/Instituts_medicauxRelationFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { doctor_institutsDoctor_idInstitut_medical_idCompoundUniqueInput } from "../inputs/doctor_institutsDoctor_idInstitut_medical_idCompoundUniqueInput";

@TypeGraphQL.InputType("Doctor_institutsWhereUniqueInput", {})
export class Doctor_institutsWhereUniqueInput {
  @TypeGraphQL.Field(_type => doctor_institutsDoctor_idInstitut_medical_idCompoundUniqueInput, {
    nullable: true
  })
  doctor_id_institut_medical_id?: doctor_institutsDoctor_idInstitut_medical_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsWhereInput], {
    nullable: true
  })
  AND?: Doctor_institutsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsWhereInput], {
    nullable: true
  })
  OR?: Doctor_institutsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsWhereInput], {
    nullable: true
  })
  NOT?: Doctor_institutsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  doctor_id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  institut_medical_id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => DoctorsRelationFilter, {
    nullable: true
  })
  doctors?: DoctorsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxRelationFilter, {
    nullable: true
  })
  instituts_medicaux?: Instituts_medicauxRelationFilter | undefined;
}
