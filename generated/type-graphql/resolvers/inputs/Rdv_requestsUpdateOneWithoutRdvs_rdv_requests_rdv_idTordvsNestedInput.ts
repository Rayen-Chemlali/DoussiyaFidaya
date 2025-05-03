import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsCreateOrConnectWithoutRdvs_rdv_requests_rdv_idTordvsInput } from "../inputs/Rdv_requestsCreateOrConnectWithoutRdvs_rdv_requests_rdv_idTordvsInput";
import { Rdv_requestsCreateWithoutRdvs_rdv_requests_rdv_idTordvsInput } from "../inputs/Rdv_requestsCreateWithoutRdvs_rdv_requests_rdv_idTordvsInput";
import { Rdv_requestsUpdateToOneWithWhereWithoutRdvs_rdv_requests_rdv_idTordvsInput } from "../inputs/Rdv_requestsUpdateToOneWithWhereWithoutRdvs_rdv_requests_rdv_idTordvsInput";
import { Rdv_requestsUpsertWithoutRdvs_rdv_requests_rdv_idTordvsInput } from "../inputs/Rdv_requestsUpsertWithoutRdvs_rdv_requests_rdv_idTordvsInput";
import { Rdv_requestsWhereInput } from "../inputs/Rdv_requestsWhereInput";
import { Rdv_requestsWhereUniqueInput } from "../inputs/Rdv_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Rdv_requestsUpdateOneWithoutRdvs_rdv_requests_rdv_idTordvsNestedInput", {})
export class Rdv_requestsUpdateOneWithoutRdvs_rdv_requests_rdv_idTordvsNestedInput {
  @TypeGraphQL.Field(_type => Rdv_requestsCreateWithoutRdvs_rdv_requests_rdv_idTordvsInput, {
    nullable: true
  })
  create?: Rdv_requestsCreateWithoutRdvs_rdv_requests_rdv_idTordvsInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsCreateOrConnectWithoutRdvs_rdv_requests_rdv_idTordvsInput, {
    nullable: true
  })
  connectOrCreate?: Rdv_requestsCreateOrConnectWithoutRdvs_rdv_requests_rdv_idTordvsInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsUpsertWithoutRdvs_rdv_requests_rdv_idTordvsInput, {
    nullable: true
  })
  upsert?: Rdv_requestsUpsertWithoutRdvs_rdv_requests_rdv_idTordvsInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsWhereInput, {
    nullable: true
  })
  disconnect?: Rdv_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsWhereInput, {
    nullable: true
  })
  delete?: Rdv_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsWhereUniqueInput, {
    nullable: true
  })
  connect?: Rdv_requestsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsUpdateToOneWithWhereWithoutRdvs_rdv_requests_rdv_idTordvsInput, {
    nullable: true
  })
  update?: Rdv_requestsUpdateToOneWithWhereWithoutRdvs_rdv_requests_rdv_idTordvsInput | undefined;
}
