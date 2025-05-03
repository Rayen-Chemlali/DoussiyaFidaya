import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsUpdateOneWithoutRdvsNestedInput } from "../inputs/ConsultationsUpdateOneWithoutRdvsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DoctorsUpdateOneWithoutRdvsNestedInput } from "../inputs/DoctorsUpdateOneWithoutRdvsNestedInput";
import { PatientsUpdateOneRequiredWithoutRdvsNestedInput } from "../inputs/PatientsUpdateOneRequiredWithoutRdvsNestedInput";
import { Rdv_requestsUpdateOneWithoutRdvs_rdv_requests_rdv_idTordvsNestedInput } from "../inputs/Rdv_requestsUpdateOneWithoutRdvs_rdv_requests_rdv_idTordvsNestedInput";
import { Rdv_requestsUpdateOneWithoutRdvs_rdvs_rdv_request_idTordv_requestsNestedInput } from "../inputs/Rdv_requestsUpdateOneWithoutRdvs_rdvs_rdv_request_idTordv_requestsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("RdvsUpdateInput", {})
export class RdvsUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  time?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsUpdateOneWithoutRdvs_rdv_requests_rdv_idTordvsNestedInput, {
    nullable: true
  })
  rdv_requests_rdv_requests_rdv_idTordvs?: Rdv_requestsUpdateOneWithoutRdvs_rdv_requests_rdv_idTordvsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsUpdateOneWithoutRdvsNestedInput, {
    nullable: true
  })
  consultations?: ConsultationsUpdateOneWithoutRdvsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateOneRequiredWithoutRdvsNestedInput, {
    nullable: true
  })
  patients?: PatientsUpdateOneRequiredWithoutRdvsNestedInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsUpdateOneWithoutRdvs_rdvs_rdv_request_idTordv_requestsNestedInput, {
    nullable: true
  })
  rdv_requests_rdvs_rdv_request_idTordv_requests?: Rdv_requestsUpdateOneWithoutRdvs_rdvs_rdv_request_idTordv_requestsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateOneWithoutRdvsNestedInput, {
    nullable: true
  })
  doctors?: DoctorsUpdateOneWithoutRdvsNestedInput | undefined;
}
