import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateNestedOneWithoutRdvsInput } from "../inputs/ConsultationsCreateNestedOneWithoutRdvsInput";
import { DoctorsCreateNestedOneWithoutRdvsInput } from "../inputs/DoctorsCreateNestedOneWithoutRdvsInput";
import { PatientsCreateNestedOneWithoutRdvsInput } from "../inputs/PatientsCreateNestedOneWithoutRdvsInput";
import { Rdv_requestsCreateNestedOneWithoutRdvs_rdv_requests_rdv_idTordvsInput } from "../inputs/Rdv_requestsCreateNestedOneWithoutRdvs_rdv_requests_rdv_idTordvsInput";

@TypeGraphQL.InputType("RdvsCreateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput", {})
export class RdvsCreateWithoutRdv_requests_rdvs_rdv_request_idTordv_requestsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  time!: Date;

  @TypeGraphQL.Field(_type => Rdv_requestsCreateNestedOneWithoutRdvs_rdv_requests_rdv_idTordvsInput, {
    nullable: true
  })
  rdv_requests_rdv_requests_rdv_idTordvs?: Rdv_requestsCreateNestedOneWithoutRdvs_rdv_requests_rdv_idTordvsInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsCreateNestedOneWithoutRdvsInput, {
    nullable: true
  })
  consultations?: ConsultationsCreateNestedOneWithoutRdvsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateNestedOneWithoutRdvsInput, {
    nullable: false
  })
  patients!: PatientsCreateNestedOneWithoutRdvsInput;

  @TypeGraphQL.Field(_type => DoctorsCreateNestedOneWithoutRdvsInput, {
    nullable: true
  })
  doctors?: DoctorsCreateNestedOneWithoutRdvsInput | undefined;
}
