import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DoctorsUpdateOneWithoutRdv_requestsNestedInput } from "../inputs/DoctorsUpdateOneWithoutRdv_requestsNestedInput";
import { RdvsUpdateOneWithoutRdv_requests_rdv_requests_rdv_idTordvsNestedInput } from "../inputs/RdvsUpdateOneWithoutRdv_requests_rdv_requests_rdv_idTordvsNestedInput";
import { RdvsUpdateOneWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsNestedInput } from "../inputs/RdvsUpdateOneWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Rdv_requestsUpdateWithoutPatientsInput", {})
export class Rdv_requestsUpdateWithoutPatientsInput {
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

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Motif?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Status?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RdvsUpdateOneWithoutRdv_requests_rdv_requests_rdv_idTordvsNestedInput, {
    nullable: true
  })
  rdvs_rdv_requests_rdv_idTordvs?: RdvsUpdateOneWithoutRdv_requests_rdv_requests_rdv_idTordvsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateOneWithoutRdv_requestsNestedInput, {
    nullable: true
  })
  doctors?: DoctorsUpdateOneWithoutRdv_requestsNestedInput | undefined;

  @TypeGraphQL.Field(_type => RdvsUpdateOneWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsNestedInput, {
    nullable: true
  })
  rdvs_rdvs_rdv_request_idTordv_requests?: RdvsUpdateOneWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsNestedInput | undefined;
}
