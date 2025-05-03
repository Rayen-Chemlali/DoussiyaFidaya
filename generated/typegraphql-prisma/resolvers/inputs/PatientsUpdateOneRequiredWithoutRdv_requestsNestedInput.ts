import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateOrConnectWithoutRdv_requestsInput } from "../inputs/PatientsCreateOrConnectWithoutRdv_requestsInput";
import { PatientsCreateWithoutRdv_requestsInput } from "../inputs/PatientsCreateWithoutRdv_requestsInput";
import { PatientsUpdateToOneWithWhereWithoutRdv_requestsInput } from "../inputs/PatientsUpdateToOneWithWhereWithoutRdv_requestsInput";
import { PatientsUpsertWithoutRdv_requestsInput } from "../inputs/PatientsUpsertWithoutRdv_requestsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsUpdateOneRequiredWithoutRdv_requestsNestedInput", {})
export class PatientsUpdateOneRequiredWithoutRdv_requestsNestedInput {
  @TypeGraphQL.Field(_type => PatientsCreateWithoutRdv_requestsInput, {
    nullable: true
  })
  create?: PatientsCreateWithoutRdv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateOrConnectWithoutRdv_requestsInput, {
    nullable: true
  })
  connectOrCreate?: PatientsCreateOrConnectWithoutRdv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpsertWithoutRdv_requestsInput, {
    nullable: true
  })
  upsert?: PatientsUpsertWithoutRdv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateToOneWithWhereWithoutRdv_requestsInput, {
    nullable: true
  })
  update?: PatientsUpdateToOneWithWhereWithoutRdv_requestsInput | undefined;
}
