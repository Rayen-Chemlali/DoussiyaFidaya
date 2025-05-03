import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateOrConnectWithoutLab_requestsInput } from "../inputs/PatientsCreateOrConnectWithoutLab_requestsInput";
import { PatientsCreateWithoutLab_requestsInput } from "../inputs/PatientsCreateWithoutLab_requestsInput";
import { PatientsUpdateToOneWithWhereWithoutLab_requestsInput } from "../inputs/PatientsUpdateToOneWithWhereWithoutLab_requestsInput";
import { PatientsUpsertWithoutLab_requestsInput } from "../inputs/PatientsUpsertWithoutLab_requestsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsUpdateOneRequiredWithoutLab_requestsNestedInput", {})
export class PatientsUpdateOneRequiredWithoutLab_requestsNestedInput {
  @TypeGraphQL.Field(_type => PatientsCreateWithoutLab_requestsInput, {
    nullable: true
  })
  create?: PatientsCreateWithoutLab_requestsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateOrConnectWithoutLab_requestsInput, {
    nullable: true
  })
  connectOrCreate?: PatientsCreateOrConnectWithoutLab_requestsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpsertWithoutLab_requestsInput, {
    nullable: true
  })
  upsert?: PatientsUpsertWithoutLab_requestsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateToOneWithWhereWithoutLab_requestsInput, {
    nullable: true
  })
  update?: PatientsUpdateToOneWithWhereWithoutLab_requestsInput | undefined;
}
