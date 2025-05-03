import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CertificatesCreateNestedManyWithoutDoctorsInput } from "../inputs/CertificatesCreateNestedManyWithoutDoctorsInput";
import { Doctor_institutsCreateNestedManyWithoutDoctorsInput } from "../inputs/Doctor_institutsCreateNestedManyWithoutDoctorsInput";
import { DoctorsCreateeducationInput } from "../inputs/DoctorsCreateeducationInput";
import { DoctorsCreateexperienceInput } from "../inputs/DoctorsCreateexperienceInput";
import { DoctorsCreatelanguagesInput } from "../inputs/DoctorsCreatelanguagesInput";
import { Lab_requestsCreateNestedManyWithoutDoctorsInput } from "../inputs/Lab_requestsCreateNestedManyWithoutDoctorsInput";
import { PrescriptionsCreateNestedManyWithoutDoctorsInput } from "../inputs/PrescriptionsCreateNestedManyWithoutDoctorsInput";
import { Rdv_requestsCreateNestedManyWithoutDoctorsInput } from "../inputs/Rdv_requestsCreateNestedManyWithoutDoctorsInput";
import { RdvsCreateNestedManyWithoutDoctorsInput } from "../inputs/RdvsCreateNestedManyWithoutDoctorsInput";
import { UsersCreateNestedOneWithoutDoctorsInput } from "../inputs/UsersCreateNestedOneWithoutDoctorsInput";
import { doctors_specialty_enum } from "../../enums/doctors_specialty_enum";
import { doctors_type_enum } from "../../enums/doctors_type_enum";

@TypeGraphQL.InputType("DoctorsCreateWithoutConsultationsInput", {})
export class DoctorsCreateWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => doctors_type_enum, {
    nullable: false
  })
  type!: "doctor" | "clinique" | "hopital";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio?: string | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateeducationInput, {
    nullable: true
  })
  education?: DoctorsCreateeducationInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateexperienceInput, {
    nullable: true
  })
  experience?: DoctorsCreateexperienceInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => DoctorsCreatelanguagesInput, {
    nullable: true
  })
  languages?: DoctorsCreatelanguagesInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profile_image?: string | undefined;

  @TypeGraphQL.Field(_type => doctors_specialty_enum, {
    nullable: false
  })
  specialty!: "generaliste" | "cardiologue" | "dermatologue" | "gynecologue" | "pediatre" | "orthopediste" | "psychiatre" | "ophtalmologue" | "otorhinolaryngologue" | "neurologue" | "urologue" | "endocrinologue" | "gastroenterologue" | "rheumatologue" | "anesthesiste" | "radiologue" | "oncologue" | "chirurgien" | "nutritionniste" | "physiotherapeute" | "psychologue" | "sexologue" | "geriatre" | "allergologue" | "hematologue" | "nephrologue" | "pneumologue" | "dentiste" | "orthodontiste" | "autre";

  @TypeGraphQL.Field(_type => CertificatesCreateNestedManyWithoutDoctorsInput, {
    nullable: true
  })
  certificates?: CertificatesCreateNestedManyWithoutDoctorsInput | undefined;

  @TypeGraphQL.Field(_type => Doctor_institutsCreateNestedManyWithoutDoctorsInput, {
    nullable: true
  })
  doctor_instituts?: Doctor_institutsCreateNestedManyWithoutDoctorsInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateNestedOneWithoutDoctorsInput, {
    nullable: false
  })
  users!: UsersCreateNestedOneWithoutDoctorsInput;

  @TypeGraphQL.Field(_type => Lab_requestsCreateNestedManyWithoutDoctorsInput, {
    nullable: true
  })
  lab_requests?: Lab_requestsCreateNestedManyWithoutDoctorsInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsCreateNestedManyWithoutDoctorsInput, {
    nullable: true
  })
  prescriptions?: PrescriptionsCreateNestedManyWithoutDoctorsInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsCreateNestedManyWithoutDoctorsInput, {
    nullable: true
  })
  rdv_requests?: Rdv_requestsCreateNestedManyWithoutDoctorsInput | undefined;

  @TypeGraphQL.Field(_type => RdvsCreateNestedManyWithoutDoctorsInput, {
    nullable: true
  })
  rdvs?: RdvsCreateNestedManyWithoutDoctorsInput | undefined;
}
