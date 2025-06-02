import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CertificatesUpdateManyWithoutDoctorsNestedInput } from "../inputs/CertificatesUpdateManyWithoutDoctorsNestedInput";
import { ConsultationsUpdateManyWithoutDoctorsNestedInput } from "../inputs/ConsultationsUpdateManyWithoutDoctorsNestedInput";
import { DoctorsUpdateeducationInput } from "../inputs/DoctorsUpdateeducationInput";
import { DoctorsUpdateexperienceInput } from "../inputs/DoctorsUpdateexperienceInput";
import { DoctorsUpdatelanguagesInput } from "../inputs/DoctorsUpdatelanguagesInput";
import { Enumdoctors_specialty_enumFieldUpdateOperationsInput } from "../inputs/Enumdoctors_specialty_enumFieldUpdateOperationsInput";
import { Enumdoctors_type_enumFieldUpdateOperationsInput } from "../inputs/Enumdoctors_type_enumFieldUpdateOperationsInput";
import { Instituts_medicauxUpdateManyWithoutDoctorsNestedInput } from "../inputs/Instituts_medicauxUpdateManyWithoutDoctorsNestedInput";
import { Lab_requestsUpdateManyWithoutDoctorsNestedInput } from "../inputs/Lab_requestsUpdateManyWithoutDoctorsNestedInput";
import { MessageUpdateManyWithoutReceiverNestedInput } from "../inputs/MessageUpdateManyWithoutReceiverNestedInput";
import { MessageUpdateManyWithoutSenderNestedInput } from "../inputs/MessageUpdateManyWithoutSenderNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PrescriptionsUpdateManyWithoutDoctorsNestedInput } from "../inputs/PrescriptionsUpdateManyWithoutDoctorsNestedInput";
import { RdvsUpdateManyWithoutDoctorsNestedInput } from "../inputs/RdvsUpdateManyWithoutDoctorsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsersUpdateOneRequiredWithoutDoctorsNestedInput } from "../inputs/UsersUpdateOneRequiredWithoutDoctorsNestedInput";

@TypeGraphQL.InputType("DoctorsUpdateWithoutRdv_requestsInput", {})
export class DoctorsUpdateWithoutRdv_requestsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Enumdoctors_type_enumFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: Enumdoctors_type_enumFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  is_license_verified?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  bio?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateeducationInput, {
    nullable: true
  })
  education?: DoctorsUpdateeducationInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateexperienceInput, {
    nullable: true
  })
  experience?: DoctorsUpdateexperienceInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  first_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdatelanguagesInput, {
    nullable: true
  })
  languages?: DoctorsUpdatelanguagesInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  last_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  profile_image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Enumdoctors_specialty_enumFieldUpdateOperationsInput, {
    nullable: true
  })
  specialty?: Enumdoctors_specialty_enumFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CertificatesUpdateManyWithoutDoctorsNestedInput, {
    nullable: true
  })
  certificates?: CertificatesUpdateManyWithoutDoctorsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsUpdateManyWithoutDoctorsNestedInput, {
    nullable: true
  })
  consultations?: ConsultationsUpdateManyWithoutDoctorsNestedInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateOneRequiredWithoutDoctorsNestedInput, {
    nullable: true
  })
  users?: UsersUpdateOneRequiredWithoutDoctorsNestedInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsUpdateManyWithoutDoctorsNestedInput, {
    nullable: true
  })
  lab_requests?: Lab_requestsUpdateManyWithoutDoctorsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsUpdateManyWithoutDoctorsNestedInput, {
    nullable: true
  })
  prescriptions?: PrescriptionsUpdateManyWithoutDoctorsNestedInput | undefined;

  @TypeGraphQL.Field(_type => RdvsUpdateManyWithoutDoctorsNestedInput, {
    nullable: true
  })
  rdvs?: RdvsUpdateManyWithoutDoctorsNestedInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateManyWithoutSenderNestedInput, {
    nullable: true
  })
  sentMessages?: MessageUpdateManyWithoutSenderNestedInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateManyWithoutReceiverNestedInput, {
    nullable: true
  })
  receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxUpdateManyWithoutDoctorsNestedInput, {
    nullable: true
  })
  instituts?: Instituts_medicauxUpdateManyWithoutDoctorsNestedInput | undefined;
}
